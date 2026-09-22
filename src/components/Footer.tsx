import { whatsappLink, DEMO_MESSAGE, SITE } from '@/lib/site'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-ember-900/70 bg-ash px-6 py-12 sm:px-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-lg text-cream">
            <Logo className="h-7 w-7" />
            EDMR<span className="text-ember-500">.</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-cream-dim">
            Páginas, reservas y WhatsApp automático para negocios locales de {SITE.city}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-cream-dim sm:items-end">
          <a href={whatsappLink(DEMO_MESSAGE)} target="_blank" rel="noreferrer" className="transition-colors hover:text-ember-500">
            WhatsApp
          </a>
          <span>{SITE.city}</span>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl flex-col-reverse items-center justify-between gap-4 border-t border-ember-900/70 pt-6 text-xs text-cream-dim/70 sm:flex-row">
        <span>© {new Date().getFullYear()} EDMR. Todos los derechos reservados.</span>
        <span>Diseñado y construido en Cali.</span>
      </div>
    </footer>
  )
}
