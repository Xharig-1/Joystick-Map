# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

Das Projekt nutzt SemVer: `MAJOR.MINOR.PATCH`.

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
