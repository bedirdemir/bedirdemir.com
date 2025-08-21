---
id: 4
title: "Uydu Verileri ile Bitki Sağlığını İzleme: VIIRS Tabanlı fAPAR Anomali Analizi"
description: "fAPAR anomalileri, tarımsal verim kayıplarının öngörülmesi, ekosistem sağlığının değerlendirilmesi ve kuraklık erken uyarı sistemlerinde kritik rol oynamaktadır."
date: "21 Ağustos 2025"
image: "/img/post/ChatGPTImage21Ağu202507_43_04-min.png"
---

Bitki sağlığı, tarımsal üretimden ekosistem yönetimine ve iklimsel etkileşimlere kadar pek çok sürecin merkezinde yer almaktadır. Uzaktan algılama teknolojileri, bitki sağlığının küresel ölçekteki durumunu sürekli, nesnel ve karşılaştırılabilir biçimde izleme imkanı sağlamaktadır. Bu bağlamda **fAPAR (Fraction of Absorbed Photosynthetically Active Radiation)** yani fotosentetik olarak aktif radyasyonun bitkiler tarafından absorbe edilen miktarı, en kritik biyofiziksel değişkenlerden biri olarak öne çıkmaktadır.

fAPAR, fotosentetik spektrumda (400–700 nm) yer alan güneş ışınımının ne kadarının bitkiler tarafından fotosentez için kullanıldığını ölçer. Değeri 0 ile 1 arasında değişen bir parametredir: 0 absorbe olmadığını, 1 ise gelen ışınımın tamamen absorbe edildiğini gösterir. Bu özelliği sayesinde fAPAR, bitki sağlığı ve üretkenliği için doğrudan bir gösterge olarak kullanılmaktadır.

fAPAR hesaplamaları, NASA ve NOAA’nın ortak geliştirdiği VIIRS (Visible Infrared Imaging Radiometer Suite) sensöründen türetilen verilerle yapılmaktadır. VIIRS, Suomi-NPP (2011) ve NOAA-20 (2017) uydularında bulunan çok bantlı bir radyometredir. MODIS’in (2000’den itibaren) sağladığı uzun zaman serisini devam ettirecek şekilde tasarlanmıştır. VIIRS, yaklaşık 500m mekansal çözünürlük ve günlük/haftalık tekrar sıklığı ile yüksek kaliteli küresel gözlemler sunar.

fAPAR değerleri VIIRS’in kırmızı (~0,64 µm) ve yakın kızılötesi (~0,86 µm) bantlarından türetilen algoritmalara dayalıdır.

![[https://pace.oceansciences.org/gallery_more.htm?id=148](https://pace.oceansciences.org/gallery_more.htm?id=148)](/img/post/history08_suomi-npp-min.png)

Mutlak fAPAR değerleri bitki örtüsünün mevcut durumunu yansıtsa da, iklimsel stresleri tespit etmek için anomali hesaplamaları daha anlamlıdır. Anomali, belirli bir zaman dilimindeki fAPAR değerinin uzun dönem ortalamasından sapması olarak tanımlanır:

![fAPAR-anomaly](/img/post/EkranResmi2025-08-2106.38.17.png "fAPAR-anomaly")

- **Negatif anomaliler (≤ -2):** Vejetasyon stresine ve özellikle kuraklık kaynaklı su stresi koşullarına işaret eder.
- **Pozitif anomaliler (≥ +2):** Ortalama üzeri büyüme ve sağlıklı bitki gelişimi koşullarını gösterir.

Bu yöntem, 2003 Avrupa kuraklığı ve 2005 Avustralya kuraklığı gibi olaylarda vejetatif üretkenliğin nasıl etkilendiğini ortaya koymak için başarıyla kullanılmıştır.

![TR-fAPAR-anomaly](/img/post/EkranResmi2025-08-2106.55.14.png "TR-fAPAR-anomaly")
![KZ-fAPAR-anomaly](/img/post/EkranResmi2025-08-2106.56.28.png "KZ-fAPAR-anomaly")

fAPAR anomalileri: Tarımsal ürünlerin gelişiminde yaşanan olumsuz koşulların erken teşhisi, yağış eksikliği ve kuraklığın bitki sağlığı üzerindeki etkisinin tespiti, orman ve mera sağlığının izlenerek ekosistem değerlendirmesi, bitkisel üretimde verim kayıplarının öngörülmesi ve üretim tahminleri için kullanılmaktadır. Ayrıca Avrupa Kuraklık Gözlemevi (EDO), fAPAR anomalilerini yağış ve toprak nemi anomalileriyle entegre ederek Bileşik Kuraklık İndikatörü-CDI (Combined Drought Indicator) geliştirmiştir. CDI, kuraklık için izleme ve erken uyarı amacıyla kullanılmaktadır.

---

- FAPAR and FAPAR Anomaly (VIIRS). [https://drought.emergency.copernicus.eu](https://drought.emergency.copernicus.eu/data/factsheets/factsheet_fapar_viirs.pdf){:target="\_"}
- Visible Infrared Imaging Radiometer Suite (VIIRS). [https://pace.oceansciences.org](https://pace.oceansciences.org/gallery_more.htm?id=148){:target="\_"}
