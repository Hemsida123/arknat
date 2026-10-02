import { cpSync, mkdirSync, copyFileSync } from 'node:fs';
mkdirSync('dist', { recursive: true });
for (const file of ['index.html', 'style.css', 'script.js']) copyFileSync(file, `dist/${file}`);
cpSync('assets', 'dist/assets', { recursive: true });
