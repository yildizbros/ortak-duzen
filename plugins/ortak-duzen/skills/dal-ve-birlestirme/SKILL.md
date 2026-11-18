---
name: dal-ve-birlestirme
description: Dal, birleştirme (pull request) ve yayın işlerinde kullan: hangi dala yazılır, "birleştir"/"yayınla" için hangi onay gerekir, birleşen dal kuralı.
---
# Dal, birleştirme, yayın
- Oturum yalnız kendi dalına (`claude/...`) yazar ve gönderir. `main`, `yayin` ve paket dalları bulut oturumundan değişmez.
- **Birleştirme ve yayın yalnız Eser'in o anki açık sözüyle** ("birleştir", "yayınla"); önceki onay sonrakine, bir paketin onayı başka pakete geçmez. Şüphede sor.
- **Birleşen dala yazılmaz:** DURUM.md "birleşmiş" hâliyle birleştirmeden **önce** dala yazılır; birleştirmeden sonra o dala commit atılmaz (atılırsa dal birleşmemiş görünür). GitHub "Automatically delete head branches" açıktır; dalı kendisi siler.
- Pull request: başlık "Paket N: ad"; açıklamada devir özeti ve test özeti; depoda şablon varsa başlıklarını izle. Aynı dala iki oturum yazıyorsa göndermeden önce `git fetch` + `git rebase origin/<dal>`; çakışmada dur, Eser'e yaz.
- Yasak: `git push --force`, geçmişi yeniden yazma, `git branch -D`, başkasının dalını silme.
- Yayın sonrası canlı sürümü ve yayın iş akışının sonucunu denetle, Eser'e rapor yaz.
