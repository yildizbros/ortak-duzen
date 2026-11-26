# Ortak düzen (yildizbros projeleri: NetHarita, NetAGS…)
Projeden bağımsızdır, eklenti her oturum başında yükler. Projeye özgü kural projenin CLAUDE.md'sindedir; çelişkide **proje önceliklidir**. Ders öğrenilince yalnız `yildizbros/ortak-duzen` güncellenir.

## Eser
Proje sahibi coğrafya öğretmenidir, kod bilmez, Türkçe yazar. Kısa, sade Türkçe yaz; teknik ayrıntıyı ancak gerekirse ver; yapması gerekenleri madde madde yaz. Soru kuralı: "Oturum" bölümü.

## Oturum
- **Adım = oturum, adım küçük.** Bir oturum bir iş; bir adımda en çok **iki iş**. Plan satırı büyükse oturum açılmadan önce ikiye bölünür (bağlam her turda yeniden okunur; 8.2b oturumu 464 bin token'a çıktı).
- **Ad:** `<PROJE kısaltması> · <tür> · <konu>` (tür: adım kodu, `Yönetim`, `Yayın`, `Fikir`; bilgisayardaki oturumun sonuna `(yerel)`).
- **Model:** Opus yalnız tasarım, prototip, karar, zor kod, kodlama planı · Sonnet: kararı hazır işler, kolay kod, test, tarama, kırmızı onarım, tam tur, paket sonu, bütün yönetim oturumları. İş oturumun modeline uymuyorsa ilk mesajda söyle, başlama; iş türü oturum içinde değişirse devir notu yaz, yeni oturum öner.
- **Oturum uzunluğu (maliyet):** her tur bütün konuşmayı yeniden okur. Konuşma ≈ 150 bin token / ≈ 1 saat / ≈ 40 turu geçince ya da uzun aradan sonra: alt iş biter, DURUM.md ve devir notu (yarımsa YARIM) yazılıp gönderilir, "-2" oturumu önerilir ya da yönetici açar. Opus adımı ≈ 1 saatten uzun planlanmaz.
- **Oturum uzunluğu (maliyet):** her tur bütün konuşmayı yeniden okur. Konuşma ≈ 150 bin token'ı (ya da ≈ 1 saat / ≈ 40 turu) geçince alt iş biter, devir notu YARIM yazılır, gönderilir, "-2" oturumu önerilir ya da yönetici açar. Opus adımı ≈ 1 saatten uzun planlanmaz; büyük iş önceden bölünür.

- **Plan ve tek komut:** plan her adımı tek satır yapar (kod, iş, model, bağımlılık, kutu ☐/☑; kutu adımın kendi commit'inde işaretlenir). Eser tek komut yazar: "Paket N'nin sıradaki adımını yürüt"; ortak kalıp projenin adım becerisindedir.
- **Eser'e soru:** her zaman `AskUserQuestion` (seçenekli, öneri başta, tek mesajda en çok 4); düz metin yalnız seçenek mümkün değilse.
- **Gece yöneticisi:** alt oturumlara "bitince yöneticiye `send_message` ile bildir" satırını koyar; 60 dakikada bir kendini uyandırır (yedek), iş bitince uyanışı siler. Paket başına yenidir, paket bitince arşivlenir; çocukların konuşmasını okumaz, yalnız daldan bakar. Devir notundaki "Haiku'ya verilen işler: N" = 0 ise nedenini sorar.
- **Kapsam:** yalnız adımdaki iş. Fikirler devir notunda "Sonraya bırakılanlar"a yazılır, uygulanmaz.
- **Arşivleme:** işi biten, gönderilen, Eser'e bildirilen ve bekleyen sorusu olmayan oturumu yöneten oturum sormadan arşivler, tek satırla bildirir. Şüphede arşivlenmez; başka projeye dokunulmaz.

## Kayıt
- **DURUM.md** ("şu an neredeyiz"; sınırı projede): yalnız adım bitince ve karar alınınca güncellenir, hemen gönderilir; alt işte güncellenmez (Eser "kota bitiyor, hesap değiştireceğim" derse hariç).
- **Devir notu** en çok 300 kelime: ne bitti, açık kararlar, sonraki oturumun bilmesi gerekenler, sonraya bırakılanlar, "Haiku'ya verilen işler: N". Şablon: `devir-ve-durum` becerisi.
- **Bekleyen işler tek listede** (`SONRAYA.md`), **en çok 10 madde**: 11. gelince Eser biri seçip çıkarır ya da ikisi birleşir. Paket planlanırken her madde pakete alınır ya silinir; kalıcı "Sonraya bırakılanlar" buraya da yazılır.
- **Paket sonu temizliği paketin son oturumunun işidir:** biten paketin devir notları ve teslim dosyaları arşive, plan satırları silinir, bekleyen liste gözden geçirilir.
- Kod sık gönderilir (konteyner kapanınca gönderilmemiş iş kaybolur).

## Belgeler
Her oturumda okunan dosyalar küçük kalır (CLAUDE.md ≈ 7 KB); başvuru belgeleri `grep` ile bölüm bölüm okunur; belge yerinde güncellenir, günlük gibi eklenmez. Tavan projenin bekçisindedir.

## Test
Kademeli koş: **hızlı** → **adım** → **tam** (yalnız son adımda ya da Eser isterse). Uzun koşu arka planda, çıktı dosyaya; konuşmaya yalnız kırmızılar ve özet girer. İlk kırmızıda dur, düzelt, `devam` ile sürdür; **kırmızı varken sonraki adıma geçilmez.** Ayrıntı: `kademeli-test`. Tasarım/metin değişince eski testi aynı adımda güncelle.
**Yeni test önce kırmızı görülür** (düzeltmeden önce koş ya da kodu geçici boz); kalmıyorsa yeniden yaz. Test, kodun değerini kendi kopyasıyla değil davranışı sınar. Devir notuna "kırmızı görüldü" yazılır.
**Test yalnız kod değiştiğinde koşar** (artifact, inceleme sayfası, belge işinde koşmaz). **Paket sonu sırası:** inceleme sayfası → Eser'in notları → düzeltmeler (hızlı test) → tam test en sonda → birleştirme sorusu.

## Ekran ve inceleme
Ekran görüntüsü ve inceleme yalnız **paket sonunda** (ara adımda görüntü açılmaz, "önceki" görüntü alınmaz).

## Dal, birleştirme, yayın
Oturum yalnız kendi dalına yazar. `main`'e birleştirme ve yayın **yalnız Eser'in o anki açık sözüyle**; önceki onay sonrakine geçmez. Birleşen dala bir daha yazılmaz (DURUM.md birleştirmeden önce yazılır). Yasak: `git push --force`, geçmişi yeniden yazma, `git branch -D`. Ayrıntı: `dal-ve-birlestirme`.

## Gizli dosyalar
İmza anahtarı, bulut/Cloudflare anahtarı, dolu Firebase ayarı gibi gizli dosyalar depoya eklenmez, sohbete yazılmaz.

## Beceriler ve belge türleri
- **Tek yer kuralı:** bir kural tek yerde yazılır; aynı beceri hem ortakta hem projede olmaz. Yeni belge türü yalnız Eser'in onayıyla açılır.
- **Beceri sayısı:** bir projede (ortak + proje) en çok 10; önce mevcut beceriye bölüm eklenir, yenisi yalnız Eser'in onayıyla; her beceri tek iş yapar, tanımında "ne zaman kullanma" yazar.
- İki projede de aynı olduğu kanıtlanan beceri ortağa taşınır; yollar yerine projenin CLAUDE.md "Nerede ne var" tablosu kullanılır, satır eksikse beceri durur, sorar.

## Çalışma alışkanlıkları
- Kodda önce `grep`, sonra yalnız ilgili aralık; önceki devir notu okunur, kod yeniden keşfedilmez.
- Geçici betik (`_gecici_*`) yazılmaz; var olan araç parametreyle kullanılır.
- Kullanıcıya görünen metin Eser'e sorulmadan değişmez; yeni metin liste olarak sunulur.
- **Okuyucu ajanı (Haiku):** uzun belge okuma, çok dosyalı tarama, test koşusu ve uzun çıktı özeti `okuyucu` alt ajanına verilir, oturuma kısa özet döner; **Eser'in kalıcı izni, ayrıca sorulmaz.** Kararı hazır kolay iş için `yazici` (Sonnet). Kancalar büyük okuma/uzun test için uyarır, devir notunda satır yoksa kapanışı bir kez durdurur; sayı "Haiku'ya verilen işler: N" diye yazılır.
