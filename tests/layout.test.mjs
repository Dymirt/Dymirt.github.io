import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {pages,renderPartial} from '../scripts/sync-layout.mjs';
const root = new URL('../',import.meta.url);
for (const page of pages) {
  test(`${page} uses the current shared layout and working internal links`, async () => {
    const html = await readFile(new URL(page,root),'utf8');
    for (const name of ['header','footer']) {
      const region = html.match(new RegExp(`<!-- shared:${name}:start -->\\s*([\\s\\S]*?)\\s*<!-- shared:${name}:end -->`));
      assert.ok(region,`Missing ${name}`);
      assert.equal(region[1],await renderPartial(name,page));
    }
    assert.equal((html.match(/id="menuButton"/g) || []).length,1);
    assert.equal((html.match(/id="year"/g) || []).length,1);
    assert.ok(html.includes('shared/site-layout.js?v='));
    assert.ok(html.includes('shared/site-layout.css?v='));
    for (const match of html.matchAll(/href="((?:\.\/|\.\.\/)[^"#?]*)[^"]*"/g)) {
      let url = new URL(match[1],new URL(page,root));
      if (url.pathname.endsWith('/')) url = new URL('index.html',url);
      await access(url);
    }
  });
}
