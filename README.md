# Joystick-Map

Ein einfacher Browser-Editor fuer Joystick- und HOTAS-Mappings.

Joystick-Map unterstuetzt mehrere Stick-Modelle ueber ein Vorlagen-System.
Der Stick wird im Header ausgewaehlt, die passende Vorlage laedt automatisch.

Das Projekt ist eine fruehe Testversion und darf gern ausprobiert werden.

## Was ist neu — v0.4.21

- **Update-Check verbessert** — "offline" nur noch bei echtem Netzwerkfehler; Rate-Limit und HTTP-Fehler zeigen jetzt eine sprechende Meldung statt generisch "offline"

Aeltere Aenderungen stehen im [CHANGELOG](CHANGELOG.md) und in den [Releases](../../releases).

## Version

Aktuelle Version: `v0.4.21`

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

- Unterstuetzte Sticks: Virpil Constellation Alpha (L/R), VKB Gladiator SCG (LH/RH)
- Stick-Auswahl im Header mit klarer Aktiv-/Hover-Markierung, Auswahl wird gespeichert
- Geraete-Auswahl im Header: Sticks oder Tastatur & Maus
- Tastatur- und Maus-Tab als Tabellenansicht, Standardbelegung hinterlegt
- Textfelder direkt auf der Vorlage bearbeitbar, automatische Speicherung im Browser
- Felder sperren: beim Hover erscheint ein Schloss-Symbol
- Rueckgaengig-Knopf und Reset-Knopf
- Star Citizen Import: actionmaps.xml direkt einlesen, inklusive Stick-, Tastatur- und Mausbelegung
- Update-Check: zeigt eine neue GitHub-Release-Version mit Download-Link an
- Changelog-Tab zeigt, wann welches Feld zuletzt geaendert wurde
- Versionsnummer als Badge im Header und in der Statusleiste

## Projektstatus

- Phase 1: abgeschlossen
- Phase 2: abgeschlossen
- Phase 3: abgeschlossen (Stick-Auswahl und Vorlagen-System)
- Phase 4: abgeschlossen (Tastatur & Maus)
- Profil-Umschalter: geplant

Details stehen in `ROADMAP.md` und `CHANGELOG.md`.

## Lizenz

MIT License. Details stehen in `LICENSE`.
