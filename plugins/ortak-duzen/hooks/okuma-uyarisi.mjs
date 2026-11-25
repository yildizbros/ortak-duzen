// PreToolUse: engellemez, yalnız uyarı ekler. Hata olursa sessiz geçer.
import { readFileSync, statSync } from 'node:fs';
try {
  const inp = JSON.parse(readFileSync(0, 'utf8'));
  const ti = inp.tool_input || {};
  let msg = '';
  if (inp.tool_name === 'Read') {
    const p = ti.file_path;
    if (p && ti.limit == null) {
      const st = statSync(p);
      if (st.isFile() && st.size < 20e6 && st.size > 8000) {
        const lines = readFileSync(p, 'utf8').split('\n').length;
        if (lines > 400) msg = `Uyarı: ${p} ${lines} satır ve sınırsız okunuyor. Bunu okuyucu ajanına ver (Eser'in kalıcı izni var) ya da limit/offset ile ilgili aralığı oku.`;
      }
    }
  } else if (inp.tool_name === 'Bash') {
    const c = String(ti.command || '');
    const uzun = /(^|[\s;&|(])(test_calistir\S*|npm\s+(run\s+)?test\b|npx\s+(vitest|jest|playwright)\b|tsc(\s|$)|pytest\b|vitest\b|jest\b)/.test(c);
    const yonlendi = />|\btail\b|\bhead\b|\bgrep\b|\btee\b/.test(c);
    if (uzun && !yonlendi) msg = 'Uyarı: uzun test/derleme çıktısı oturum bağlamına girecek. Çıktıyı dosyaya yönlendir (`> /tmp/cikti.txt 2>&1; tail -20 /tmp/cikti.txt`) ya da koşuyu okuyucu ajanına ver.';
  }
  if (msg) process.stdout.write(JSON.stringify({ hookSpecificOutput: { hookEventName: 'PreToolUse', additionalContext: msg } }));
} catch { /* sessiz geç */ }
process.exit(0);
