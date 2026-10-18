// Inyecta el HTML pre-renderizado de la app en dist/index.html.
// Corre después de `vite build` (cliente) y `vite build --ssr` (dist-ssr/entry-server.js).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const templatePath = path.join(root, 'dist/index.html')
const serverEntry = path.join(root, 'dist-ssr/entry-server.js')

const { render, headTags } = await import(pathToFileURL(serverEntry).href)
const appHtml = render()

const template = readFileSync(templatePath, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error('prerender: no se encontró <div id="root"></div> en dist/index.html')
}

writeFileSync(
  templatePath,
  template
    .replace('</head>', `  ${headTags()}\n  </head>`)
    .replace(placeholder, `<div id="root">${appHtml}</div>`),
)
rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`prerender: ${(appHtml.length / 1024).toFixed(1)} KB de HTML inyectado en dist/index.html`)
