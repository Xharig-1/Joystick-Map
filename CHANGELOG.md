# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

Das Projekt nutzt SemVer: `MAJOR.MINOR.PATCH`.

## v0.3.3 - 2026-05-21

### Hinzugefügt

- Hilfe-Tab in der App mit Anleitung zu Erste Schritte, Felder bearbeiten, Buttons und Hinweisen zum Browser-Speicher.
- README um eine Schritt-für-Schritt-Anleitung für neue Nutzer erweitert.

## v0.3.2 - 2026-05-21

### Behoben

- Bundle-Workflow: PNGs wurden zwar im HTML-Attribut ersetzt, aber JavaScript überschrieb die URL danach wieder mit dem relativen Pfad aus dem STICKS-Objekt. Der Bundler ersetzt jetzt alle Vorkommen des Asset-Pfades — unabhängig davon ob HTML-Attribut oder JS-String.

## v0.3.1 - 2026-05-21

### Hinzugefügt

- GitHub Actions Workflow: beim Tag-Push werden alle PNG-Vorlagen automatisch als Base64 in die HTML eingebettet.
- Release-Asset auf GitHub: `joystick-map-vX.Y.Z.html` — eine echte Einzeldatei, kein Ordner, kein ZIP nötig.

## v0.3.0 - 2026-05-21

### Hinzugefügt

- Stick-Auswahl im Header: Dropdown zur Auswahl des Joystick-Modells.
- Vorlagen-System: Stick-Daten (Template-Bilder, Felder, Skalierung, Tab-Beschriftungen) sind im `STICKS`-Objekt organisiert — neue Modelle können einfach ergänzt werden.
- Ausgewählter Stick wird im `localStorage` gespeichert und beim nächsten Start wiederhergestellt.
- Tab-Beschriftungen aktualisieren sich dynamisch je nach gewähltem Stick.

### Geändert

- Xharig-Branding vollständig umgesetzt: Akzentfarben Grün (`#6dcc68`, `#47aa42`, `#3d9438`), Textfarbe grün getönt (`#c8dcc8`).
- CSS-Variablen von `--cyan` auf `--accent` umbenannt (semantisch sauber, zukunftssicher).
- App-Version auf `v0.3.0` erhöht.

## v0.2.3 - 2026-05-21

### Geändert

- Öffentlicher Projektname auf `Joystick-Map` vorbereitet.
- README beschreibt das Projekt jetzt allgemeiner für Joystick- und HOTAS-Mappings.
- Anwendungstitel und Kopfzeile zeigen `Joystick-Map`.
- Roadmap um eine Phase für Stick-Auswahl und Vorlagen-System erweitert.

## v0.2.2 - 2026-05-21

### Geändert

- README für öffentliche Tests erweitert.
- Roadmap auf den aktuellen Stand gebracht.
- App-Version auf `v0.2.2` erhöht.

### Geprüft

- Keine privaten lokalen Pfade, E-Mail-Adressen, Tokens oder Secrets im Repository gefunden.
- Box-Ausrichtung wurde von Xharig geprüft und als sauber bestätigt.

## v0.2.1 - 2026-05-21

### Hinzugefügt

- Aktuelle Version wird in der Statusleiste der Anwendung angezeigt.

## v0.2.0 - 2026-05-21

### Hinzugefügt

- Phase 2 abgeschlossen: Changelog-Tab.
- Pro Feld wird gespeichert, wann es zuletzt geändert wurde.
- Changelog zeigt Zeitpunkt, Profil, Bereich, Feldname und Wert.
- Felder zeigen per Tooltip die letzte Änderung.
- Button-Nummern/IDs sind editierbar.
- Leere PDF-Vorlagen wurden als PNGs eingebunden:
  - `assets/alpha-l-template.png`
  - `assets/alpha-r-template.png`

### Geändert

- Alte Base64-Vorlagen wurden aus `index.html` entfernt.
- Textfelder liegen auf leeren Vorlagen, damit keine doppelte Schrift erscheint.
- Nummernfelder nutzen dieselbe Speicherung und Rückgängig-Logik wie normale Textfelder.

### Behoben

- Speicherzugriff ist abgesichert, damit der Editor auch dann editierbar bleibt, wenn `localStorage` auf `file://` blockiert ist.

## v0.1.0 - 2026-05-20

### Hinzugefügt

- Phase 1 abgeschlossen: neue Speicherstruktur `virpil_buttonmap_v2`.
- Vorbereitung für Profile, Tags und Changelog.
- Automatische Migration aus `virpil_buttonmap_v1`.
- Standardprofil `default`.

### Geändert

- Import JSON entfernt.
- Export JSON entfernt.
- Reset leert alle Textfelder.
- Rückgängig-Button ergänzt.
- Überflüssige Tabs entfernt.
