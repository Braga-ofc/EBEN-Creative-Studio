"use client";

import { ChevronLeft, ChevronRight, Play, Volume2, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import {
  drivePreview,
  mediaImage,
  mediaKey,
  type PortfolioCategory,
  type PortfolioGroup,
  type PortfolioMedia,
} from "@/content/portfolio";
import { cn } from "@/lib/cn";
import { pauseSmoothScroll, resumeSmoothScroll } from "@/lib/smooth-scroll";

type PortfolioGalleryProps = {
  categories: PortfolioCategory[];
};

type Opened = { category: number; group: number; media: number };

/** "3 vídeos", "1 vídeo e 1 foto", "2 prints". */
function countLabel(media: PortfolioMedia[]): string {
  const counts = [
    [media.filter((item) => item.kind === "video").length, "vídeo", "vídeos"],
    [media.filter((item) => item.kind === "photo").length, "foto", "fotos"],
    [media.filter((item) => item.kind === "screen").length, "print", "prints"],
  ] as const;
  const parts = counts.filter(([count]) => count > 0).map(([count, one, many]) => `${count} ${count === 1 ? one : many}`);
  return parts.join(" e ");
}

/**
 * Portfólio em abas, uma para cada pasta do Drive. Os cartões abrem um
 * visualizador (um <dialog>) com as fotos e os vídeos do grupo, um de cada
 * vez, sem sair da página. Os vídeos tocam no player do próprio Drive, que só
 * carrega quando o visualizador abre.
 */
export function PortfolioGallery({ categories }: PortfolioGalleryProps) {
  const baseId = useId();
  const [active, setActive] = useState(0);
  const [opened, setOpened] = useState<Opened | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  const tabId = (index: number) => `${baseId}-aba-${index}`;
  const panelId = (index: number) => `${baseId}-painel-${index}`;

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const last = categories.length - 1;
    const moves: Record<string, number> = {
      ArrowRight: active === last ? 0 : active + 1,
      ArrowLeft: active === 0 ? last : active - 1,
      Home: 0,
      End: last,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function open(category: number, group: number, media: number, trigger: HTMLElement) {
    returnFocus.current = trigger;
    setOpened({ category, group, media });
  }

  const close = useCallback(() => dialogRef.current?.close(), []);

  // Abre o <dialog> como modal quando há algo para mostrar e pausa a rolagem suave por trás.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!opened || !dialog || dialog.open) return;
    dialog.showModal();
    pauseSmoothScroll();
  }, [opened]);

  function onDialogClose() {
    setOpened(null);
    resumeSmoothScroll();
    returnFocus.current?.focus();
  }

  const group: PortfolioGroup | null = opened ? categories[opened.category].groups[opened.group] : null;
  const media = opened && group ? group.media[opened.media] : null;
  const total = group?.media.length ?? 0;
  const title = group ? (group.name ?? categories[opened!.category].label) : "";

  function step(delta: number) {
    if (!opened) return;
    const next = opened.media + delta;
    if (next < 0 || next >= total) return;
    setOpened({ ...opened, media: next });
  }

  function onDialogKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (event.key === "ArrowRight") step(1);
    if (event.key === "ArrowLeft") step(-1);
  }

  // Clique fora da mídia e dos botões fecha o visualizador.
  function onDialogClick(event: MouseEvent<HTMLDialogElement>) {
    const target = event.target as HTMLElement;
    if (target === event.currentTarget || target.dataset.viewerBackdrop !== undefined) close();
  }

  return (
    <div className="mt-14 lg:mt-20">
      <div role="tablist" aria-label="Portfólio por serviço" className="portfolio-tabs">
        {categories.map((category, index) => (
          <button
            key={category.id}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={tabId(index)}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls={panelId(index)}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={onTabKeyDown}
            className="portfolio-tab"
          >
            {category.label}
          </button>
        ))}
      </div>

      {categories.map((category, categoryIndex) => (
        <div
          key={category.id}
          id={panelId(categoryIndex)}
          role="tabpanel"
          aria-labelledby={tabId(categoryIndex)}
          hidden={active !== categoryIndex}
          className="pt-10 lg:pt-12"
        >
          <p className="max-w-[46ch] type-lead text-ash">{category.text}</p>

          {category.id === "social-media" ? (
            <div className="mt-12 flex flex-col gap-16 lg:gap-20">
              {category.groups.map((item, groupIndex) => {
                // Um vídeo como primeira mídia vira o vídeo principal do case, e os prints ficam de apoio.
                const lead = item.media[0]?.kind === "video" ? item.media[0] : null;
                const screens = lead ? item.media.slice(1) : item.media;
                const firstScreen = lead ? 1 : 0;
                const screenList = (
                  <ul className={cn("grid grid-cols-2 gap-3", lead ? "max-w-[16rem]" : "max-w-[22rem]")}>
                    {screens.map((entry, index) => (
                      <li key={mediaKey(entry)}>
                        <MediaTile
                          media={entry}
                          onOpen={(trigger) => open(categoryIndex, groupIndex, firstScreen + index, trigger)}
                        />
                      </li>
                    ))}
                  </ul>
                );

                return (
                  <article
                    key={item.id}
                    className={cn(
                      "grid gap-8 lg:grid-cols-12 lg:grid-rows-[auto_1fr] lg:gap-x-6",
                      groupIndex > 0 && "border-t border-ivory/15 pt-16 lg:pt-20",
                    )}
                  >
                    <div className="lg:col-span-4">
                      <h3 className="type-h3">{item.name}</h3>
                      <p className="mt-2 type-tag text-gold">{category.label}</p>
                      {item.result ? (
                        <>
                          <p className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <span className="type-figure text-gold">{item.result.value}</span>
                            <span className="type-small text-ash">{item.result.label}</span>
                          </p>
                          <p className="mt-3 max-w-[34ch] type-body text-ash">{item.result.text}</p>
                        </>
                      ) : null}
                    </div>

                    <div className="lg:col-span-8 lg:col-start-5 lg:row-span-2 lg:row-start-1">
                      {lead ? (
                        <LeadVideo
                          media={lead}
                          paused={opened !== null}
                          onOpen={(trigger) => open(categoryIndex, groupIndex, 0, trigger)}
                        />
                      ) : (
                        screenList
                      )}
                    </div>

                    {lead ? <div className="lg:col-span-4 lg:row-start-2">{screenList}</div> : null}
                  </article>
                );
              })}
            </div>
          ) : category.groups.length === 1 && !category.groups[0].name ? (
            <ul className="mt-12 grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-7">
              {category.groups[0].media.map((entry, mediaIndex) => (
                <li key={mediaKey(entry)}>
                  <MediaTile media={entry} onOpen={(trigger) => open(categoryIndex, 0, mediaIndex, trigger)} />
                </li>
              ))}
            </ul>
          ) : (
            <ul className="mt-12 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-6">
              {category.groups.map((item, groupIndex) => (
                <li key={item.id}>
                  <GroupCard group={item} onOpen={(trigger) => open(categoryIndex, groupIndex, 0, trigger)} />
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <dialog
        ref={dialogRef}
        className="viewer"
        aria-labelledby={`${baseId}-titulo`}
        onClose={onDialogClose}
        onKeyDown={onDialogKeyDown}
        onClick={onDialogClick}
        data-lenis-prevent
      >
        {media && group ? (
          <>
            <div className="viewer__bar">
              <p id={`${baseId}-titulo`} className="min-w-0 truncate font-display text-lg">
                {title}
              </p>
              <button type="button" onClick={close} className="viewer__button" aria-label="Fechar">
                <X aria-hidden="true" strokeWidth={1.5} className="size-6" />
              </button>
            </div>

            <div className="viewer__stage" data-viewer-backdrop>
              {media.kind === "video" && "driveId" in media ? (
                <iframe
                  key={media.driveId}
                  src={drivePreview(media.driveId)}
                  title={`Vídeo ${opened!.media + 1} de ${total}: ${title}`}
                  allow="autoplay; fullscreen; encrypted-media"
                  allowFullScreen
                  className={cn("viewer__media", media.landscape ? "viewer__media--landscape" : "viewer__media--portrait")}
                />
              ) : media.kind === "video" && "src" in media ? (
                // Vídeo do próprio site: começa sozinho, porque o visitante acabou de clicar para assistir.
                <video
                  key={media.src}
                  src={media.src}
                  poster={media.poster}
                  controls
                  autoPlay
                  playsInline
                  aria-label={`Vídeo ${opened!.media + 1} de ${total}: ${media.alt ?? title}`}
                  className={cn("viewer__media", media.landscape ? "viewer__media--landscape" : "viewer__media--portrait")}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- miniatura servida pelo Google Drive
                <img
                  key={mediaKey(media)}
                  src={mediaImage(media, media.kind === "screen" ? 1080 : 1600)}
                  alt={media.alt ?? title}
                  referrerPolicy="no-referrer"
                  className="viewer__media viewer__media--image"
                />
              )}
            </div>

            <div className="viewer__bar viewer__bar--bottom">
              <button
                type="button"
                onClick={() => step(-1)}
                disabled={opened!.media === 0}
                className="viewer__button"
                aria-label="Anterior"
              >
                <ChevronLeft aria-hidden="true" strokeWidth={1.5} className="size-7" />
              </button>
              <p className="type-small text-ash tabular-nums" aria-live="polite">
                {opened!.media + 1} de {total}
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                disabled={opened!.media === total - 1}
                className="viewer__button"
                aria-label="Próximo"
              >
                <ChevronRight aria-hidden="true" strokeWidth={1.5} className="size-7" />
              </button>
            </div>
          </>
        ) : null}
      </dialog>
    </div>
  );
}

type OpenHandler = (trigger: HTMLElement) => void;

/** Uma foto, um print ou um vídeo solto, no formato vertical. */
function MediaTile({ media, onOpen }: { media: PortfolioMedia; onOpen: OpenHandler }) {
  const isScreen = media.kind === "screen";
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => onOpen(event.currentTarget)}
      className={cn("tile", isScreen ? "aspect-[1179/2556] rounded-[14px]" : "aspect-[9/16]")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- miniatura servida pelo Google Drive */}
      <img
        src={mediaImage(media, 480)}
        alt={media.alt ?? ""}
        width={480}
        height={isScreen ? 1041 : 853}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="tile__image"
      />
    </button>
  );
}

/** Uma subpasta do Drive: capa, nome e quantas mídias tem. */
function GroupCard({ group, onOpen }: { group: PortfolioGroup; onOpen: OpenHandler }) {
  const cover = group.media[0];
  const hasVideo = group.media.some((item) => item.kind === "video");
  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => onOpen(event.currentTarget)}
      className="group/card block w-full text-left"
    >
      <span className="tile aspect-[9/16]">
        {/* eslint-disable-next-line @next/next/no-img-element -- miniatura servida pelo Google Drive */}
        <img
          src={mediaImage(cover, 480)}
          alt=""
          width={480}
          height={853}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="tile__image"
        />
        {hasVideo ? (
          <span className="tile__play" aria-hidden="true">
            <Play strokeWidth={0} fill="currentColor" className="size-4 translate-x-px" />
          </span>
        ) : null}
      </span>
      <span className="mt-3 block font-sans text-[0.9375rem] font-semibold text-ivory">{group.name}</span>
      <span className="mt-0.5 block type-small text-ash">{countLabel(group.media)}</span>
    </button>
  );
}

type LeadVideoProps = {
  media: PortfolioMedia;
  /** Pausa enquanto o visualizador está aberto, para o vídeo não tocar duas vezes. */
  paused: boolean;
  onOpen: OpenHandler;
};

/**
 * Vídeo principal de um case. Arquivo do site roda sozinho, sem som e em
 * loop, mas só enquanto está na tela: fora dela (ou com a aba fechada) fica
 * parado e nem começa a baixar. O clique abre o visualizador, com som e
 * controles. Vídeo do Drive mostra a capa com o play.
 */
function LeadVideo({ media, paused, onOpen }: LeadVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const onScreen = useRef(false);
  const fromSite = "src" in media;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const sync = () => {
      if (onScreen.current && !paused) video.play().catch(() => {});
      else video.pause();
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    sync();
    return () => observer.disconnect();
  }, [paused]);

  return (
    <button
      type="button"
      aria-haspopup="dialog"
      onClick={(event) => onOpen(event.currentTarget)}
      className={cn("tile", media.landscape ? "aspect-video" : "aspect-[9/16] max-w-[22rem]")}
    >
      {fromSite ? (
        <video
          ref={videoRef}
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="tile__image"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- miniatura servida pelo Google Drive
        <img
          src={mediaImage(media, 1280)}
          alt=""
          width={1280}
          height={media.landscape ? 720 : 2276}
          loading="lazy"
          decoding="async"
          className="tile__image"
        />
      )}
      {fromSite ? (
        <span className="tile__sound" aria-hidden="true">
          <Volume2 strokeWidth={1.75} className="size-4" />
          Ver com som
        </span>
      ) : (
        <span className="tile__play tile__play--lead" aria-hidden="true">
          <Play strokeWidth={0} fill="currentColor" className="size-7 translate-x-0.5" />
        </span>
      )}
      <span className="sr-only">Assistir ao vídeo com som: {media.alt}</span>
    </button>
  );
}
