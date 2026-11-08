import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const root = new URL('../', import.meta.url);
export const pages = ['index.html','mentoring/index.html','big-mac/index.html'];
export async function renderPartial(name, page) {
  const template = await readFile(new URL(`shared/${name}.html`,root),'utf8');
  const prefix = page === 'index.html' ? './' : '../';
  return template.replaceAll('{{ROOT}}',prefix).trim();
}
export async function syncLayout() {
  for (const page of pages) {
    const path = new URL(page,root);
    let html = await readFile(path,'utf8');
    for (const name of ['header','footer']) {
      const region = new RegExp(`<!-- shared:${name}:start -->[\\s\\S]*?<!-- shared:${name}:end -->`);
      if (!region.test(html)) throw new Error(`Missing ${name} region: ${page}`);
      html = html.replace(region,`<!-- shared:${name}:start -->\n${await renderPartial(name,page)}\n<!-- shared:${name}:end -->`);
    }
    await writeFile(path,html);
  }
}
if (process.argv[1] === fileURLToPath(import.meta.url)) await syncLayout();
