# Ground Vehicles – mini portal React

Prosty portal React z tabelą pojazdów naziemnych. Układ nawiązuje do dostarczonego zrzutu ekranu.

## Uruchomienie lokalne

1. Otwórz folder projektu w Visual Studio Code.
2. W terminalu przejdź do katalogu projektu.
3. Wpisz:

```bash
npm install
npm run dev
```

4. Otwórz adres pokazany w terminalu (zwykle `http://localhost:5173`).

## Publikacja w Vercel

Projekt jest przygotowany jako aplikacja Vite. Aby opublikować go na swoim koncie:

1. Umieść folder projektu w repozytorium GitHub.
2. Zaloguj się do Vercel i wybierz dodanie projektu z repozytorium GitHub.
3. Wybierz to repozytorium. Vercel powinien rozpoznać Vite.
4. Jako polecenie budowania pozostaw `npm run build`, a katalog wynikowy `dist`.
5. Wybierz Deploy.

Publikacja wymaga zalogowania do własnych kont GitHub i Vercel; ten projekt nie został jeszcze wysłany na zewnętrzny hosting.

## Najważniejsze pliki

- `src/main.jsx` – główny plik, dane pojazdów, filtrowanie i uruchomienie aplikacji.
- `src/components/` – osobne komponenty portalu.
- `src/Style.css` – wygląd strony.
- `public/ground-vehicles-banner.jpg` – przycięty fragment banera z dostarczonego zrzutu ekranu.
