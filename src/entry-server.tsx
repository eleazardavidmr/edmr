import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.tsx'
import { structuredData } from './seo'

/**
 * Render en build (no hay servidor en producción): scripts/prerender.mjs llama a esto
 * y mete el HTML dentro de #root, así Google y las vistas previas de links leen el
 * contenido sin ejecutar JavaScript. En el navegador, main.tsx hidrata ese HTML.
 */
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}

/** Etiquetas extra para el <head>: el JSON-LD sale de los mismos datos que la página. */
export function headTags(): string {
  // "<" escapado para que ningún texto pueda cerrar el <script> antes de tiempo.
  const json = JSON.stringify(structuredData()).replace(/</g, '\\u003c')
  return `<script type="application/ld+json">${json}</script>`
}
