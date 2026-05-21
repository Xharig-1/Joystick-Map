# Joystick-Map

Ein einfacher Browser-Editor fuer Joystick- und HOTAS-Mappings.

Joystick-Map unterstuetzt mehrere Stick-Modelle ueber ein Vorlagen-System.
Der Stick wird im Header ausgewaehlt, die passende Vorlage laedt automatisch.

Das Projekt ist eine fruehe Testversion und darf gern ausprobiert werden.

## Version

Aktuelle Version: `v0.4.8`

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

In `controls\mappings` liegen die exportierten Layout-Dateien fuer Joystick/HOTAS. Der alte Profilordner-Hinweis gilt nicht fuer diesen Joystick-Import.

Die aktuelle Standardbelegung von Tastatur und Maus kann Star Citizen auch in der Profil-Datei speichern:

```text
E:\Programme\Roberts Space Industries\StarCitizen\LIVE\user\client\0\Profiles\default\actionmaps.xml
E:\Programme\Roberts Space Industries\StarCitizen\HOTFIX\user\client\0\Profiles\default\actionmaps.xml
```

Auch hier gilt: immer auf LIVE oder HOTFIX achten, je nachdem welchen Kanal du gerade spielst.

## Aktueller Stand

- Stick-Auswahl im Header mit klarer Aktiv-/Hover-Markierung, Auswahl wird gespeichert
- Geräte-Auswahl im Header: Virpil-Sticks oder Tastatur & Maus
- Alpha L und Alpha R als Tabs (Beschriftung passt sich dem Stick an)
- Titelbereich der Stick-Vorlagen ist besser zentriert und lesbarer
- Tastatur- und Maus-Tab als Tabellenansicht
- Standardbelegung fuer Tastatur und Maus ist hinterlegt und ohne Import sichtbar
- Textfelder direkt auf der Vorlage bearbeitbar
- Button-Nummern zeigen die Star-Citizen-internen Eingaben und sind nicht editierbar
- automatische Speicherung im Browser
- Rueckgaengig-Knopf fuer letzte Aenderungen
- Reset-Knopf leert alle Textfelder (gesperrte Felder werden uebersprungen)
- Felder sperren: beim Hover erscheint ein Schloss-Symbol
- Star Citizen Import: actionmaps.xml direkt einlesen, inklusive Stick-, Tastatur- und Mausbelegung
- Update-Check: zeigt eine neue GitHub-Release-Version mit Download-Link an
- Changelog-Tab zeigt, wann welches Feld zuletzt geaendert wurde
- Version wird in der Statusleiste angezeigt
- Version wird zusätzlich als Badge im Header angezeigt

## Projektstatus

- Phase 1: abgeschlossen
- Phase 2: abgeschlossen
- Phase 3: abgeschlossen (Stick-Auswahl und Vorlagen-System)
- Phase 4: abgeschlossen (Tastatur & Maus)
- Profil-Umschalter: geplant

Details stehen in `ROADMAP.md` und `CHANGELOG.md`.

## Lizenz

MIT License. Details stehen in `LICENSE`.
