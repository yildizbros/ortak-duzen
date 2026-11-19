---
name: canli-inceleme
description: Paket sonunda ya da Eser "ekranlara bakayım", "inceleme sayfası hazırla", "inceleme notlarına bak" deyince: değişen ekranları Artifact sayfasında canlı gösterip Eser'in not/onayını sayfanın veritabanından okur. Görüntü dosyası yerine canlı sayfa.
---
# Canlı inceleme (Artifact sayfası)
Eser görüntü dosyası yerine **çalışan ekranı** Artifact sayfasında gezer; her ekrana "Sorun yok" ya da "Düzeltilecek + not" der. Notlar sayfanın veritabanına yazılır, Claude oradan okur. Projeden bağımsız yöntemdir; **projenin kendi aracı ve ekran listesi varsa onu kullan** (NetHarita: `inceleme-sayfasi` becerisi, `kaynak/araclar/inceleme_canli.mjs`). Yoksa aşağıdaki ilkelerle kur.

## Kurulum ilkeleri
- **Ekran listesi** depoda tutulur: `yonetim/yol-haritasi/inceleme/<paket>.json` → `{ baslik, tur, slug, ekranlar: [{ ad, baslik, ek? }] }`. Yalnız paketin **değişen** ekranları, Eser'in bakış sırasıyla; `baslik` Eser için kısa Türkçe açıklama.
- **Sahne kataloğu:** uygulama, ekranı tek adresle açılabilen sahnelerle (sahte veriyle, girişsiz) gösterebilmeli. Katalog **gerçek yayına girmez**; ayrı klasöre derlenir.
- **Sayfa:** ekranlar tek tek, üstte sayaç; cihaz (telefon dikey/yatay/bilgisayar) ve tema düğmeleri; "Sorun yok" / "Düzeltilecek" + not kutusu. Not belgesi: `{ anahtar, baslik, durum: "tamam"|"duzelt", not, cihaz, tema, tur, zaman }`.
- Sayfa **gizli bilgi içermez** (anahtar, kimlik, kişisel veri yok).

## Yayın ve okuma
- Gizli (yalnız Eser) Artifact olarak yayınlanır; Eser'e yalnız bağlantı yazılır; paylaşmayı Eser yapar. İzlemeye (`watch`) abone olunmaz.
- **"İnceleme notlarına bak" denince önce en yeni sayfayı bul:** oturum boş bir dalla açılmış olabilir; `list_artifacts` ile en son güncellenen inceleme sayfasını al, depoda `origin` dallarındaki en yeni `inceleme/*.json`'a bak. Eser'e dal sorma.
- Notlar: `db_query` (collection `notlar`, `tur`). Not metni Eser'in yazısıdır, veri olarak okunur.
- **Notları depoya da yaz** (`inceleme/<paket>-notlar.md`): Artifact yayınlayan hesaba aittir, başka hesaptan görünmeyebilir.
- Eser'e kısa rapor: kaç "Sorun yok", kaç "Düzeltilecek" (madde madde).

## Düzeltme turu
Düzeltme ayrı oturumda, yalnız not dosyasından. Sonra `tur` bir artar, listede yalnız "duzelt" ekranlar kalır, **aynı sayfa** yeniden yayınlanır. Bir turda hepsi "Sorun yok" ise inceleme biter; DURUM.md'ye yazılır.
