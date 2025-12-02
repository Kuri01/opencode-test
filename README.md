# opencode-test

Mały projekt TypeScript/Node z testami w Jest.  
Ten plik opisuje **dokładnie**, co trzeba zainstalować i jakie komendy wykonać, żeby uruchomić aplikację.

## 1. Wymagania wstępne

Żeby uruchomić ten projekt, potrzebujesz:

1. **System operacyjny**
    - macOS, Linux albo Windows (najlepiej z WSL, ale da się też na „gołym” Windowsie).

2. **Terminal**
    - macOS: aplikacja „Terminal” lub iTerm.
    - Windows: PowerShell / Windows Terminal.
    - Linux: dowolny terminal.

3. **Git**
- Sprawdź, czy jest zainstalowany:
  ```bash
  git --version
  ```
- Jeśli nie, zainstaluj:
    - macOS: przez Xcode Command Line Tools (`xcode-select --install`) lub Homebrew.
    - Windows: pobierz „Git for Windows”.
    - Linux: np. `sudo apt install git` (Ubuntu/Debian).

4. **Volta (obowiązkowo)**  
W tym projekcie **nie instalujemy Node ręcznie** ani przez `nvm`.  
Wszystko ma dostarczyć **[Volta](https://volta.sh/)**.

### Instalacja Volta — macOS / Linux

Wklej w terminalu:

```bash
curl https://get.volta.sh | bash
```

Następnie zamknij i otwórz terminal, żeby Volta się aktywowała.

Sprawdź, czy działa:

```bash
volta --version
```

Instalacja Volta — Windows
- Wejdź na stronę Volta (https://volta.sh/) i pobierz instalator dla Windows.
- Po instalacji otwórz nowe okno PowerShell / Windows Terminal i sprawdź:

```bash
volta --version
```

---

## 2. Co Volta robi w tym projekcie?

W pliku package.json jest sekcja:

```json
{
  "volta": {
    "node": "22.21.1",
    "yarn": "4.12.0"
  }
}
```

\
To oznacza, że:
- w katalogu tego projektu Volta automatycznie:
- pobierze i uruchomi Node 22.21.1,
- pobierze i uruchomi Yarn 4.12.0,
- Ty nie musisz samodzielnie instalować Node ani Yarn, wystarczy mieć Volta.

---

## 3. Pobranie projektu

Jeśli jeszcze nie masz kodu na dysku — sklonuj repozytorium:

```bash
git clone https://github.com/Kuri01/opencode-test.git
cd opencode-test
```

---

## 4. Instalacja zależności

Będąc w katalogu projektu (opencode-test):

```bash
yarn install
```

Volta zadba, żeby użyć właściwej wersji Yarn i Node.

Po tej komendzie w projekcie pojawi się folder z zależnościami (node_modules/).

---

## 5. Dostępne skrypty

Wszystkie komendy uruchamiasz przez Yarn.

#### 5.1. Uruchomienie aplikacji w trybie deweloperskim

Aplikacja jest prosta — na razie wypisuje w konsoli „Hello, world!”, ale można ją rozwijać.

Tryb dev (bez kompilacji do dist, uruchamia bezpośrednio TypeScript przez ts-node):

```bash
yarn dev
```

Zobaczysz w terminalu:

```terminaloutput
Hello, world!
```

#### 5.2. Zbudowanie aplikacji (kompilacja TypeScript → JavaScript)

```bash
yarn build
```

To:
- skompiluje pliki z src/ do katalogu dist/,
- wygeneruje:
- pliki .js,
- mapy źródeł (.js.map),
- deklaracje typów (.d.ts).

5.3. Uruchomienie zbudowanej aplikacji

Najpierw:

```bash
yarn build
```

Potem:

```bash
yarn start
```

To uruchomi:

node dist/index.js

I znów zobaczysz w konsoli:

```terminaloutput
Hello, world!
```

5.4. Testy

Uruchom wszystkie testy:

```bash
yarn test
```

Tryb „nasłuchujący” (ponowne odpalanie testów przy zmianie plików):
```bash
yarn test:watch
```

5.5. Lint (sprawdzanie jakości kodu)

```bash
yarn lint
```

To uruchomi ESLint z konfiguracją z pliku eslint.config.ts.

---

## 6. Struktura projektu

Krótko o strukturze:

```tree
.
├── src/
│ └── index.ts # Główny plik aplikacji (na razie tylko "Hello, world!")
├── tsconfig.json # Konfiguracja TypeScript
├── jest.config.js # Konfiguracja testów (Jest + ts-jest)
├── eslint.config.ts # Konfiguracja ESLint (TypeScript)
├── package.json # Zależności, skrypty i wersje Volta (Node + Yarn)
└──.gitignore # Pliki/katalogi ignorowane przez Git
```

--- 
## 7. Najczęstsze problemy

„Command ‘yarn’ not found”
- Upewnij się, że Volta jest zainstalowana:
```bash
volta --version
```

- Jeśli jest, a nadal nie ma yarn:
- upewnij się, że jesteś w katalogu projektu, który ma sekcję "volta" w package.json,
- jeśli wciąż nie działa, możesz wymusić instalację:
```bash
volta install yarn@4.12.0
```

„Command ‘node’ not found” lub zła wersja Node
- Tak samo: Volta powinna to ogarnąć automatycznie, ale w razie czego:
```bash
volta install node@22.21.1
```
---

To wszystko – po przejściu powyższych kroków osoba kompletnie zielona powinna być w stanie:

1. sklonować repozytorium,
2. zainstalować zależności (yarn install),
3. uruchomić projekt (yarn dev lub yarn build && yarn start),
4. odpalić testy (yarn test),
5. sprawdzić lint (yarn lint).

