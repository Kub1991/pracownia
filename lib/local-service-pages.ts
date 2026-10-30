export type LocalServiceContent = {
  service: 'naprawa-protez' | 'protezy-zebowe';
  city: string;
  from: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  travel: string;
  sections: { title: string; text: string; bullets?: string[] }[];
  steps: string[];
  faqs: { question: string; answer: string }[];
};

// Only these four existing URLs receive the expanded editorial content.
// Business details come from the existing website and the owner's confirmed pin.
export const LOCAL_SERVICE_PAGES: Record<string, LocalServiceContent> = {
  'naprawa-protez/zlotow': {
    service: 'naprawa-protez', city: 'Złotów', from: 'Złotowa',
    title: 'Naprawa protez Złotów | Pracownia w Zakrzewie',
    description: 'Pęknięta proteza lub wypadnięty ząb? Naprawa protez dla osób ze Złotowa w pracowni w Zakrzewie. Zadzwoń: 735 491 129 i ustal termin przed dojazdem.',
    heading: 'Naprawa protez dla osób ze Złotowa',
    intro: 'Pękła proteza, odłamał się fragment albo wypadł z niej ząb? W pracowni Karoliny Szymańskiej w Zakrzewie możesz omówić naprawę i ustalić dalsze kroki. Zadzwoń przed wyjazdem ze Złotowa: opisz uszkodzenie i uzgodnij termin, w którym będzie można obejrzeć protezę.',
    travel: 'Złotów i Zakrzewo dzieli orientacyjnie około 9 km drogą DW188 między miejscowościami. Dojazd pod adres pracowni zależy od miejsca startu. Przed wyjazdem sprawdź aktualną trasę do ul. E. J. Osmańczyka 18; czas przejazdu pokaże nawigacja.',
    sections: [
      { title: 'Z jakim uszkodzeniem możesz się zgłosić?', text: 'Naprawa dotyczy istniejącej protezy. Podczas oceny ważny jest zarówno uszkodzony element, jak i stan całej pracy. Sam opis przez telefon pomaga przygotować wizytę, ale nie zastępuje obejrzenia protezy.', bullets: ['Pęknięcie lub złamanie płyty protezy, także po upadku.', 'Odłamany fragment albo ząb, który odłączył się od protezy.', 'Ponowne pęknięcie w miejscu wcześniejszej naprawy — powiedz o nim już przy umawianiu.', 'Poluzowanie lub ucisk bez widocznego pęknięcia — może wymagać dopasowania zamiast naprawy złamania.'] },
      { title: 'Pilna naprawa — ustal możliwość przed wyjazdem', text: 'Naprawy mogą być realizowane nawet w 24 godziny; możliwa jest też pomoc ekspresowa. Nie oznacza to jednak takiego samego terminu przy każdej usterce. O zakresie pracy i odbiorze decydują rodzaj uszkodzenia oraz dostępny termin. Jeśli zależy Ci na pilnej pomocy, powiedz, czy bez protezy masz trudność z jedzeniem lub mówieniem. Ustal, kiedy ją dostarczyć i kiedy skontaktować się w sprawie odbioru.' },
      { title: 'Koszt zależy od tego, co rzeczywiście trzeba naprawić', text: 'Pęknięcie płyty i uzupełnienie odłączonego elementu mogą wymagać innego zakresu pracy. Każdą naprawę wyceniam indywidualnie po ocenie uszkodzenia i omówieniu zakresu pracy. Jeśli stan protezy przemawia za innym rozwiązaniem, omówimy również dopasowanie lub wykonanie nowej pracy.' },
    ],
    steps: ['Zadzwoń pod 735 491 129. Powiedz, co się stało i czy proteza była już naprawiana.', 'Zabierz protezę oraz wszystkie odłączone elementy. Nie sklejaj ich ani nie szlifuj samodzielnie.', 'Przyjedź na uzgodniony termin do Zakrzewa. Na miejscu omówimy zakres, koszt i termin wykonania.', 'Odbierz pracę w ustalonym terminie i zapytaj o dalsze użytkowanie oraz ewentualną kontrolę.'],
    faqs: [
      { question: 'Czy pracownia naprawia protezy w Złotowie?', answer: 'Pracownia znajduje się w Zakrzewie, przy ul. E. J. Osmańczyka 18, 77-424 Zakrzewo. Ta strona jest przeznaczona dla osób dojeżdżających ze Złotowa. Wizytę ustal telefonicznie przed przyjazdem.' },
      { question: 'Czy mogę poczekać na naprawę i wrócić z protezą?', answer: 'Nie zakładaj odbioru podczas tej samej wizyty bez wcześniejszego uzgodnienia. W wielu przypadkach proteza zostaje w pracowni na czas naprawy. Możliwość szybszego odbioru zależy od oceny uszkodzenia i dostępności terminu.' },
      { question: 'Co zabrać, jeśli z protezy wypadł ząb?', answer: 'Przynieś całą protezę i odłączony ząb, jeśli go masz. Jeśli element zaginął, powiedz o tym przy kontakcie. Możliwy sposób naprawy zostanie ustalony po obejrzeniu pracy.' },
      { question: 'Proteza nie pękła, ale się przesuwa — czy to też naprawa?', answer: 'Przesuwanie i ucisk mogą wymagać dopasowania. Opisz, kiedy pojawia się problem. Po ocenie będzie można ustalić, czy potrzebna jest korekta, naprawa czy rozmowa o nowej protezie.' },
    ],
  },
  'protezy-zebowe/zlotow': {
    service: 'protezy-zebowe', city: 'Złotów', from: 'Złotowa',
    title: 'Protezy zębowe Złotów | Wykonanie w Zakrzewie',
    description: 'Nowa proteza zębowa dla osoby ze Złotowa? Omów wykonanie, dopasowanie i plan wizyt w pracowni Karoliny Szymańskiej w Zakrzewie. Tel. 735 491 129.',
    heading: 'Protezy zębowe dla osób ze Złotowa',
    intro: 'Szukasz nowej protezy albo zastanawiasz się, czy wymienić obecną? W pracowni protetyki Karoliny Szymańskiej w Zakrzewie omówisz oczekiwania dotyczące wyglądu, stabilności i codziennego użytkowania. Pierwsza rozmowa pomaga ustalić, jak przygotować się do wizyty ze Złotowa i co będzie potrzebne do zaplanowania pracy.',
    travel: 'Ze Złotowa do Zakrzewa jest orientacyjnie około 9 km drogą DW188 między miejscowościami. Przy nowej protezie ważniejsze od samej długości dojazdu jest rozplanowanie kolejnych etapów. Nie zakładaj wykonania całej pracy podczas jednego przyjazdu; harmonogram ustala się indywidualnie.',
    sections: [
      { title: 'Nowa proteza czy poprawa obecnej?', text: 'Zużyta lub niestabilna proteza nie zawsze wymaga od razu wymiany. Z kolei kolejna naprawa nie w każdej sytuacji rozwiąże problem z jej użytkowaniem. Zabierz obecną pracę, jeśli ją masz: pomoże to wyjaśnić, co działa dobrze, a co wymaga zmiany.', bullets: ['Powiedz, czy trudność dotyczy jedzenia, mówienia, utrzymania protezy czy jej wyglądu.', 'Wskaż, od kiedy pojawia się problem i czy proteza była już poprawiana.', 'Opisz, jaki efekt jest dla Ciebie najważniejszy: wygoda, stabilność lub estetyka.', 'Przed podjęciem decyzji omów zakres wykonania i koszt dopasowany do wybranego rozwiązania.'] },
      { title: 'Plan wykonania i wizyt dla osoby dojeżdżającej', text: 'Wykonanie nowej protezy obejmuje rozmowę o potrzebach, ustalenie rozwiązania, wykonanie i dopasowanie pracy oraz kontrolę użytkowania. Liczba spotkań i terminy zależą od indywidualnej sytuacji. Już na początku zapytaj o kolejność etapów i o to, kiedy ustalany będzie następny przyjazd do Zakrzewa. Wykonanie nowej protezy ma osobny harmonogram; informacja o pilnych naprawach w 24 godziny dotyczy uszkodzonych protez.' },
      { title: 'Komfort po odbiorze też jest częścią planu', text: 'Nowa proteza może wymagać czasu na przyzwyczajenie się oraz korekt po pierwszym okresie użytkowania. Przy odbiorze omów pielęgnację i sposób zgłaszania uwag. Jeśli pojawi się ucisk albo trudność podczas mówienia lub jedzenia, opisz konkretną sytuację i skontaktuj się w sprawie kontroli. Nie próbuj samodzielnie zmieniać kształtu protezy.' },
    ],
    steps: ['Zadzwoń i zaznacz, że pytasz o wykonanie nowej protezy, a nie naprawę.', 'Na uzgodnioną wizytę zabierz używaną protezę, jeśli ją masz, i przygotuj pytania o oczekiwany efekt.', 'Omów zakres wykonania, indywidualny koszt i kolejne etapy przed ustaleniem harmonogramu.', 'Po odbiorze stosuj zalecenia i uzgodnij kontrolę, jeśli potrzebne będzie dopasowanie.'],
    faqs: [
      { question: 'Gdzie odbywają się wizyty dla osób ze Złotowa?', answer: 'W pracowni w Zakrzewie przy ul. E. J. Osmańczyka 18. Nie jest to adres placówki w Złotowie. Zadzwoń pod 735 491 129, aby uzgodnić pierwszą wizytę i przygotowanie do niej.' },
      { question: 'Ile kosztuje wykonanie nowej protezy?', answer: 'Koszt zależy od indywidualnego zakresu pracy i ustalonego rozwiązania. Wycenę ustalam po omówieniu potrzeb i sposobu wykonania.' },
      { question: 'Ile razy trzeba przyjechać ze Złotowa?', answer: 'Liczbę wizyt i harmonogram ustala się indywidualnie. Trzeba uwzględnić etapy wykonania, dopasowanie i ewentualną kontrolę. Pierwsza rozmowa służy również zaplanowaniu tych przyjazdów.' },
      { question: 'Czy mogę zacząć od oceny starej protezy?', answer: 'Tak. Zabierz ją i powiedz, co przeszkadza Ci w codziennym użytkowaniu. Omówimy, czy rozważyć dopasowanie, naprawę uszkodzenia czy wykonanie nowej pracy.' },
    ],
  },
  'naprawa-protez/jastrowie': {
    service: 'naprawa-protez', city: 'Jastrowie', from: 'Jastrowia',
    title: 'Naprawa protez Jastrowie | Termin w Zakrzewie',
    description: 'Naprawa protez dla osób z Jastrowia. Pęknięcia, odłączone elementy i ocena dopasowania w Zakrzewie. Ustal dostarczenie i odbiór: 735 491 129.',
    heading: 'Naprawa protez dla osób z Jastrowia',
    intro: 'Gdy proteza pęknie albo przestaje być stabilna, przed dojazdem z Jastrowia warto ustalić, z czym zgłosić się do pracowni i jak zaplanować odbiór. Karolina Szymańska przyjmuje w Zakrzewie. Zadzwoń, opisz problem i uzgodnij termin obejrzenia protezy — nie musisz samodzielnie rozstrzygać, jaka naprawa będzie potrzebna.',
    travel: 'Celem dojazdu z Jastrowia jest pracownia w Zakrzewie, ul. E. J. Osmańczyka 18. Otwórz trasę do tego budynku i ustaw własny punkt startu. Przy planowaniu podróży uwzględnij możliwość pozostawienia protezy w pracowni oraz osobnego odbioru.',
    sections: [
      { title: 'Najpierw ustal dostarczenie, potem odbiór', text: 'Nie każda naprawa pozwala wrócić z gotową protezą bezpośrednio po jej dostarczeniu. Naprawa może być możliwa nawet w 24 godziny, ale termin zależy od zakresu uszkodzenia i dostępności. Podczas pierwszego kontaktu omów pilność sprawy i zapytaj o organizację odbioru. Ostateczny zakres oraz czas wykonania można potwierdzić po ocenie pracy.' },
      { title: 'Co powiedzieć przez telefon, żeby przygotować wizytę?', text: 'Rozmowa będzie konkretniejsza, jeśli opiszesz nie tylko samo pęknięcie, ale również to, jak proteza zachowywała się wcześniej. Nie trzeba znać jej technicznej nazwy.', bullets: ['Czy uszkodzenie nastąpiło po upadku, podczas jedzenia czy bez wyraźnej przyczyny?', 'Czy proteza pękła na części, czy odłączył się pojedynczy ząb lub fragment?', 'Czy przed uszkodzeniem przesuwała się, uciskała albo była już naprawiana?', 'Czy zachowały się wszystkie elementy i czy zależy Ci na możliwie pilnym terminie?'] },
      { title: 'Pęknięcie i brak dopasowania to różne problemy', text: 'Naprawa uszkodzonego elementu nie zawsze wystarcza, jeśli proteza wcześniej obcierała albo się przesuwała. Przy ocenie trzeba uwzględnić również dopasowanie i stan całej pracy. Dzięki temu można omówić, czy potrzebna jest naprawa, korekta czy inne rozwiązanie. Koszt ustalam indywidualnie po ocenie zakresu pracy.' },
    ],
    steps: ['Uzgodnij telefonicznie przyjazd z Jastrowia i opisz, jak doszło do uszkodzenia.', 'Przygotuj protezę i zachowane fragmenty. Nie używaj domowych klejów ani nie poprawiaj krawędzi.', 'Na miejscu omów zakres, koszt i termin odbioru, zanim zaplanujesz powrót po gotową pracę.', 'Przy odbiorze zgłoś uwagi dotyczące stabilności i zapytaj o dalsze użytkowanie.'],
    faqs: [
      { question: 'Czy pracownia ma punkt w Jastrowiu?', answer: 'Nie. Wizyty i naprawy odbywają się w Zakrzewie przy ul. E. J. Osmańczyka 18. Strona pomaga przygotować przyjazd osobom z Jastrowia i okolic.' },
      { question: 'Czy przed wyjazdem poznam dokładny koszt i czas?', answer: 'Przez telefon można opisać problem i uzgodnić wizytę. Dokładny zakres, koszt i termin wymagają indywidualnej oceny protezy; sam opis może nie ujawnić wszystkich uszkodzeń.' },
      { question: 'Czy można umówić naprawę ekspresową?', answer: 'Zapytaj telefonicznie o dostępny termin i powiedz, że sprawa jest pilna. Możliwość realizacji ekspresowej zależy od rodzaju uszkodzenia i aktualnych możliwości pracowni.' },
      { question: 'Co zrobić z odłamanymi fragmentami przed podróżą?', answer: 'Zabezpiecz je w zamykanym pojemniku razem z protezą i przynieś do oceny. Nie wyrzucaj drobnych części i nie próbuj łączyć ich klejem.' },
    ],
  },
  'naprawa-protez/krajenka': {
    service: 'naprawa-protez', city: 'Krajenka', from: 'Krajenki',
    title: 'Naprawa protez Krajenka | Pracownia w Zakrzewie',
    description: 'Pęknięta proteza lub kolejna usterka? Naprawa protez dla osób z Krajenki w Zakrzewie. Indywidualna ocena i ustalenie terminu: 735 491 129.',
    heading: 'Naprawa protez dla osób z Krajenki',
    intro: 'Pęknięta płyta, odłamany fragment lub wypadnięty ząb z protezy mogą wymagać naprawy. Jeśli dojeżdżasz z Krajenki, najpierw skontaktuj się z pracownią Karoliny Szymańskiej w Zakrzewie. Opowiedz, co się stało, a przy wcześniejszych naprawach także o tym, czy uszkodzenie powraca w tym samym miejscu.',
    travel: 'Pracownia obsługująca osoby z Krajenki mieści się w Zakrzewie przy ul. E. J. Osmańczyka 18. Link do nawigacji prowadzi do potwierdzonej lokalizacji budynku. Ustaw swój adres początkowy i sprawdź trasę przed wyjazdem na uzgodnioną wizytę.',
    sections: [
      { title: 'Świeże uszkodzenie: zachowaj wszystkie części', text: 'Po pęknięciu protezy najważniejsze jest jej zabezpieczenie do oceny. Nie sklejaj fragmentów domowymi środkami, nie szlifuj krawędzi i nie doginaj elementów. Jeśli proteza jest ostra, niestabilna lub powoduje ból, nie próbuj użytkować jej na siłę. Zadzwoń i opisz sytuację przed przyjazdem z Krajenki.', bullets: ['Zabierz całą protezę, również jeśli odłączył się tylko jeden ząb.', 'Zachowaj drobne fragmenty — mogą pomóc w ocenie uszkodzenia.', 'Powiedz, czy po pęknięciu były podejmowane próby samodzielnej naprawy.', 'Jeśli części zaginęły, zgłoś to przy umawianiu; zakres pomocy wymaga oceny pracy.'] },
      { title: 'Gdy proteza pęka kolejny raz', text: 'Przy powtarzającej się usterce warto przyjrzeć się nie tylko miejscu złamania, ale także stabilności i ogólnemu stanowi protezy. Powiedz, kiedy wykonano poprzednią naprawę oraz czy wcześniej pojawiało się przesuwanie lub ucisk. Pozwoli to omówić zasadność kolejnej naprawy, potrzebę dopasowania albo rozważenia nowej pracy. Nie każda stara proteza daje się przywrócić do oczekiwanego komfortu samą naprawą pęknięcia.' },
      { title: 'Cena i termin po ocenie konkretnej usterki', text: 'Zakres prac przy pęknięciu, brakującym elemencie i ponownym uszkodzeniu może być różny. Koszt i termin ustalam indywidualnie po ocenie protezy. Możliwość naprawy nawet w 24 godziny lub w trybie ekspresowym trzeba potwierdzić dla danej sytuacji. Przed wyjazdem ustal dostarczenie; odbiór zaplanuj według uzgodnionego terminu.' },
    ],
    steps: ['Zadzwoń pod 735 491 129 i opisz uszkodzenie oraz wcześniejsze naprawy.', 'Zapakuj protezę i odłączone elementy tak, aby nie zgubiły się w drodze.', 'Przyjedź do Zakrzewa w uzgodnionym terminie; omów zakres pracy, koszt i odbiór.', 'Przy odbiorze powiedz o ewentualnym ucisku i ustal zalecenia dotyczące użytkowania.'],
    faqs: [
      { question: 'Gdzie przyjechać z Krajenki na naprawę protezy?', answer: 'Do pracowni w Zakrzewie: ul. E. J. Osmańczyka 18, 77-424 Zakrzewo. Nie prowadzę punktu w Krajence. Przed dojazdem uzgodnij termin telefonicznie.' },
      { question: 'Czy ponownie pęknięta proteza nadaje się do naprawy?', answer: 'Wymaga to obejrzenia całej pracy. Kolejne pęknięcie jest powodem do omówienia również dopasowania i stanu protezy. Dopiero po ocenie można określić sens oraz zakres kolejnej naprawy.' },
      { question: 'Czy można skleić protezę przed przyjazdem?', answer: 'Nie próbuj naprawiać jej domowym klejem ani zmieniać kształtu krawędzi. Zachowaj elementy i przynieś je do pracowni. Samodzielne poprawki mogą utrudnić późniejszą naprawę.' },
      { question: 'Czy każda usterka oznacza nową protezę?', answer: 'Nie. Niektóre uszkodzenia można naprawić, a przy problemie ze stabilnością rozważyć dopasowanie. Nowa proteza jest osobnym rozwiązaniem, które warto omówić, jeśli naprawa obecnej pracy nie jest uzasadniona.' },
    ],
  },
};
