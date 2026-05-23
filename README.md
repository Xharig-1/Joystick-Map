# Joystick-Map

Ein einfacher Browser-Editor fuer Joystick- und HOTAS-Mappings fuer Star Citizen.

Joystick-Map unterstuetzt mehrere Stick-Modelle ueber ein Vorlagen-System.
Der Stick wird im Header ausgewaehlt, die passende Vorlage laedt automatisch.

Das Projekt ist eine fruehe Testversion und darf gern ausprobiert werden.

## Was ist neu — v0.6.0

- **Profil-Umschalter** — Belegungen koennen jetzt in mehreren benannten Profilen gespeichert werden
- **Profil-Leiste** unter dem Header: Klick auf einen Chip wechselt sofort das aktive Profil
- **+ Neu** legt ein neues leeres Profil an, Doppelklick auf den Namen benennt es um
- **✕** am Chip loescht ein Profil (nach Bestaetigung); „Standard" ist geschuetzt

Aeltere Aenderungen stehen im [CHANGELOG](CHANGELOG.md) und in den [Releases](../../releases).

## Version

Aktuelle Version: `v0.6.1`

## Download & Start

1. Unter **Releases** die Datei `joystick-map-vX.Y.Z.html` herunterladen.
2. Datei direkt im Browser oeffnen — kein Server, keine Installation noetig.
3. Oben rechts den eigenen Stick aus dem Dropdown auswaehlen.
4. Auf ein Feld auf der Vorlage klicken und die Belegung eintragen.
5. Alles wird automatisch gespeichert — auch nach einem Neustart des Browsers.

Eine ausfuehrlichere Anleitung ist in der App selbst unter dem Tab **? Hilfe** zu finden.

## Star Citizen Mappings finden

Eigene Mappings im Spiel mit diesem Konsolenbefehl exportieren:

```text
pp_rebindkeys export Mein_Mapping_Name
```

Wichtig: Auf den aktuell gespielten Kanal achten.
Wer HOTFIX spielt, sucht im HOTFIX-Ordner. Wer LIVE spielt, sucht im LIVE-Ordner.

Typische Pfade:

```text
E:\Programme\Roberts Space Industries\StarCitizen\LIVE\user\client\0\controls\mappings
E:\Programme\Roberts Space Industries\StarCitizen\HOTFIX\user\client\0\controls\mappings
```

## Aktueller Stand

- Unterstuetzte Sticks: Virpil Constellation Alpha (L/R), VKB Gladiator SCG (LH/RH)
- Stick-Auswahl im Header, Auswahl wird gespeichert
- Belegungsliste-Tab: alle Button-Felder als Tabelle mit Zeilen-Modus-Buttons (C/M/S)
- Modus-Tags (Combat / Mining / Salvage) pro Feld und pro Zeile; Filter-Bar zum Ausblenden
- Tastatur- und Maus-Tab als Tabellenansicht, Standardbelegung hinterlegt
- Textfelder direkt auf der Vorlage bearbeitbar, automatische Speicherung im Browser
- Felder sperren: beim Hover erscheint ein Schloss-Symbol
- Rueckgaengig-Knopf und Reset-Knopf
- Star Citizen Import: actionmaps.xml direkt einlesen
- Update-Check mit Download-Link
- Changelog-Tab zeigt, wann welches Feld zuletzt geaendert wurde
- Hell/Dunkel-Umschalter im Header

## Projektstatus

- Phase 1–5b: abgeschlossen (Profile, Changelog, Stick-Auswahl, Tastatur/Maus, Modus-Tags, Profil-Umschalter)
- Naechstes Ziel: Quick Reference Tab (v0.7.0)

Details stehen in `ROADMAP.md` und `CHANGELOG.md`.

## Lizenz

MIT License. Details stehen in `LICENSE`.
