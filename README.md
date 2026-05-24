<div align="center">

# 🎮 Joystick-Map

**Browser-Editor für Joystick- und HOTAS-Mappings in Star Citizen**

[![Download](https://img.shields.io/github/v/release/Xharig-1/Joystick-Map?label=Download&color=47aa42&logo=github)](https://github.com/Xharig-1/Joystick-Map/releases/latest)
[![Lizenz](https://img.shields.io/badge/Lizenz-MIT-47aa42)](LICENSE)
[![Star Citizen](https://img.shields.io/badge/Star%20Citizen-kompatibel-0a4a7a)](https://robertsspaceindustries.com/)

</div>

---

Belegungen eintragen, Star-Citizen-XML importieren, Modus-Tags setzen — alles direkt im Browser, ohne Installation, ohne Account, ohne Cloud.

## Features

| | |
|---|---|
| 🗂️ **SC Import** | `actionmaps.xml` aus Star Citizen direkt einlesen — Belegungen werden automatisch übernommen |
| 🏷️ **Modus-Tags** | Felder mit Combat / Mining / Salvage markieren; Filter-Bar blendet alles Irrelevante aus |
| 📋 **Belegungsliste** | Alle Felder als übersichtliche Tabelle, Modus-Tags direkt pro Zeile setzbar |
| 👤 **Profile** | Mehrere Belegungssets anlegen, benennen und mit einem Klick wechseln |
| 🖨️ **Drucken** | Alle Stick-Seiten plus Tastatur/Maus als druckfertige Seiten direkt aus dem Browser |
| ☀️🌙 **Hell/Dunkel** | Umschalter im Header, Einstellung wird gespeichert |
| 🔒 **Felder sperren** | Gesperrte Felder werden bei Reset und SC Import nicht überschrieben |

## Unterstützte Sticks

| Modell | Seiten |
|---|---|
| Virpil Constellation Alpha | Links (L) · Rechts (R) |
| VKB Gladiator NXT PREM | Links (LH) · Rechts (RH) |

Weitere Stick-Modelle kommen — Wünsche gerne als [Issue](../../issues) posten!

## Download & Start

1. Unter **[Releases](../../releases)** die Datei `joystick-map-vX.Y.Z.html` herunterladen
2. Datei direkt im Browser öffnen — kein Server, keine Installation nötig
3. Stick im Dropdown oben rechts auswählen
4. Auf ein Feld klicken und Belegung eintragen — alles wird automatisch gespeichert

Eine ausführlichere Anleitung ist in der App selbst unter **? Hilfe** zu finden.

## Star Citizen Mappings importieren

Eigene Mappings im Spiel exportieren:

```text
pp_rebindkeys export Mein_Mapping_Name
```

Typische Pfade (je nach gespieltem Kanal):

```text
...\StarCitizen\LIVE\user\client\0\controls\mappings
...\StarCitizen\HOTFIX\user\client\0\controls\mappings
```

Nach dem Export unter **⬇ SC Import** in der App die XML-Datei auswählen.

> 🔒 **Offline & privat** — die App ist eine einzige HTML-Datei und arbeitet komplett ohne Internetverbindung. Kein Server, keine Cloud, keine Anmeldung. Eure Daten bleiben ausschließlich in eurem eigenen Browser-Speicher und verlassen euren Rechner nicht. Den vollständigen Quellcode könnt ihr jederzeit auf GitHub einsehen — alles offen und nachvollziehbar.

> 🔍 **Tester gesucht!** — Das Projekt ist noch in der Testphase. Bugs, Verbesserungsideen und Stick-Wünsche bitte als [Issue](../../issues) melden — jeder Hinweis hilft!

## Author

[![Xharig](https://github.com/Xharig-1.png?size=40)](https://github.com/Xharig-1)  
**Xharig** — [github.com/Xharig-1](https://github.com/Xharig-1)

If you fork this project, please keep the credit in the footer or mention the original source.

## Lizenz

MIT License. Details stehen in [LICENSE](LICENSE).
