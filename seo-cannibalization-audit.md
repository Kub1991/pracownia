# Audyt kanibalizacji i anchor textów (lokalne SEO)

Data: 2026-02-06
Zakres: strony usługowe (huby) i strony lokalne (service/city)

## 1) Wnioski z audytu kanibalizacji

- Brak krytycznej kanibalizacji technicznej:
  - Każda usługa ma osobny hub URL (`/naprawa-protez`, `/protezy-zebowe`, `/dopasowanie-protez`, `/konsultacje-protetyczne`).
  - Każdy wariant lokalny ma osobny URL (`/{service}/{city}`) i unikalny `title` generowany dynamicznie.
  - Strony mają poprawne `canonical` na własne adresy.
- Ryzyko miękkiej kanibalizacji (on-page) było umiarkowane:
  - Zbyt wysoki udział powtarzalnych anchorów exact-match typu `Usługa + Miasto` w wielu sekcjach linkowania.
  - Powtarzalność mogła osłabiać naturalność profilu linków wewnętrznych.

## 2) Korekty anchor textów (wdrożone)

- Ujednolicono anchory na naturalną formę lokalną:
  - Zamiast `Usługa Miasto` zastosowano głównie `Usługa w Mieście` (np. `Naprawa protez w Pile`).
- Poprawiono opisy anchorów w sekcji lokalnych wariantów usług:
  - Huby: `Lokalne strony usługi` używają teraz formy `w {locative}`.
- Poprawiono linkowanie w szablonie lokalnym:
  - `Powiązane usługi`: `Usługa w {city.locative}`.
  - `Powiązane lokalizacje`: `Aktualna usługa w {inna_lokalizacja}` zamiast samej nazwy miasta.

## 3) Efekt SEO (praktyczny)

- Lepsza czytelność relacji tematycznych (usługa <-> lokalizacja).
- Bardziej naturalny profil anchor textów wewnętrznych.
- Mniejsze ryzyko nadmiernej optymalizacji anchorów exact-match.
- Zachowany sygnał lokalny dla fraz usługowych i lokalnych.

## 4) Monitoring po wdrożeniu

- GSC (Performance):
  - monitorować CTR i pozycje dla zapytań `usługa + miasto` oraz `protetyk + miasto`.
- GSC (Pages):
  - obserwować, czy nie pojawiają się duplikaty/alternatywne strony bez właściwego kanonicznego wyboru.
- Cykl kontroli:
  - szybki przegląd anchorów co 4-6 tygodni po rozbudowie kolejnych stron lokalnych.
