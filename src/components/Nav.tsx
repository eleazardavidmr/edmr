import { whatsappLink, DEMO_MESSAGE } from '@/lib/site'

export default function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
      <a href="#top" className="font-display text-lg tracking-tight text-cream">
        EDMR<span className="text-ember-500">.</span>
      </a>

      <a
        href={whatsappLink(DEMO_MESSAGE)}
        target="_blank"
        rel="noreferrer"
        className="group hidden items-center gap-2 rounded-full border border-ember-800 px-4 py-2 font-display text-xs uppercase tracking-widest text-cream transition-colors hover:border-ember-500 hover:bg-ember-500 hover:text-ash sm:flex"
      >
        Agenda una demo
        <span className="transition-transform group-hover:translate-x-0.5">→</span>
      </a>
    </header>
  )
}
