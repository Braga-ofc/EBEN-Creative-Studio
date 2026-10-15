import { Lockup } from "@/components/brand/Lockup";
import { ConsultationButton } from "@/components/ui/ConsultationButton";
import { brand, navigation } from "@/content/site";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-ivory/15 bg-burgundy">
      <div className="shell flex h-16 items-center justify-between gap-6 lg:h-[72px]">
        <a
          href="#topo"
          aria-label={`${brand.name}, voltar ao início`}
          className="text-[13px] text-ivory sm:text-[15px]"
        >
          <Lockup />
        </a>

        <nav aria-label="Seções da página" className="hidden lg:block">
          {/* Cinco âncoras: o espaço entre elas só abre a partir de 1280px, para caberem numa linha em 1024px. */}
          <ul className="flex items-center gap-6 xl:gap-9">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="type-small font-medium whitespace-nowrap text-mist decoration-gold transition-colors hover:text-ivory hover:underline"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ConsultationButton size="sm" className="hidden md:inline-flex" />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
