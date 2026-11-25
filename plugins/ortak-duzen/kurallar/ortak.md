# Ortak düzen (yildizbros projeleri: NetHarita, NetAGS…)
Bu kurallar projeden bağımsızdır; her oturum başında eklenti yükler. Projeye özgü kural projenin CLAUDE.md'sindedir; çelişkide **proje kuralı önceliklidir**. Ders öğrenilince yalnız bu depo (`yildizbros/ortak-duzen`) güncellenir, projelere kopya yazılmaz.

## Eser
Proje sahibi coğrafya öğretmenidir, kod bilmez, Türkçe yazar. Kısa, sade Türkçe yaz; teknik ayrıntıyı ancak gerekirse ver; yapması gerekenleri madde madde yaz. Sorular tek mesajda, numaralı.

## Oturum
- **Adım = oturum.** Bir oturum bir iş; bitince kapanır. Aynı konudaki çok küçük adımlar tek oturumda birleştirilebilir (mikro adım yok).
- **Ad:** `<PROJE kısaltması> · <tür> · <konu>` (tür: adım kodu, `Yönetim`, `Yayın`, `Fikir`; bilgisayardaki oturumun sonuna `(yerel)`).
- **Model:** Opus: tasarım, prototip, karar, zor kod adımı, kodlama planı · Sonnet: kararı hazır işler, kolay kod, test, bütün yönetim oturumları. İş oturumun modeline uymuyorsa ilk mesajda söyle, işe başlama. İş türü oturum içinde değişirse model değiştirilmez: devir notu yaz, yeni oturum öner.
- **Uzun aradan** (bir saatten fazla) sonra ya da oturum çok uzayınca yeni oturum; önce DURUM.md güncellenip gönderilir.
- **Plan ve tek komut:** plan her adımı tek satır yapar (kod, iş, model, bağımlılık, durum kutusu ☐/☑); kutu adımın kendi commit'inde işaretlenir. Eser tek komut yazar: "Paket N'nin sıradaki adımını yürüt" (ilk boş kutu). Ortak kalıp projenin adım becerisinde, adıma özel olan satırda yazar.
- **Plan ve tasarım oturumlarında** Eser'e sorular `AskUserQuestion` ile sorulur (seçenekli, tek mesajda).
- **Gece yöneticisi:** alt oturumlara "bitince yöneticiye `send_message` ile bildir" satırını koyar; ayrıca 30 dakikada bir kendini uyandırır (yedek), iş bitince uyanışı siler.
- **Kapsam:** yalnız adımdaki iş. Fikirler devir notunda "Sonraya bırakılanlar"a yazılır, uygulanmaz.
- **Arşivleme:** işi biten, işi gönderilen, sonucu Eser'e bildirilen ve Eser'i bekleyen sorusu olmayan oturumu, oturumları yöneten oturum sormadan arşivler ve tek satırla bildirir. Şüphede arşivlenmez; başka projenin oturumuna dokunulmaz.

## Kayıt
- **DURUM.md** (projenin "şu an neredeyiz" dosyası; sınırı projede yazar): yalnız **adım bitince ve karar alınınca** güncellenir; "Çalışan" satırı yoktur; alt işte güncellenmez. Yalnız Eser "kota bitiyor, hesap değiştireceğim" derse o andan sonra her alt işte de yazılır. Güncellenince hemen gönderilir.
- **Devir notu** en çok 300 kelime: ne bitti, açık kararlar, sonraki oturumun bilmesi gerekenler, sonraya bırakılanlar. Şablon: `devir-ve-durum` becerisi.
- **Bekleyen işler tek listede** (projenin `SONRAYA.md`'si), **en çok 10 madde**: 11. gelince Eser biri seçip çıkarır ya da ikisi birleşir. Paket planlanırken her madde ya pakete alınır ya silinir. Devir notundaki kalıcı "Sonraya bırakılanlar" buraya da yazılır.
- **Paket sonu temizliği paketin son oturumunun işidir:** biten paketin devir notları ve teslim dosyaları arşive, plan satırları silinir, bekleyen liste gözden geçirilir.
- Kod sık gönderilir (konteyner kapanınca gönderilmemiş iş kaybolur).

## Belgeler
Her oturumda okunan dosyalar küçük kalır (CLAUDE.md ≈ 7 KB); başvuru belgeleri bölüm bölüm (`grep`) okunur; belge yerinde güncellenir, günlük gibi sona eklenmez. Boyut tavanı projeye göre değişir ve projenin kendi bekçisinde yazılır.

## Test
Kademeli koş: **hızlı** (değişen dosyaya eşlenen) → **adım** → **tam** (yalnız son adımda ya da Eser isterse). Uzun koşu arka planda; ilk kırmızıda dur, düzelt, `devam` ile sürdür. **Kırmızı test varken sonraki adıma geçilmez.** Ayrıntı: `kademeli-test` becerisi. Tasarım/metin değişince eski testi aynı adımda güncelle.
**Yeni test önce kırmızı görülür:** yeni ya da değişen denetim bir kez kalmalı (düzeltmeden önce koş ya da kodu geçici boz, sonra geri al); kalmıyorsa hiçbir şey yakalamıyordur, yeniden yaz. Test, kodun ürettiği değeri kendi kopyasıyla karşılaştırmaz; davranışı (ekranda ne görünür, ne kaydedilir) sınar. Devir notuna "kırmızı görüldü" yazılır.

## Ekran ve inceleme
Ekran görüntüsü ve inceleme yalnız **paket sonunda** (ara adımda görüntü açılmaz, "önceki" görüntü alınmaz).

## Dal, birleştirme, yayın
Oturum yalnız kendi dalına yazar. `main`'e birleştirme ve yayın **yalnız Eser'in o anki açık sözüyle**; önceki onay sonrakine geçmez. Birleşen dala bir daha yazılmaz (DURUM.md birleştirmeden önce yazılır). Yasak: `git push --force`, geçmişi yeniden yazma, `git branch -D`. Ayrıntı: `dal-ve-birlestirme`.

## Gizli dosyalar
İmza anahtarı, bulut/Cloudflare anahtarı, dolu Firebase ayarı gibi gizli dosyalar depoya eklenmez, sohbete yazılmaz.

## Beceriler ve belge türleri
- **Tek yer kuralı:** bir kural tek yerde yazılır; aynı beceri hem ortakta hem projede olmaz. Yeni belge türü yalnız Eser'in onayıyla açılır.
- **Beceri sayısı:** bir projede (ortak + proje) en çok 10 beceri. Önce mevcut beceriye bölüm eklenir; yeni beceri yalnız Eser'in onayıyla. Her beceri tek iş yapar ve tanımında "ne zaman kullanma"yı yazar.
- Yalnız iki projede de aynı olduğu kanıtlanan beceri ortağa taşınır; proje yolları yerine projenin CLAUDE.md "Nerede ne var" tablosu kullanılır, tabloda satır eksikse beceri durur, sorar.

## Çalışma alışkanlıkları
- Kodda önce `grep`, sonra yalnız ilgili aralık; önceki devir notu okunur, kod yeniden keşfedilmez.
- Geçici betik (`_gecici_*`) yazılmaz; var olan araç parametreyle kullanılır.
- Kullanıcıya görünen metin Eser'e sorulmadan değişmez; yeni metin liste olarak sunulur.
- Uzun belge okuma ve çok dosyalı tarama Haiku alt ajanına verilir; yalnız kısa özet döner.
