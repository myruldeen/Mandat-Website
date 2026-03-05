import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

function pdfBlogPlugin() {
  const virtualModuleId = 'virtual:blog-pdfs'
  const resolvedVirtualModuleId = '\0' + virtualModuleId

  return {
    name: 'vite-plugin-pdf-blogs',
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const blogsDir = path.resolve(__dirname, 'public/blogs')
        let filesList = []

        if (fs.existsSync(blogsDir)) {
          const files = fs.readdirSync(blogsDir)
          filesList = files
            .filter(file => file.toLowerCase().endsWith('.pdf'))
            .map(file => {
              const filePath = path.join(blogsDir, file)
              const stat = fs.statSync(filePath)

              const slug = file.replace(/\.pdf$/i, '')

              // Generate title: 'data-scouting' -> 'Data Scouting'
              const title = file
                .replace(/\.pdf$/i, '')
                .replace(/[-_]/g, ' ')
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')

              const timestamp = stat.mtimeMs

              const dateObj = new Date(stat.mtime)
              const dateString = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })

              return {
                slug,
                title,
                date: dateString,
                timestamp,
                category: 'Research Report'
              }
            })
            // Sort from newest to oldest
            .sort((a, b) => b.timestamp - a.timestamp)
        }

        return `export default ${JSON.stringify(filesList)}`
      }
    },
    configureServer(server) {
      const blogsDir = path.resolve(__dirname, 'public/blogs')
      if (fs.existsSync(blogsDir)) {
        server.watcher.add(blogsDir)
      }
      server.watcher.on('all', (event, file) => {
        if (file.includes('public\\blogs') || file.includes('public/blogs')) {
          if (file.endsWith('.pdf')) {
            const mod = server.moduleGraph.getModuleById(resolvedVirtualModuleId)
            if (mod) {
              server.moduleGraph.invalidateModule(mod)
            }
            // Trigger an HMR full reload to fetch the new list
            server.ws.send({ type: 'full-reload', path: '*' })
          }
        }
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), pdfBlogPlugin()],
  base: '/',
})
