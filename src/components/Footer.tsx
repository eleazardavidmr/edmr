import { callLink, contactLink, SITE } from '@/lib/site'
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
            EDMR es {SITE.owner}. Páginas web para negocios locales en Cali, desde {SITE.since}.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-cream-dim sm:items-end">
          <a href={contactLink} target="_blank" rel="noreferrer" className="transition-colors hover:text-ember-500">
            WhatsApp
          </a>
          <a href={callLink} target="_blank" rel="noreferrer" className="transition-colors hover:text-ember-500">
            Agendar llamada
          </a>
          <span>{SITE.city}</span>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-5xl items-center justify-center border-t border-ember-900/70 pt-6 text-xs text-cream-dim/70 sm:justify-start">
        <span>
          © {new Date().getFullYear()} EDMR · {SITE.owner}
        </span>
      </div>
    </footer>
  )
}
