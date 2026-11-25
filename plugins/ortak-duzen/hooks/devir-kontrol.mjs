// Stop: değişen devir notunda "Haiku'ya verilen işler:" satırı yoksa (ya da N=0 ve gerekçesizse)
// oturum başına en çok bir kez kapanışı engeller. Hata olursa sessiz geçer.
import { readFileSync, statSync, existsSync, writeFileSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
try {
  const inp = JSON.parse(readFileSync(0, 'utf8'));
  if (inp.stop_hook_active) process.exit(0);
  const cwd = inp.cwd || process.cwd();
  const sid = String(inp.session_id || 'x').replace(/[^\w-]/g, '');
  const isaret = join(tmpdir(), `ortak-duzen-devir-${sid}`);
  if (existsSync(isaret)) process.exit(0);
  const out = execFileSync('git', ['status', '--porcelain', '-uall'], { cwd, encoding: 'utf8', timeout: 4000, stdio: ['ignore', 'pipe', 'ignore'] });
  const root = execFileSync('git', ['rev-parse', '--show-toplevel'], { cwd, encoding: 'utf8', timeout: 4000, stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  let en = null, enT = 0;
  for (const l of out.split('\n')) {
    let f = l.slice(3).trim().replace(/^"|"$/g, '');
    if (f.includes(' -> ')) f = f.split(' -> ')[1];
    if (!/(^|\/)devir[^/]*\.md$/i.test(f) && !/(^|\/)devir\/[^/]+\.md$/i.test(f)) continue;
    if (/^\s*D|^D/.test(l.slice(0, 2))) continue;
    try { const t = statSync(join(root, f)).mtimeMs; if (t > enT) { enT = t; en = f; } } catch {}
  }
  if (!en) process.exit(0);
  const txt = readFileSync(join(root, en), 'utf8');
  const m = txt.match(/Haiku'ya verilen işler:\**\s*(\d+)([^\n]*)/i);
  let reason = '';
  if (!m) reason = `${en} devir notunda "Haiku'ya verilen işler: N" satırı yok. Satırı ekle (N = okuyucu/Haiku ajanına verilen iş sayısı; 0 ise nedenini parantezle yaz).`;
  else if (Number(m[1]) === 0 && !/\([^)]*\S[^)]*\)/.test(m[2])) reason = `${en} içinde "Haiku'ya verilen işler: 0" ama gerekçe parantezi yok. Nedenini parantez içinde ekle, ör. "0 (iş tek küçük düzenleme)". Mümkünse işi okuyucu ajanına ver.`;
  if (!reason) process.exit(0);
  writeFileSync(isaret, '1');
  process.stdout.write(JSON.stringify({ decision: 'block', reason }));
} catch { /* sessiz geç */ }
process.exit(0);
