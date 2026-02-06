# Roadmapa SEO (Local + Programmatic)

## 1) Cel dokumentu
To jest jedno zrodlo dzialania SEO dla strony `protetyka-zakrzewo.pl`.
Cel biznesowy: wyjsc z widocznosci tylko w Zakrzewie i zaczac regularnie rankowac na uslugi protetyczne w okolicznych miejscowosciach.

## 2) Wejscie (ustalenia)
- Lokalizacje: Zakrzewo, Zlotow, Jastrowie, Krajenka, Okonek, Wiecbork, Sepolno Krajenskie, Pila, Debrzno, Człuchow, Wysoka, Lipka, Tarnowka, Lobzenica.
- Uslugi: naprawa protez, nowe protezy, dopasowanie, konsultacje.
- Domena bez migracji.
- Brak danych historycznych w Search Console (wdrozenie od zera).
- Strategia: skupienie na lokalnym SEO strony, niezaleznie od Google Business Profile.

## 3) Strategia glowna (playbook)
Playbook glowny: `Locations` z `programmatic-seo`.
Wspierajace playbooki: `Glossary/FAQ` i `Curation` (lokalne poradniki i porownania opcji postepowania).

Zasada krytyczna:
Kazda podstrona lokalna musi miec unikalna wartosc, nie tylko podmienione miasto.

## 4) Priorytety techniczne przed skalowaniem
Te punkty robimy przed publikacja wielu podstron, bo blokuja efekt SEO:

1. Renderowanie tresci w HTML:
usunac leniwe ladowanie kluczowych sekcji (obecnie duza czesc tresci nie jest od razu widoczna dla crawlera).
2. Poprawa jezyka strony:
ustawic `lang="pl"` w layoucie.
3. Naprawa sitemapy:
nie publikowac URL-i, ktore nie istnieja.
4. Uporzadkowanie robots:
jeden spojny `robots.txt`.
5. Ustandaryzowanie nawigacji anchorow i alt tekstow:
poprawa semantyki i jakosci on-page.

## 5) Architektura informacji i URL
Decyzja: model `usluga -> lokalizacja` (najlepszy na intencje transakcyjna).

Strony filarowe:
- `/naprawa-protez/`
- `/nowe-protezy/`
- `/dopasowanie-protez/`
- `/konsultacje-protetyczne/`

Strony lokalne (programmatic):
- `/naprawa-protez/pila/`
- `/naprawa-protez/zlotow/`
- analogicznie dla wszystkich lokalizacji i uslug

Skala docelowa:
- 4 strony uslugowe
- 56 stron usluga x lokalizacja (4 x 14)
- 1 strona obszaru dzialania (hub lokalny)
- 1 rozbudowane FAQ

Laczna liczba stron po etapie glownym: 62.

## 6) Mapa fraz (rdzen)
Mapowanie fraz glownych:

`naprawa protez`
- naprawa protez [miasto]
- szybka naprawa protez [miasto]
- ekspresowa naprawa protez [miasto]
- naprawa protezy 24h [miasto]

`nowe protezy`
- nowe protezy [miasto]
- wykonanie protezy [miasto]
- protezy zebowe [miasto]

`dopasowanie`
- dopasowanie protez [miasto]
- luźna proteza pomoc [miasto]
- korekta protezy [miasto]

`konsultacje`
- konsultacje protetyczne [miasto]
- porada protetyczna [miasto]
- technik dentystyczny [miasto]

Frazy wspierajace (informacyjne):
- co zrobic gdy peknie proteza
- ile trwa naprawa protezy
- ile kosztuje naprawa protezy
- kiedy wymienic proteze na nowa

## 7) Szablon strony lokalnej (quality gate)
Kazda strona usluga-lokalizacja musi zawierac:

1. H1: usluga + miejscowosc.
2. Unikalny lead o realnym kontekście dojazdu i obslugi pacjentow z tej miejscowosci.
3. Sekcja "Jak wyglada proces" dopasowana do uslugi.
4. Sekcja "Najczestsze przypadki z [miasto]" (minimum 3 unikalne punkty).
5. Orientacyjny czas kontaktu/realizacji + mocne CTA telefoniczne.
6. FAQ lokalne (3-5 pytan) rozne per miasto.
7. Linki wewnetrzne:
strona uslugi (hub), 2-3 sasiednie miasta, kontakt.
8. LocalBusiness schema + FAQ schema zgodne z trescia.
9. Meta title i meta description unikalne per URL.
10. Minimum 700-1000 slow tresci uzytecznej (bez lania wody).

## 8) Kolejnosc wdrozenia (90 dni)
## Sprint 1 (dni 1-14): Fundament
- Wdrozenie Search Console + Bing Webmaster Tools.
- Naprawy techniczne z sekcji 4.
- Przygotowanie szablonow:
4 strony uslugowe + 1 template lokalny.
- Wdrozenie systemu metadanych i schema per podstrona.

Wynik sprintu:
strona gotowa technicznie do skalowania i pomiaru.

## Sprint 2 (dni 15-35): Publikacja MVP lokalnego
- Publikacja 4 stron uslugowych.
- Publikacja pierwszych 12 stron lokalnych:
3 miasta x 4 uslugi.
- Priorytet miast MVP:
Pila, Zlotow, Człuchow.
- Linkowanie wewnetrzne hub <-> strony lokalne.
- Reindeksacja przez GSC.

Wynik sprintu:
16 nowych stron z intencja transakcyjna.

## Sprint 3 (dni 36-60): Rozszerzenie zasiegu
- Publikacja kolejnych 20 stron lokalnych (5 miast x 4 uslugi).
- Miasta:
Wiecbork, Sepolno Krajenskie, Jastrowie, Krajenka, Okonek.
- Rozbudowa FAQ i sekcji informacyjnych na podstawie pytan klientow.
- Pierwsza iteracja CTR (title/description).

Wynik sprintu:
36 stron transakcyjnych lacznie.

## Sprint 4 (dni 61-90): Domkniecie klastra
- Publikacja pozostalych 24 stron lokalnych.
- Miasta:
Debrzno, Wysoka, Lipka, Tarnowka, Lobzenica, Zakrzewo.
- Dodatkowe 4 artykuly poradnikowe wspierajace klastry uslug.
- Audyt kanibalizacji i korekty anchor textow.

Wynik sprintu:
pelna architektura lokalna (62 strony) i baza pod dalszy wzrost.

## 9) KPI i monitoring
Mierniki glówne:
- Liczba zindeksowanych stron (GSC).
- Klikniecia i wyswietlenia organiczne per katalog uslug.
- Pozycje fraz usluga + miasto.
- CTR dla top landing pages.
- Liczba leadow z organic (tel + formularz).

Kamienie milowe:
- Dzien 14: pelny pomiar i poprawna indeksacja strony glownej + uslug.
- Dzien 35: pierwsze wejscia organiczne na strony lokalne.
- Dzien 60: widocznosc na minimum 30% kombinacji usluga + miasto.
- Dzien 90: stabilny wzrost ruchu i leadow z lokalnych landing pages.

## 10) Zasady anty-penalty (must-have)
- Zakaz tworzenia "doorway pages" z podmiana samej nazwy miasta.
- Zakaz duplikowania tego samego FAQ na kazdej lokalizacji.
- Zakaz publikacji stron bez local value i bez linkowania wewnetrznego.
- Kazda strona musi odpowiadac na realna intencje pacjenta.

## 11) Backlog po 90 dniach
- Rozszerzenie o kolejne miejscowosci po danych z GSC.
- Sekcja "przypadki i efekty" (anonimowe case studies).
- Rozbudowa klastra informacyjnego (poradniki sezonowe i problemowe).
- Testy wariantow CTA i kolejnosci sekcji (CRO + SEO).

## 12) Definicja sukcesu
Sukcesem nie jest liczba opublikowanych URL-i.
Sukcesem jest:
- rosnaca widocznosc na frazy usluga + miasto,
- rosnaca liczba telefonow i formularzy z ruchu organicznego,
- utrzymanie jakosci tresci bez thin-content.

## 13) Mapowanie audytu na zadania (traceability)
| Finding z audytu SEO | Impact | Zadanie w roadmapie | Sekcja roadmapy |
|---|---|---|---|
| Kluczowe sekcje ladowane z opoznieniem po stronie klienta | High | Renderowac kluczowe tresci w HTML przy pierwszym renderze | 4, 8 (Sprint 1) |
| Bledny jezyk dokumentu (`lang="en"` zamiast `pl`) | Medium/High | Ustawic `lang="pl"` globalnie | 4, 8 (Sprint 1) |
| Sitemapa zawiera URL-e bez istniejacych stron | High | Usunac nieistniejace URL-e i utrzymac tylko realne trasy | 4, 8 (Sprint 1) |
| Ryzyko niespojnosci robots.txt | Medium | Utrzymac jeden spojny robots.txt | 4, 8 (Sprint 1) |
| Slaba semantyka nawigacji/anchorow i niespojnosci ID | Medium | Ustandaryzowac anchory, semantyke linkow i nawigacje | 4, 8 (Sprint 1) |
| Nieadekwatne alt teksty obrazow | Medium | Poprawic alt teksty pod intencje lokalna i uslugowa | 4, 8 (Sprint 1) |
| Brak struktury podstron uslug i lokalizacji | High | Wdrozyc model `usluga -> lokalizacja` i klastry stron | 5, 8 (Sprinty 2-4) |
| Ryzyko thin content przy skalowaniu lokalnym | High | Wymusic quality gate dla kazdej strony lokalnej | 7, 10 |
| Slabe sygnaly E-E-A-T (brak rozbudowy tresci eksperckiej) | Medium/High | Dodac FAQ lokalne, poradniki, case studies | 8 (Sprint 4), 11 |
| Brak baseline i monitoringu SEO | High | Wdrozyc GSC/Bing i KPI z kamieniami milowymi | 8 (Sprint 1), 9 |
