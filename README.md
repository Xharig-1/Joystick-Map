# Joystick-Map

Ein einfacher Browser-Editor fuer Joystick- und HOTAS-Mappings.

Joystick-Map unterstuetzt mehrere Stick-Modelle ueber ein Vorlagen-System.
Der Stick wird im Header ausgewaehlt, die passende Vorlage laedt automatisch.

Das Projekt ist eine fruehe Testversion und darf gern ausprobiert werden.

## Version

Aktuelle Version: `v0.3.5`

## Download & Start

1. Unter **Releases** die Datei `joystick-map-vX.Y.Z.html` herunterladen.
2. Datei direkt im Browser oeffnen — kein Server, keine Installation noetig.
3. Oben rechts den eigenen Stick aus dem Dropdown auswaehlen.
4. Auf ein Feld auf der Vorlage klicken und die Belegung eintragen.
5. Alles wird automatisch gespeichert — auch nach einem Neustart des Browsers.

Eine ausfuehrlichere Anleitung ist in der App selbst unter dem Tab **? Hilfe** zu finden.

## Aktueller Stand

- Stick-Auswahl im Header, Auswahl wird gespeichert
- Alpha L und Alpha R als Tabs (Beschriftung passt sich dem Stick an)
- Textfelder direkt auf der Vorlage bearbeitbar
- Button-Nummern ebenfalls editierbar
- automatische Speicherung im Browser
- Rueckgaengig-Knopf fuer letzte Aenderungen
- Reset-Knopf leert alle Textfelder (gesperrte Felder werden uebersprungen)
- Felder sperren: beim Hover erscheint ein Schloss-Symbol
- Star Citizen Import: actionmaps.xml direkt einlesen
- Changelog-Tab zeigt, wann welches Feld zuletzt geaendert wurde
- Version wird in der Statusleiste angezeigt

## Projektstatus

- Phase 1: abgeschlossen
- Phase 2: abgeschlossen
- Phase 3: abgeschlossen (Stick-Auswahl und Vorlagen-System)
- Phase 4: geplant (Profil-Umschalter)

Details stehen in `ROADMAP.md` und `CHANGELOG.md`.

## Lizenz

MIT License. Details stehen in `LICENSE`.
