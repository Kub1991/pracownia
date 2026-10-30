# Plan SEO: Złotów i kontrola efektów zmian lokalnych

Stan: 30 października 2026. Dokument jest planem, nie zleceniem kolejnych zmian treści.

## Decyzja na teraz

Pozostawić opublikowane ulepszenia i najpierw zmierzyć ich efekty. Złotów ma potencjał, szczególnie dla zapytań o protetyka, ale obecna mała próba nie uzasadnia natychmiastowego dalszego rozbudowywania treści ani tworzenia kolejnych stron na synonimy. Nie ustalamy arbitralnych celów pozycji, liczby kliknięć ani wzrostów procentowych.

Docelowy podział intencji:

- `/naprawa-protez/zlotow/`: naprawa istniejącej protezy i praktyczne informacje przed dojazdem.
- `/protezy-zebowe/zlotow/`: oferta protez i pracowni protetycznej dla mieszkańców Złotowa, w granicach potwierdzonych usług.
- Zapytanie „protetyk Złotów” wymaga obserwacji obu URL w czasie. Samo wyświetlanie dwóch stron na tę frazę nie dowodzi kanibalizacji.

Pracownia znajduje się w Zakrzewie, przy ul. E. J. Osmańczyka 18, 77-424 Zakrzewo. Współrzędne potwierdzone przez właściciela: `53.41201728970456, 17.151588043383537`. Nie sugerować oddziału w Złotowie. Dentysta nie jest usługą firmy i frazy dentystyczne nie są celem SEO. Nie dodawać niepotwierdzonych technologii, świadczeń NFZ, materiałów ani cen; koszt naprawy zależy od usterki.

## Co już wdrożono

Zmiany przygotowywano 29 października; potwierdzona publikacja produkcyjna nastąpiła **30 października 2026**. To data odniesienia pomiaru.

- [PR #3 — treści lokalne](https://github.com/Kub1991/pracownia/pull/3): rozwinięto istniejące strony napraw dla Złotowa, Jastrowia i Krajenki oraz stronę protez dla Złotowa; dopracowano metadane, informacje praktyczne, linkowanie i dane strukturalne.
- [PR #4 — crawlowanie](https://github.com/Kub1991/pracownia/pull/4): sitemap zawiera 21 adresów, bez sztucznego `lastmod`, `priority`, `changefreq` i Piły; dodano `llms.txt`. `robots.txt` pozwala na crawlowanie i wskazuje sitemap. `llms.txt` jest dodatkiem eksperymentalnym, bez obietnicy wzrostu widoczności.
- Piła pozostaje `noindex`. Jej rozwój i ewentualna indeksacja wymagają odrębnej oceny wartości oferty dla dojeżdżających.
- Historia Git umożliwia odtworzenie wcześniejszej wersji; punkt przed zmianami lokalnymi: tag `backup/before-local-seo-2026-10-29`.

## Wnioski z Search Console

Odczyt: 30 października 2026; dane finalne typu `web` do 27 października. Poniższe liczby są pomiarami GSC, a nie szacunkami wolumenu wyszukiwań. Pozycje to średnie GSC, nie stałe miejsca w wynikach.

| Strona, wszystkie zapytania | Okres | Kliknięcia | Wyświetlenia | CTR | Średnia pozycja |
|---|---|---:|---:|---:|---:|
| Naprawa protez — Złotów | 30.09–27.10.2026 | 6 | 87 | 6,90% | 7,62 |
| Protezy zębowe — Złotów | 30.09–27.10.2026 | 1 | 80 | 1,25% | 8,23 |
| Naprawa protez — Złotów | 30.07–27.10.2026 | 13 | 215 | 6,05% | 8,11 |
| Protezy zębowe — Złotów | 30.07–27.10.2026 | 5 | 236 | 2,12% | 8,18 |

Fraza **„protetyk złotów”**, agregacja dla całej witryny:

| Okres | Kliknięcia | Wyświetlenia | Średnia pozycja |
|---|---:|---:|---:|
| 30.09–27.10.2026 | 0 | 21 | 12,48 |
| 30.07–27.10.2026 | 1 | 45 | 14,98 |

W agregacji zapytanie + strona dla tej frazy w ostatnich 28 dniach strona napraw miała 19 wyświetleń i pozycję 10,58, a strona protez 4 wyświetlenia i pozycję 30,25; obie bez kliknięć. To sygnał do zbadania dopasowania intencji i wyboru strony przez Google, nie dowód, że trzeba od razu tworzyć nowy URL.

Ograniczenia:

- Okresy 28 i 90 dni nakładają się; nie stanowią niezależnego porównania przed/po i nie dowodzą trendu.
- GSC ukrywa część zapytań. Kliknięcia stron nie oznaczają kliknięć wyłącznie fraz zawierających nazwę miasta.
- Agregacje witryna, strona oraz zapytanie + strona różnią się sposobem liczenia; nie sumować ich zamiennie.
- Pojedyncze kliknięcia i małe liczby wyświetleń dają niestabilny CTR oraz średnią pozycję.
- SE Ranking (baza PL, odczyt 30.10.2026) nie zwrócił metryk dla dziesięciu badanych wariantów lokalnych: protetyk, protetyka, protezy zębowe, naprawa protez, naprawa protez zębowych, pracownia protetyczna, dopasowanie protez, naprawa protezy, protezy, zakład protetyczny — każdy z „Złotów”. Brak danych **nie oznacza zerowego popytu**. Nie dysponujemy wiarygodnym oszacowaniem ich wolumenu.

## Priorytetowy plan dalszych działań

| Priorytet / działanie | Możliwa korzyść | Wysiłek | Warunek i sposób pomiaru |
|---|---|---|---|
| 1. Sprawdzić indeksację i ponowny odczyt czterech zmienionych stron | Ustalenie, czy Google zna nowe treści; wychwycenie blokad | Niski | Inspekcja URL: status, ostatni crawl, canonical; sprawdzenie HTTP i sitemap |
| 2. Ocenić efekt już wdrożonego Złotowa | Ochrona działającej strony napraw i wskazanie dalszych szans | Niski–średni | 28 dni przed/po: kliknięcia, wyświetlenia, CTR i pozycje per URL i zapytanie |
| 3. Warunkowo pogłębić istniejącą stronę protez Złotów | Możliwe szersze dopasowanie do fraz o protezach i pracowni/protetyku | Średni; korzyść obecnie niepoliczalna | Dopiero po analizie realnych zapytań, intencji i obecnej treści; dodać brakujące odpowiedzi związane z faktyczną ofertą, bez powielania napraw |
| 4. Ocenić Jastrowie i Krajenkę | Wykorzystanie istniejących sygnałów widoczności | Niski–średni | Ten sam pomiar per strona; nie zakładać, że wynik Złotowa reprezentuje pozostałe miasta |
| 5. Wrócić do Piły | Potencjalnie dodatkowy obszar obsługi | Wyższy, większa niepewność | Najpierw wartościowa, potwierdzona oferta dla dojeżdżających i analiza popytu; osobna decyzja o indeksacji |

Nie zmieniać ponownie treści wyłącznie z powodu kilku dni bez wzrostu. Jeżeli Google odczyta strony późno lub próba pozostanie mała, wydłużyć obserwację. Przy większej liczbie wyświetleń bez kliknięć sprawdzić osobno dopasowanie intencji, pozycję oraz tytuł/opis; niski CTR przy różnych pozycjach nie jest sam w sobie dowodem złego opisu. Jeżeli te same zapytania naprzemiennie kierują do różnych URL, zbadać przebieg dzienny/tygodniowy i treści przed stwierdzeniem kanibalizacji.

## Zaplanowane kontrole w OpenBot

Obie rutyny są jednorazowe, aktywne, w strefie `Europe/Warsaw`. Tworzą raporty i rekomendacje; nie upoważniają do kolejnych wdrożeń.

1. **6 listopada 2026, 09:00** — kontrola indeksacji, ostatniego odczytu i canonical czterech stron. Inspekcja URL opisuje wersję znaną Google, nie test live. Bez oceny skuteczności na podstawie tygodnia danych.
   - ID rutyny: `86962221-862d-4e36-89d1-f6039b43b847`.
2. **1 grudnia 2026, 09:00** — główna ocena 28 pełnych dni **31.10–27.11.2026** wobec **03.10–30.10.2026**. Okna mają taki sam układ dni tygodnia. Dzień wdrożenia w bazie stanowi ograniczenie. Termin pozostawia kilka dni na opóźnienie finalnych danych GSC; kompletność należy potwierdzić podczas odczytu.
   - ID rutyny: `6ad8cb27-f891-46c8-8ebf-d14abcd86c53`.

Raport powinien zawierać datę odczytu, dokładne zakresy, tabelę przed/po, źródłowe dane, ograniczenia oraz decyzję: utrzymać / rozwinąć konkretną treść / dalej obserwować. Nie przypisywać całej zmiany ruchu wdrożeniu bez uwzględnienia sezonowości, miksu zapytań, ponownego crawlu i małej próby. GSC nie mierzy liczby telefonów ani faktycznych klientów — bez osobnych danych nie wyciągać takich wniosków.

## Źródła i dowody

- Search Console, właściwość `sc-domain:protetyka-zakrzewo.pl`, odczyt API z 30.10.2026. Surowy eksport `gsc-zlotow-aktualne.json` i raporty wdrożenia zachowano w współdzielonym archiwum audytu OpenBot z 29–30.10.2026; sekrety nie są częścią repozytorium.
- SE Ranking, `getKeywordsMetrics`, baza PL, 30.10.2026: brak dostępnych metryk dla zbadanych lokalnych wariantów.
- [Google — Search Analytics API](https://developers.google.com/webmaster-tools/v1/searchanalytics/query): zasady pobierania i agregowania danych.
- [Google — interpretacja danych wydajności i prywatność zapytań](https://developers.google.com/search/blog/2022/10/performance-data-deep-dive).
- [Strona napraw — Złotów](https://protetyka-zakrzewo.pl/naprawa-protez/zlotow/), [strona protez — Złotów](https://protetyka-zakrzewo.pl/protezy-zebowe/zlotow/), [Jastrowie](https://protetyka-zakrzewo.pl/naprawa-protez/jastrowie/), [Krajenka](https://protetyka-zakrzewo.pl/naprawa-protez/krajenka/).
