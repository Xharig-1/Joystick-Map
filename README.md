# Joystick-Map

Ein einfacher Browser-Editor fuer Joystick- und HOTAS-Mappings fuer Star Citizen.

Joystick-Map unterstuetzt mehrere Stick-Modelle ueber ein Vorlagen-System.
Der Stick wird im Header ausgewaehlt, die passende Vorlage laedt automatisch.

Das Projekt ist eine fruehe Testversion und darf gern ausprobiert werden.

## Was ist neu — v0.7.14

- **Hilfe-Tab** — Drucken-Button, Liste-Tab und VKB-Erkennung beim SC-Import ergänzt; Tabs-Abschnitt aktualisiert

Aeltere Aenderungen stehen im [CHANGELOG](CHANGELOG.md) und in den [Releases](../../releases).

## Version

Aktuelle Version: `v0.7.14`

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

- Unterstuetzte Sticks: Virpil Constellation Alpha (L/R), VKB Gladiator NXT PREM (LH/RH)
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

- Phase 1–8: abgeschlossen (Profile, Changelog, Stick-Auswahl, Tastatur/Maus, Modus-Tags, Profil-Umschalter, Drucken)
- Naechstes Ziel: offen — Feedback aus Tests abwarten

Details stehen in `ROADMAP.md` und `CHANGELOG.md`.

## Author

[![Xharig](https://github.com/Xharig-1.png?size=40)](https://github.com/Xharig-1)  
**Xharig** — [github.com/Xharig-1](https://github.com/Xharig-1)

If you fork this project, please keep the credit in the footer or mention the original source.

## Lizenz

MIT License. Details stehen in `LICENSE`.
