# Instrukcja

## 1. Inicjalizacja OpenCode

Aby rozpocząć korzystanie z OpenCode, zainicjalizuj projekt w swoim katalogu roboczym za pomocą następującego polecenia:

```bash
opencode init
```

Powinineś zobaczyć komunikat potwierdzający pomyślną inicjalizacje oraz utworzenie pliku konfiguracyjnego
`.opencode/config.json`.

## 2. Konfiguracja agenta

Utwórzmy nowego agenta o nazwie `sql-db`, specjalizującego się w frontendzie z użyciem React, TypeScript, Material
UI i React Query.

Najpierw, zacznijmy od utworzenia katalogu `.opencode/agent` w katalogu roboczym, jeśli jeszcze go nie ma:

```bash
mkdir -p .opencode/agent
```

Następnie, utwórz plik `sql-db.md` w katalogu `.opencode/agent` z następującą zawartością:

```markdown
# SQL DB Agent

## Description
Jesteś agentem SQL odpowiedzialnym za pracę z małym serwerem MySQL
poprzez MCP Toolbox for Databases.

Twoim celem jest:
- analiza schematu bazy,
- pisanie i uruchamianie zapytań SQL,
- pomoc w refaktorach i migracjach schematu,
- generowanie przykładowych danych testowych.

## Instructions
- Używaj **tylko** narzędzi MCP z serwera `sql-toolbox` (Toolbox for Databases).
- Najpierw poznaj schemat:
    - użyj narzędzi do listowania tabel i wykonywania SELECTów,
    - NIE zakładaj struktury tabel – zawsze ją sprawdź w bazie.
- Przy modyfikacjach:
    - preferuj migracje krokowe (ALTER TABLE zamiast DROP/CREATE),
    - wyjaśniaj, jakie będą skutki zmian.
- Przy pisaniu zapytań:
    - dbaj o czytelność (aliasy, wcięcia),
    - optymalizuj pod kątem indeksów, jeśli to istotne,
    - unikaj `SELECT *` w kodzie produkcyjnym, używaj go tylko eksploracyjnie.
- Traktuj bazę jak środowisko developerskie:
    - możesz tworzyć tabele testowe,
    - ale z zachowaniem ostrożności przy operacjach destrukcyjnych (DROP, TRUNCATE).

## Tools
- sql-toolbox (MCP Toolbox for Databases – MySQL)
```

Zapisz plik i zamknij edytor.

Teraz dodajmy tego agenta w pliku konfiguracyjnym `.opencode/config.json`. Otwórz plik i dodaj następującą sekcję do
tablicy `agents`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "sql-toolbox": {
      "type": "remote",
      "url": "http://127.0.0.1:5010/mcp",
      "enabled": true
    }
  },
  "agent": {
    "sql-db": {
      "mcpServer": [
        "sql-toolbox"
      ]
    }
  }
}
```

Zapisz plik i zamknij edytor.

## 3. Uruchomienie OpenCode

Aby uruchomić OpenCode z nowo skonfigurowanym agentem `sql-db`, użyj następującego polecenia w terminalu:

```bash
opencode
```

OpenCode powinien teraz działać z agentem `sql-db`, gotowym do pomocy w zadaniach bazodanowych zgodnie z podanymi
instrukcjami.

## 4. Weryfikacja działania agenta

Aby zweryfikować, czy agent `sql-db` działa poprawnie, możesz zadać mu proste pytanie dotyczące baz danych, na przykład:

```bash
opencode "Jakie mam obecnie tabele w bazie?"
```

Jeśli agent odpowie zgodnie z oczekiwaniami, oznacza to, że konfiguracja przebiegła pomyślnie i agent jest gotowy do
użycia.

---
## 5. Przydatne linki:
- [Dokumentacja OpenCode](https://opencode.ai/docs)
- [Serwery MCP](https://github.com/modelcontextprotocol/servers)