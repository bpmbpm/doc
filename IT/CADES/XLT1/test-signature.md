## test signature
## 1 Base
1.1
- https://e-trust.gosuslugi.ru/check/sign ; https://www.gosuslugi.ru/help/faq/esignature/212160 ; https://www.gosuslugi.ru/help/faq/esignature/103271
- https://dss.cryptopro.ru/verify/#/signature
- https://sign.kloud.one/
- https://testca.gaz-is.ru/
   
1.2
- [Контур.Крипто](https://crypto.kontur.ru/verify)  ; [tariffs](https://crypto.kontur.ru/#tariffs) 29 любых операций на 90 дней
- https://astral.ru/aj/elem/kak-proverit-elektronnuyu-podpis/
- https://sign.me/promo/sign-check/
- 
### Обзоры:
- https://tochka.com/knowledge/edo/proverka-elektronnoy-podpisi-ecp-kak-proverit-podlinnost-i-sertifikat-ep-v-dokumente/?utm_campaign=y_knowledge_edo_proverka-elektronnoy-podpisi-ecp-kak-proverit-podlinnost-i-sertifikat-ep-v-dokumente_#sravnenie-programm-dlya-proverki-elektronnoy-podpisi КриптоПро DSS ; КриптоПро ЭЦП Browser plug-in ; КриптоПро Office Signature ; КриптоПро PDF ; Госуслуги (проверка ЭЦП)
- https://kvartira-bez-agenta.ru/proverka-elektronnoj-podpisi/?ysclid=mhnbv2daoi691953270 РосРеестр ; mos.ru

## 2 Soft
- [Яндекс Браузер с плагином КриптоПро — простой и безопасный способ работать с электронной подписью](https://browser.yandex.ru/corp/cryptopro?from=direct_serp&utm_source=yandex&utm_medium=search&utm_campaign=search_generic|104909040&utm_content=5535985168|16807897822&utm_term=%D1%8D%D1%86%D0%BF%20%D0%B4%D0%BB%D1%8F%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D1%85%20%D1%83%D1%81%D0%BB%D1%83%D0%B3&banerid=0600000000&etext=2202.UZfME4XDRJBrXCo3sJDJxajqzHIYkS912AZMxmbSUVsENT1Wg6ANxZ1v_pGieB3LbtJVLrIjI-z0s6v1yjTxrndsZG9reGNwZXR6Z3BuaGk.3e3b2826a8a5acbc0527e69f0d21623dffef977b&yclid=2656185826662940671&ybaip=1)
- https://cryptoarm.ru/

## 3 Тестовые электронные подписи в файле sig стандарта CADES-XL. Где их можно скачать или создать? 

## 📝 Где взять или создать тестовые подписи CADES-XL в формате .sig

> **Кратко:**  
> Готовых тестовых файлов CADES-XL (.sig) для скачивания в открытом доступе практически нет. Однако вы легко можете создать их самостоятельно с помощью бесплатных инструментов и библиотек. Ниже — ссылки на репозитории, онлайн-демо, документацию и инструкции.

---

### 📥 Где скачать или сгенерировать тестовые подписи CADES-XL

#### 1. **Готовые тестовые файлы**
- **Прямых ссылок на скачивание тестовых .sig файлов CADES-XL не найдено** — официальные порталы ETSI и ЕС не публикуют такие файлы открыто.
- **Решение:** Используйте открытые библиотеки и демо-приложения для самостоятельного создания тестовых подписей.

---

#### 2. **Генерация тестовых подписей: инструменты и ресурсы**

| Инструмент/Ресурс | Описание | Ссылка |
|-------------------|----------|--------|
| **DSS (Digital Signature Service, Java)** | Официальная библиотека ЕС для создания и проверки CAdES-XL. Есть демо-веб-приложение для генерации подписей без программирования. | [GitHub](https://github.com/esig/dss) <br> [Документация и демо](https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html) |
| **CAdESLib (.NET)** | Открытая библиотека для .NET, поддерживает создание CAdES-XL. | [GitHub](https://github.com/63l06ri5/CAdESLib) |
| **DSS.NET (.NET)** | Ещё одна .NET-реализация DSS с поддержкой CAdES-XL. | [GitHub](https://github.com/nonorganic/dssnet) |
| **BouncyCastle** | Криптобиблиотека для Java и C#, поддержка CAdES (в т.ч. CAdES-XL — через патчи/форки). | [BouncyCastle](https://www.bouncycastle.org/) |
| **CodeProject C++ CAdES Collection** | Проект для Windows, позволяет создавать и проверять CAdES-XL. | [CodeProject](https://www.codeproject.com/Articles/1194642/The-AdES-Collection-CAdES-XAdES-PAdES-and-ASIC-Imp) |
| **DSS Demo WebApp** | Онлайн-демо для генерации тестовых CAdES-XL подписей (не для продакшена). | [DSS Demo WebApp](https://dss.digisign.cloud/doc/dss-documentation.html) |

---

#### 3. **Пошаговые инструкции и документация**

- **Официальный стандарт ETSI TS 101 733** (структура и требования CAdES-XL):  
  [PDF](https://www.etsi.org/deliver/etsi_ts/101700_101799/101733/02.01.01_60/ts_101733v020101p.pdf)
- **Руководство по DSS (создание и тестирование CAdES-XL):**  
  [Документация](https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html)
- **Пошаговый туториал на Java:**  
  [Creating CAdES Signature in Java](https://vkuzel.com/creating-cades-signature-in-java)
- **Пример на C#:**  
  [CAdES Digital Signature in C#](https://www.signfiles.com/cades-digital-signature/)

---

### 🛠️ Как создать тестовую подпись CADES-XL

1. **DSS Demo WebApp**  
   - Перейдите по ссылке [DSS Demo WebApp](https://dss.digisign.cloud/doc/dss-documentation.html).
   - Следуйте инструкциям для создания подписи CAdES-XL (выберите нужный уровень подписи).
   - Скачайте полученный файл .sig.

2. **Использование библиотеки DSS (Java)**
   - Скачайте или клонируйте [репозиторий DSS](https://github.com/esig/dss).
   - Используйте модуль `dss-cades` для генерации подписи CAdES-XL (см. [cookbook и примеры](https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html)).
   - Сгенерируйте файл .sig с помощью тестового сертификата.

3. **CAdESLib (.NET)**
   - Клонируйте [репозиторий](https://github.com/63l06ri5/CAdESLib).
   - Следуйте инструкциям в README для создания подписи CAdES-XL.

---

### 📑 Краткая справка: что такое CAdES-XL

- **CAdES-XL** — расширенный профиль электронных подписей на базе CMS (PKCS#7), включающий:
  - Подпись, сертификаты, цепочку сертификации
  - Данные об отзыве (CRL/OCSP)
  - Метки времени
- **Формат файла:** .sig, .p7m, .p7s (ASN.1, DER/BER)
- **Стандарт:** ETSI TS 101 733

---

### 🟢 **Итог:**
- **Готовых тестовых файлов CADES-XL нет, но их легко создать с помощью бесплатных инструментов.**
- **Рекомендуем использовать DSS Demo WebApp или библиотеки DSS/CAdESLib для генерации тестовых подписей.**
- **Все необходимые ссылки и инструкции приведены выше.**

---

> **Key Takeaway Ключевой вывод:**  
> Для тестирования CADES-XL подписей используйте открытые библиотеки (DSS, CAdESLib) или онлайн-демо. Это быстро, бесплатно и соответствует стандартам ETSI.
- [1](https://github.com/63l06ri5/CAdESLib#:~:text=Succesfully%20signs%20and%20verifies,CAdES%2DT%2C%20CAdES%2DC%2C%20CAdES%2DX%20and) ; [2](https://github.com/esig/dss/blob/master/dss-cades/src/test/java/eu/europa/esig/dss/cades/signature/CAdESLevelBTest.java#:~:text=%2A%20%3Cp%3E%0A%20%2A%20You%20should%20have%20received%20a%20copy%20of%20the%20GNU%20Lesser%20General%20Public%0A%20%2A%20License%20along%20with%20this%20library%3B%20if%20not%2C%20write%20to%20the%20Free%20Software%0A%20%2A%20Foundation%2C%20Inc.%2C%2051%20Franklin%20Street%2C%20Fifth%20Floor%2C%20Boston%2C%20MA%20%2002110%2D1301%20%20USA%0A%20%2A/%0Apackage%20eu.europa.esig.dss.cades.signature%3B%0A%0Aimport%20eu.europa.esig.dss.cades.CAdESSignatureParameters%3B%0Aimport%20eu.europa.esig.dss.cades.validation.CAdESSignature%3B%0Aimport%20eu.europa.esig.dss.cades.validation.CMSDocumentAnalyzer%3B%0Aimport%20eu.europa.esig.dss.diagnostic.DiagnosticData%3B%0Aimport%20eu.europa.esig.dss.diagnostic.SignatureWrapper%3B%0Aimport%20eu.europa.esig.dss.diagnost%0ADigital%20Signature%20Service%20%3A%20creation%2C%20extension%20and%20validation%20of%20advanced%20electronic%20signatures%20%2D%20esig/dss%0A%20%2A%20%3Cp%3E%0A%20%2A%20You%20should%20have%20received%20a%20copy%20of%20the%20GNU%20Lesser%20General%20Public%0A%20%2A%20License%20along%20with%20this%20library%3B%20if%20not%2C%20write%20to%20the%20Free%20Software%0A%20%2A%20Foundation%2C%20Inc.%2C%2051%20Franklin%20Street%2C%20Fifth%20Floor%2C%20Boston%2C%20MA%20%2002110%2D1301%20%20USA%0A%20%2A/%0Apackage%20eu.europa.esig.dss.cades.signature%3B%0A%0Aimport%20eu.europa.esig.dss.cades.CAdESSignatureParameters%3B%0Aimport%20eu.europa.esig.dss.cades.validation.CAdESSignature%3B%0Aimport%20eu.europa.esig.dss.cades.validation.CMSDocumentAnalyzer%3B%0Aimport%20eu.europa.esig.dss.diagnostic.DiagnosticData%3B%0Aimport%20eu.europa.esig.dss.diagnostic.SignatureWrapper%3B%0Aimport%20eu.europa.esig.dss.diagnost%0Aport%20javax.crypto.Cipher%3B%0Aimport%20java.math.BigInteger%3B%0Aimport%20java.security.MessageDigest%3B%0Aimport%20java.security.cert.X509Certificate%3B%0Aimport%20java.util.ArrayList%3B%0Aimport%20java.util.Arrays%3B%0Aimport%20java.util.Collections%3B%0Aimport%20java.util.Date%3B%0Aimport%20java.util.List%3B%0A%0Aimport%20static%20org.junit.jup) ; [3](https://ec.europa.eu/digital-building-blocks/DSS/webapp-demo/doc/dss-documentation.html#:~:text=The%20DSS%20%28Digital%20Signature,the%20eIDAS%20Regulation%20in)
- [4](https://dss.digisign.cloud/doc/dss-documentation.html#:~:text=The%20DSS%20demo%20is,also%20as%20a%20downloadable) ; [5](https://github.com/topics/cades#:~:text=Java%20Library%20to%20digitally,Advanced%20Electronic%20Signatures%29in%20pure) ; [6](https://www.etsi.org/deliver/etsi_ts/101700_101799/101733/02.01.01_60/ts_101733v020101p.pdf#:~:text=Time%2DStamping%20for%20Long%20Life%20of%20Signature%20before%20CA%20Key%20Compromises%20.....................................................%2081%20...%20Time%2DStamping%20the%20ES%20with%20Complete%20Validation%20Data%20%28CAdES%2DX%20Type%201%29%20.............................................%0AOptional%20signed%20attributes%20may%20be%20added%20to%20the%20CAdES%2DBES%2C%20including%20optional%20signed%20attributes%20defined%20in%20CMS%20%C2%B7%20%28RFC%203852%20%5B4%5D%29%2C%20ESS%20%28RFC%202634%20%5B5%5D%29%2C%20and%20the%20present%20document.%20Listed%20below%20are%20optional%20attributes%20that%20are%20defined%20in%20%C2%B7%20clause%205%20and%20have%20a%20rationale%20provided%20in%20annex%20C%3A%20...%20Signing%2Dtime%3A%20as%20defined%20in%20CMS%20%28RFC%203852%20%5B4%5D%29%2C%20indicates%20the%20time%20of%20the%20signature%2C%20as%20claimed%20by%20the%0AEXtended%20Electronic%20Signature%20with%20Time%20Type%201%20%28CAdES%2DX%20Type%201%29%20...............................................%0AEXtended%20Electronic%20Signature%20with%20Time%20Type%202%20%28CAdES%2DX%20Type%202%29%20...............................................%0AEXtended%20Long%20Electronic%20Signature%20with%20Time%20%28CAdES%2DX%20Long%20Type%201%20or%202%29)

---
## 4 Also
- [Как я настраивал новые утилиты по работе с электронной подписью в Linux](https://habr.com/ru/companies/aktiv-company/articles/323170/?ysclid=mhnfqvy5qf741296172)
