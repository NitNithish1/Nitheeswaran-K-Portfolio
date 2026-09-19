import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'photo-upload-handler',
        configureServer(server) {
          server.middlewares.use('/api/upload-photo', (req, res) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', () => {
                try {
                  const data = JSON.parse(body);
                  if (data && data.image) {
                    const base64Data = data.image.replace(/^data:image\/\w+;base64,/, '');
                    const buffer = Buffer.from(base64Data, 'base64');
                    const pubDir = path.resolve(__dirname, 'public');
                    const assetsDir = path.resolve(__dirname, 'public/assets');
                    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });
                    fs.writeFileSync(path.resolve(pubDir, 'photo.jpg'), buffer);
                    fs.writeFileSync(path.resolve(assetsDir, 'photo.jpg'), buffer);
                    fs.writeFileSync(path.resolve(__dirname, 'photo.jpg'), buffer);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: true, path: '/photo.jpg' }));
                    return;
                  }
                  res.writeHead(400, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: 'No image provided' }));
                } catch (err) {
                  res.writeHead(500, { 'Content-Type': 'application/json' });
                  res.end(JSON.stringify({ error: String(err) }));
                }
              });
            } else {
              res.writeHead(405, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Method Not Allowed' }));
            }
          });
        }
      }
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
