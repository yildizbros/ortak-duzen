---
name: kademeli-test
description: Test koşarken (adım sonu, değişiklik sonrası, "testleri koş") kademeli düzeni uygular: hızlı, adım, tam; uzun testi arka planda koşma; ilk kırmızıda durup `devam` ile sürdürme. Projenin test koşucusu varsa onu kullanır.
---
# Kademeli test
1. **Hızlı:** değişen dosyaya eşlenen testler. Alt işlerde yalnız standart bekçi + tip denetimi (saniyeler).
2. **Adım:** hızlı + adımın kendi listesi. Her adımın sonunda bir kez.
3. **Tam:** bütün testler; yalnız son (kapanış) adımında ya da Eser isterse. Bütün ekranı gezen uzun testler yalnız burada.
Kurallar:
- Projenin koşucusunu kullan (NetHarita: `kaynak/araclar/test_calistir.mjs hizli|adim <NN>|konu <ad>|devam|tam`); yoksa `package.json` betikleri.
- **Uzun koşuyu arka planda başlat**; beklerken devir notunu ve belgeleri yaz. Çıktıyı konuşmaya ham basma; özeti ve yalnız kırmızı testin günlük sonunu oku (uzun günlük okumayı Haiku alt ajanına ver).
- **İlk yeni kırmızıda dur,** nedenini düzelt, baştan değil `devam` ile sürdür (geçen, dosyası değişmeyen testler tekrar koşmaz).
- **Kırmızı varken sonraki adıma geçme.** Düzeltilemezse dur, Eser'e sor. Bilinen-kırmızı listesine yalnız Eser'in kararıyla, düzeltileceği adım yazılarak eklenir.
- Davranış, kimlik ya da metin değişince onu arayan testleri (`grep`) bul ve aynı adımda güncelle.
- **Testte veriden gelen sayı** (harita, yer, kilit sayısı) sabit yazılmaz; veriden okunur.
- **Yeni test dosyası açma;** yeni davranış konu testine bölüm olur, sığmazsa Eser'e sor.
- **Adım yalnız kendi davranışını sınar;** bütün ekranı gezen taramalar yalnız tam turda.
- **Aynı konudaki küçük maddeler tek dalda;** aralarında yalnız hızlı denetim, uzun test sonda bir kez.
- **Borç ve bilinen-kırmızı listesi yalnız kısalır;** ekleme yalnız Eser'in onayıyla.
- Test çıktısı sohbete ham basılmaz: özet ve kırmızının son satırları.
- Koşudan sonra üretilmiş dosyaları geri al; `git status` temiz olmalı.
- Devir notuna sayı özetini yaz (kaç test, süre).

**Ne zaman kullanma:** test koşmayan işte (belge, devir notu) ve proje kendi koşucusunu şart koşmuşsa onun kuralı önceliklidir.
