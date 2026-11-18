# Ortak düzen (yildizbros projeleri: NetHarita, NetAGS…)
Bu kurallar projeden bağımsızdır; her oturum başında eklenti yükler. Projeye özgü kural projenin CLAUDE.md'sindedir; çelişkide **proje kuralı önceliklidir**. Ders öğrenilince yalnız bu depo (`yildizbros/ortak-duzen`) güncellenir, projelere kopya yazılmaz.

## Eser
Proje sahibi coğrafya öğretmenidir, kod bilmez, Türkçe yazar. Kısa, sade Türkçe yaz; teknik ayrıntıyı ancak gerekirse ver; yapması gerekenleri madde madde yaz. Sorular tek mesajda, numaralı.

## Oturum
- **Adım = oturum.** Bir oturum bir iş; bitince kapanır. Aynı konudaki çok küçük adımlar tek oturumda birleştirilebilir (mikro adım yok).
- **Ad:** `<PROJE kısaltması> · <tür> · <konu>` (tür: adım kodu, `Yönetim`, `Yayın`, `Fikir`; bilgisayardaki oturumun sonuna `(yerel)`).
- **Model:** Fable: tasarım, prototip, karar · Opus: zor kod adımı, kodlama planı · Sonnet: kararı hazır işler, kolay kod, test, bütün yönetim oturumları. İş oturumun modeline uymuyorsa ilk mesajda söyle, işe başlama. İş türü oturum içinde değişirse model değiştirilmez: devir notu yaz, yeni oturum öner.
- **Uzun aradan** (bir saatten fazla) sonra ya da oturum çok uzayınca yeni oturum; önce DURUM.md güncellenip gönderilir.
- **Kapsam:** yalnız adımdaki iş. Fikirler devir notunda "Sonraya bırakılanlar"a yazılır, uygulanmaz.
- **Arşivleme:** işi biten, işi gönderilen, sonucu Eser'e bildirilen ve Eser'i bekleyen sorusu olmayan oturumu, oturumları yöneten oturum sormadan arşivler ve tek satırla bildirir. Şüphede arşivlenmez; başka projenin oturumuna dokunulmaz.

## Kayıt
- **DURUM.md** (projenin "şu an neredeyiz" dosyası; sınırı projede yazar): yalnız **adım bitince ve karar alınınca** güncellenir; "Çalışan" satırı yoktur; alt işte güncellenmez. Yalnız Eser "kota bitiyor, hesap değiştireceğim" derse o andan sonra her alt işte de yazılır. Güncellenince hemen gönderilir.
- **Devir notu** en çok 300 kelime: ne bitti, açık kararlar, sonraki oturumun bilmesi gerekenler, sonraya bırakılanlar. Şablon: `devir-ve-durum` becerisi.
- Kod sık gönderilir (konteyner kapanınca gönderilmemiş iş kaybolur).

## Belgeler
Her oturumda okunan dosyalar küçük kalır (CLAUDE.md ≈ 7 KB); başvuru belgeleri bölüm bölüm (`grep`) okunur; belge yerinde güncellenir, günlük gibi sona eklenmez. Boyut tavanı projeye göre değişir ve projenin kendi bekçisinde yazılır.

## Test
Kademeli koş: **hızlı** (değişen dosyaya eşlenen) → **adım** → **tam** (yalnız son adımda ya da Eser isterse). Uzun koşu arka planda; ilk kırmızıda dur, düzelt, `devam` ile sürdür. **Kırmızı test varken sonraki adıma geçilmez.** Ayrıntı: `kademeli-test` becerisi. Tasarım/metin değişince eski testi aynı adımda güncelle.

## Ekran ve inceleme
Ekran görüntüsü ve inceleme yalnız **paket sonunda** (ara adımda görüntü açılmaz, "önceki" görüntü alınmaz).

## Dal, birleştirme, yayın
Oturum yalnız kendi dalına yazar. `main`'e birleştirme ve yayın **yalnız Eser'in o anki açık sözüyle**; önceki onay sonrakine geçmez. Birleşen dala bir daha yazılmaz (DURUM.md birleştirmeden önce yazılır). Yasak: `git push --force`, geçmişi yeniden yazma, `git branch -D`. Ayrıntı: `dal-ve-birlestirme`.

## Gizli dosyalar
İmza anahtarı, bulut/Cloudflare anahtarı, dolu Firebase ayarı gibi gizli dosyalar depoya eklenmez, sohbete yazılmaz.
