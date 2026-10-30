# Przekazanie kontekstu SEO pracowni

Stan dokumentacji: **30.10.2026**, strefa Europe/Warsaw. Punkt startowy dla nowej sesji/agenta. Dokumentacja opisuje wykonane działania i dalszy plan; nie jest upoważnieniem do nowych wdrożeń.

## Stałe ustalenia właściciela

- Pracownia Karoliny Szymańskiej: ul. E. J. Osmańczyka 18, 77-424 Zakrzewo. Zatwierdzony GPS: `53.41201728970456, 17.151588043383537`.
- Firma świadczy usługi protetyczne; dentysta nie jest jej usługą ani celem fraz. Strony miast opisują dojazd do Zakrzewa, nie oddziały w tych miastach.
- Nie wymyślać cen, widełek, terminów, materiałów ani usług. Koszt napraw zależy od usterki. Nie gwarantować wzrostów SEO.
- Piła pozostaje `noindex`, poza sitemap. Rozbudowa i indeksowanie wymagają osobnej decyzji.
- Bez innych agentów. Zmiany strony, konfiguracji kont i publikacje wymagają zlecenia; rutyny niżej są wyłącznie analityczne.
- Sekretów nie publikować ani kopiować do repo/dokumentacji. Nie wysyłać formularzy do Make podczas zwykłych kontroli.

## Historia wdrożeń

Wszystkie poniższe działania są zmergowane do main; potwierdzenia produkcji pochodzą z kontroli w tej rozmowie i jej jednorazowych rutynach. Dokładny czas zakończenia deployu nie zawsze został ustalony.

| Data potwierdzenia | Zmiana | Dowód / zakres |
|---|---|---|
| Przed kontrolami z 30.10.2026; dokładny czas nieustalony | Poprawiony GPS i naprawiony deploy; fonty lokalne | [PR #1](https://github.com/Kub1991/pracownia/pull/1), [PR #2](https://github.com/Kub1991/pracownia/pull/2). Rutyna potwierdziła HTTP 200, oba wpisy GPS oraz brak żądań Google Fonts. |
| 30.10.2026 | Rozwinięcie czterech stron lokalnych | [PR #3](https://github.com/Kub1991/pracownia/pull/3): naprawy Złotów, Jastrowie, Krajenka; protezy zębowe Złotów. Treści, metadane, informacje dojazdowe i praktyczne, linki, schema. |
| 30.10.2026 | Crawlowanie i llms.txt | [PR #4](https://github.com/Kub1991/pracownia/pull/4): sitemap 21 URL, bez lastmod/priority/changefreq i Piły; llms.txt 200 UTF-8, 9 działających linków. Robots bez zmiany; Piła nadal noindex. llms.txt eksperymentalny, bez potwierdzonego wpływu na widoczność. |
| 30.10.2026 | Plan obserwacji GSC | [PR #5](https://github.com/Kub1991/pracownia/pull/5), [plan Złotowa](seo-plan-zlotow.md): dane bazowe, ograniczenia, odłożone prace i terminy kontroli. |
| 30.10.2026, kontrola 11:25–11:27 CET | Strona główna | [PR #6](https://github.com/Kub1991/pracownia/pull/6), [raport](homepage-2026-10-30.md): pełniejsza prezentacja usług, nowy H1 i description, tekst i kontakt przed zdjęciem na mobile, linki usług, formularz/CTA, adres i trasa GPS, copyright 2026, lżejsze zdjęcia i fonty. Produkcja HTTP 200; H1, description, zachowany title/canonical, zasoby i brak overflow mobile potwierdzone. |
| 30.10.2026, kontrola rutyny 12:01 CET | Czytelne godziny | [PR #7](https://github.com/Kub1991/pracownia/pull/7): tabela z podpisem Godziny otwarcia na czterech stronach lokalnych. Poniedziałek 12:00–19:00; wtorek–czwartek 9:00–15:00; piątek 9:00–14:00; sobota–niedziela zamknięte. Potwierdzenie wizyty telefonicznie. Produkcja czterech stron HTTP 200. |
| 30.10.2026, potwierdzenie w rutynie zaplanowanej na 12:17 CET | Powiązane usługi jako mini kafelki | [PR #8](https://github.com/Kub1991/pracownia/pull/8), main `80a5d7093c016a7bb945975e9df7ba8ef757095e`: cztery szare zaokrąglone kafelki na każdej z czterech stron; trzy pozostałe usługi dla tego samego miasta i pełny opis bieżącej usługi. Rutyna potwierdziła HTTP 200, poprawne cele, brak selflinków, 12 stron docelowych bez noindex oraz zachowane tabele godzin. |

## Linkowanie — przyjęta decyzja

Na czterech wzbogaconych stronach sekcja Powiązane usługi kieruje do usług dla tego samego miasta i do ogólnej strony danej usługi. Nie kopiujemy wszędzie pełnej listy wszystkich miast. Szersze listy pozostają na ogólnych stronach usług. Linki są zwykłymi odnośnikami HTML; wygląd małych szarych zaokrąglonych kafelków zachowuje dotychczasowy styl. Brak założenia, że większa liczba linków sama poprawia pozycje.

PR #8: build 41 stron, lint i diff-check poprawne; sprawdzone cztery różne cele na stronę, indeksowalność eksportu, pojedynczy H1 i zachowane godziny. Podgląd desktop 1425 px i mobile 390 px: poprawne zawijanie, bez poziomego przewijania.

## Co teraz pozostaje do zrobienia

1. **6.11.2026, 09:00 Europe/Warsaw**: odczyt indeksacji, ostatniego crawlu i canonical czterech stron. Rutyna `86962221-862d-4e36-89d1-f6039b43b847`. Tydzień nie wystarcza do oceny efektu pozycji/kliknięć.
2. **1.12.2026, 09:00 Europe/Warsaw**: ocena finalnych danych GSC 31.10–27.11 wobec 03.10–30.10. Rutyna `6ad8cb27-f891-46c8-8ebf-d14abcd86c53`. Szczegóły metodologii i dane bazowe w [planie](seo-plan-zlotow.md). Przy małej próbie lub późnym crawlu wydłużyć obserwację. To porównanie efektów pakietu zmian; nie izoluje wpływu pojedynczego PR ani nie dowodzi przyczynowości.
3. Pogłębienie strony protez Złotów odłożone do analizy rzeczywistych zapytań i intencji, w tym protetyk Złotów. Nie tworzyć osobnych URL na każdy synonim. Piła później, po odrębnej ocenie.
4. Wspólna sesja GA4/zgód/pomiaru telefonów, trasy i poprawnego wysłania formularza. W kodzie istnieje gtag.js i dataLayer; brak potwierdzonego kontenera GTM. Nie zmieniano konfiguracji analitycznej. GTM nie jest automatycznie konieczny.
5. Po uzyskaniu dostępu sprawdzić Make: rzeczywiste dostarczanie, mapowanie other/problemsText oraz pustej repairDate na stronie głównej. Testy lokalne z atrapą 200/500 nie dowodzą dostarczenia zgłoszenia.
6. Nowy wynik PageSpeed nie został potwierdzony. 72/100 i LCP 8,1 s dotyczą poprzedniej wersji. Świeży raport https://pagespeed.web.dev/analysis/https-protetyka-zakrzewo-pl/33cl4elyj9?form_factor=mobile w chwili kontroli był loading; nie przypisywać mu wyniku starego raportu.

## Gdzie są dowody i jak kontynuować

- Repo: [plan i dane bazowe GSC](seo-plan-zlotow.md), [szczegóły strony głównej i ograniczenia](homepage-2026-10-30.md), historia PR powyżej. Raport homepage w repo ma historyczny status oczekiwania na publikację; potwierdzenie produkcji w tym indeksie i uzupełnionym pliku Shared jest późniejsze i nadrzędne.
- Na komputerze OpenBot: `C:/Users/Kuba/OpenBot/Shared/protetyka-strona-glowna-wdrozenie-2026-10-30.md` zawiera potwierdzenie produkcji. Archiwum audytu: `C:/Users/Kuba/OpenBot/Shared/upgrade-lokalne-SEO-protetyka-2026-10-29/`, m.in. `gsc-zlotow-aktualne.json` i `Wdrozenie-crawlowanie.md`.
- GSC: właściwość `sc-domain:protetyka-zakrzewo.pl`; istniejący skrypt odczytu `C:/Users/Kuba/OpenBot/Agents/agent-3187cdc3-2b3a-452e-a545-8774f0c67e48/gsc-protetyka.mjs`, konfiguracja poza repo `D:/01_Projekty/OS_Yakszy/agentos`. Odczyt bez ujawniania sekretów. Ścieżki wymagają dostępu do tego komputera.
- Rzeczywiste harmonogramy i ich bieżące statusy są w OpenBot Routines, nie w GitHub. Dokument opisuje stan z 30.10; przed zmianą rutyny odczytać ją w OpenBot.
- Powrót do wcześniejszej wersji przez revert właściwego commita/PR, bez przepisywania main. Tagi kopii: `backup/before-local-seo-2026-10-29` i `backup/before-homepage-2026-10-30`.

Przed kolejnymi pracami przeczytać ten plik, plan SEO i raport homepage; sprawdzić aktualny main, rutyny i produkcję. Nie opierać się wyłącznie na pamięci rozmowy ani historycznym statusie oczekiwania z wcześniejszego raportu.
