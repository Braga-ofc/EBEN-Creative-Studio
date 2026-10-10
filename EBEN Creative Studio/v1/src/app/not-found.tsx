import type { Metadata } from "next";
import Link from "next/link";
import { Monogram } from "@/components/brand/Monogram";
import { brand } from "@/content/site";

export const metadata: Metadata = {
  title: `Página não encontrada | ${brand.name}`,
  description: "Este endereço não existe. Volte para a página inicial da EBEN Creative Studio.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="shell flex min-h-svh flex-col items-start justify-center gap-8 py-24">
      <Monogram className="size-16 text-ivory" title={brand.name} />
      <h1 className="max-w-[14ch] type-statement">Esta história ainda não foi contada.</h1>
      <p className="max-w-[44ch] type-lead text-mist">
        O endereço que você abriu não existe. A página da EBEN continua no mesmo lugar.
      </p>
      <Link
        href="/"
        className="inline-flex h-14 items-center bg-ivory px-7 font-semibold text-burgundy transition-colors hover:bg-gold hover:text-charcoal"
      >
        Voltar para a página inicial
      </Link>
    </main>
  );
}
