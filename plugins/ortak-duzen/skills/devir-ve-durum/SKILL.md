---
name: devir-ve-durum
description: Adım bitince ya da karar alınınca devir notu yazarken ve DURUM.md güncellerken kullan. Şablonu ve güncelleme zamanını verir.
---
# Devir notu ve DURUM.md
**DURUM.md:** adım bitince ve karar alınınca güncelle, hemen gönder. "Çalışan" satırı yok; alt işte yazma. İstisna: Eser "kota bitiyor, hesap değiştireceğim" derse her alt işte de yaz. Biten işleri sil (izi devir notunda ve git'te); kalıcı kararı sabit belgeye taşı. Projenin boyut sınırına uy.

**Devir notu** (projenin devir klasörüne, en çok 300 kelime; yalnız güncel durum, ara güncelleme eski satırın yerine yazılır):
```
# Devir notu: <adım> (<tarih>)
**Durum:** bitti / yarım (neden) · **Dal / commit:** ...
## Yapılanlar
## Sabit dosyalarda değişen  (ne değişti ya da "yok")
## Bilerek yapılmayanlar / Sonraya bırakılanlar
## Test sonuçları  (sayılar, süre; "Test sayısı: önce → sonra", "Borç: önce → sonra")
**Haiku'ya verilen işler:** N  (0 ise nedeni; gece yöneticisi bitişte bu satıra bakar)
## Sonraki oturuma uyarılar ve açık kararlar
## Eser'in yapacakları  (madde madde)
```
Son mesaj Eser'e: ne değişti (3–5 madde), test sonucu, Eser'in yapacakları (madde madde).

**Sabit belgeler** yerinde güncellenir: sona günlük eklenmez, kalkan cümle silinir.
**Plan kutusu** (☐ → ☑) adımın kendi commit'indedir; DURUM.md yalnız "sıradaki" değiştiyse.
**Bekleyen işler** tek listede (≤ 10 madde, `ortak.md` "Kayıt"). **Paketin son oturumu** temizlik yapar: devir notları ve teslim arşive, plan satırları silinir, liste gözden geçirilir.

**Bağlam tavanı:** bağlam %25'i geçince commit + gönder, bu şablonla devir notu yaz (≤300 kelime), yöneticiye tek satır bildir, kapan.

**Ne zaman kullanma:** adım ortasında ara not için (kesilme riski yoksa).
