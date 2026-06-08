# Roadmap

Aktuelle Version: `v0.7.38`

## Zielbild

Joystick-Map ist ein Browser-Editor für Joystick- und HOTAS-Mappings in Star Citizen.
Unterstützte Sticks: Virpil Constellation Alpha (L/R) und VKB Gladiator NXT PREM (LH/RH).
Aktueller Fokus: öffentliche Tests, Feedback sammeln und weitere Stick-Vorlagen bei Bedarf ergänzen.

## Phasen

| Phase | Status | Inhalt |
|---|---|---|
| Phase 1 | Abgeschlossen | Datenbasis für Profile, Changelog und Tags |
| Phase 2 | Abgeschlossen | Changelog pro Feld |
| Phase 3 | Abgeschlossen | Stick-Auswahl und Vorlagen-System für mehrere Joystick-Modelle |
| Phase 4 | Abgeschlossen | Tastatur- und Maus-Ansicht |
| Phase 4b | Abgeschlossen | Modus-Tags (Combat / Mining / Salvage) inkl. Zeilen-Tags und Listen-Tab |
| Phase 5b | Abgeschlossen | Profil-Umschalter für mehrere Belegungssets |
| Phase 8 | Abgeschlossen | Drucken — Stick-Overlays + Tastatur/Maus als Druckseiten |
| Phase 9 | Laufend | Testen, dokumentieren und öffentliches Feedback sammeln |

## Offene Nacharbeit

- Keine kritischen Punkte vor dem öffentlichen Test bekannt.
- Nächstes Feedback aus öffentlichen Tests sammeln und einordnen.

## Geplante Versionen

| Version | Geplanter Inhalt |
|---|---|
| v0.2.1 | Version in der Statusleiste |
| v0.2.2 | Öffentliche Testvorbereitung |
| v0.2.3 | Projektname Joystick-Map und Roadmap für mehrere Sticks |
| v0.3.0 | Stick-Auswahl und Vorlagen-System ✓ |
| v0.3.6 | SC-Import korrigiert: interne Buttonnummern, Achsen und Standardbeschriftungen |
| v0.3.7 | Nutzerhinweis zu LIVE/HOTFIX-Mappingordnern ergänzt |
| v0.4.0 | Tastatur- und Maus-Ansicht |
| v0.4.1 | Hinweis zum Profilordner mit `actionmaps.xml` ergänzt |
| v0.4.2 | SC-Import-Hinweis auf `controls\mappings` korrigiert |
| v0.4.3 | Update-Check mit Download-Link |
| v0.4.4 | SC-Import-Button in der Hilfe ergänzt |
| v0.4.5 | Standardbelegung fuer Tastatur und Maus hinterlegt |
| v0.4.6 | Stick-Auswahl optisch korrigiert |
| v0.4.7 | Titelbereich der Stick-Vorlagen lesbarer gemacht |
| v0.4.8 | Versions-Badge im Header ergänzt |
| v0.4.9 | Standard-Tastatur als visuellen Entwurf ergänzt |
| v0.4.10 | Standard-Tastatur breiter und echter aufgebaut |
| v0.4.11 | Standard-Tastatur-Tab wieder entfernt |
| v0.4.12 | VKB Gladiator NXT EVO als zweite Vorlage |
| v0.4.13 | VKB Gladiator SCG (LH/RH) korrekte Vorlage + Feldpositionen |
| v0.4.14 | Hell/Dunkel-Umschalter im Header |
| v0.4.15 | Transparente Template-PNGs (weißer Hintergrund entfernt) |
| v0.5.0 | Modus-Tags ✓ |
| v0.5.1 | Alpha R weißer Hintergrund behoben ✓ |
| v0.5.2 | Hilfe-Tab: Modus-Tags erklärt ✓ |
| v0.5.3 | Standard-Modus-Tags auto-gesetzt ✓ |
| v0.5.4 | Modus-Tag-Punkte vergrößert ✓ |
| v0.5.5 | Zeilen-Modus-Tags mit Farb-Streifen ✓ |
| v0.5.6–0.5.7 | Hover-Fix und Hilfe-Update ✓ |
| v0.5.8 | Belegungsliste-Tab ✓ |
| v0.5.9 | Reset-Button im Listen-Tab ✓ |
| v0.5.10 | Overlay-Tagging bereinigt ✓ |
| v0.5.11 | Farb-Streifen live-Update ✓ |
| v0.5.12 | Dokumentation vollständig aktualisiert; die Projekt-Doku mit Release-Checkliste ✓ |
| v0.5.13 | Alpha R Eingabe-Boxen wieder weiß (PNG-Fix) ✓ |
| v0.5.14 | SC-Import setzt Modus-Tags automatisch anhand der Aktionskategorie ✓ |
| v0.5.15 | SC-Import: VKB-Sticks (` L `/` R ` statt `LEFT`/`RIGHT`) werden jetzt erkannt ✓ |
| v0.5.16 | SC-Import: VKB-Achsen (twist/throttle/A1) + Hat-Inputs werden jetzt geparst ✓ |
| v0.5.17 | Zeilen-Streifen: Position für VKB-Felder auf rechter Template-Seite korrigiert ✓ |
| v0.5.18 | Modus-Tags nach SC-Import sofort sichtbar; Hover-Popup, Fallback-Farbe, Zombie-Elemente behoben ✓ |
| v0.5.19 | Versionsnummer im Header aus APP_VERSION statt statisch — zeigt jetzt immer die richtige Version ✓ |
| v0.5.20 | Tag-Companion-Dots auf Stick-Overlay entfernt (versehentlich in v0.5.18 wieder eingeblendet) ✓ |
| v0.6.0 | Profil-Umschalter ✓ |
| v0.6.1 | Datenverlust-Fix (normalizeProfile) ✓ |
| v0.7.0 | Drucken ✓ |
| v0.7.1 | Druck-Fix: max-height 180mm ✓ |
| v0.7.2 | VKB NXT PREM Template (neues Bild, SC-Import-Fix) ✓ |
| v0.7.3 | VKB NXT PREM Bild: transparenter Hintergrund ✓ |
| v0.7.4 | VKB NXT PREM Bild: Flood-Fill-Bleed-Fix (Hell-Modus) ✓ |
| v0.7.5 | VKB NXT PREM LH: eigenes Template-Bild + korrekte Feldpositionen ✓ |
| v0.7.6 | VKB NXT PREM LH: Weiße Box-Fills transparent (Dunkel-Modus-Fix) ✓ |
| v0.7.7 | VKB NXT PREM LH: JPEG-Artefakte entlang roter Linien entfernt; Weiß-Boxen behalten ✓ |
| v0.7.8 | VKB NXT PREM LH: Alle Chroma-Artefakte restlos entfernt (nur Schwarz/Rot/Weiß behalten) ✓ |
| v0.7.9  | VKB NXT PREM LH: Joystick-Löcher behoben; zweistufiger Filter (max≤80 + dunkles Grau max<180 Sat<25%) ✓ |
| v0.7.10 | VKB NXT PREM RH: Feldpositionen korrigiert (Encoder +32px, 28/27/29 +7px), Throttle-Felder neu ✓ |
| v0.7.11 | VKB NXT PREM RH: 27 fehlende Felder ergänzt (Hat, X/Y/Z, Button 3, drei 5-Wege-Switches) ✓ |
| v0.7.12 | Author-Footer mit Avatar + GitHub-Link (Xharig-1); dezent gedimmt, beim Drucken ausgeblendet ✓ |
| v0.7.13 | Virpil Alpha L+R: Felder 30/31 S0 waren vertauscht (Koordinaten-Fix); L-Mapping-Duplikat entfernt ✓ |
| v0.7.14 | Hilfe-Tab: Drucken-Button ergänzt, Liste-Tab + VKB-Hinweis ergänzt, Tabs-Abschnitt aktualisiert; ROADMAP-Zielbild aktualisiert ✓ |
| v0.7.15 | README vollständig überarbeitet: Badges, Feature-Tabelle, Stick-Tabelle, Sicherheits- und Tester-Callout, Umlaute korrigiert ✓ |
| v0.7.16 | README: Screenshot der App eingebunden (`docs/screenshot.png`) ✓ |
| v0.7.17 | Kalibrieren: Drag-Fläche + Clipboard-Copy; Hilfe-Tab dokumentiert ✓ |
| v0.7.18 | Virpil Alpha L+R: Template-Bilder ersetzt (clean, 2× Auflösung) ✓ |
| v0.7.19 | Virpil Alpha L+R: Feldpositionen neu kalibriert (jimp-Auto-Erkennung); SC_BUTTON_IDS 1:1 (kein Remapping) ✓ |
| v0.7.20 | VKB NXT PREM L+R: Template-Bilder ersetzt (neue cleane 1600×800 Vorlagen); Feldpositionen neu kalibriert ✓ |
| v0.7.21 | Virpil Alpha L+R: Alle Felder starten leer (keine vorausgefüllten Beispielbelegungen) ✓ |
| v0.7.22 | Virpil Alpha L+R: Button-ID-Zahlen-Boxen ausgeblendet (showButtonIds: false) — Nummern auf Bild ✓ |
| v0.7.23 | Virpil Alpha L+R: Template-Bilder ersetzt (verifizierte Button-Nummern laut SC + Virpil-Software) ✓ |
| v0.7.24 | Virpil Alpha L+R: Hat-Gruppen 8–12 und 14–18 vertauscht behoben; Datenmigration (hatSwapV1Applied) ✓ |
| v0.7.25 | Umbenennen-Modus: „🔤 Umbenennen"-Button im Header; editierbare Feld-Labels + „📋 Mapping exportieren" ✓ |
| v0.7.26 | Virpil Alpha L+R: Alle Feldnamen korrekt (vollständige Umbenennung + Datenmigration fieldNamesV1Applied) ✓ |
| v0.7.27 | Header bereinigt: Entwickler-Werkzeuge aus dem normalen Interface entfernt ✓ |
| v0.7.28 | Umbenennen-Modus für alle Sticks verfügbar (nicht mehr nur Virpil Alpha) ✓ |
| v0.7.29 | VKB NXT PREM LH+RH: Button 11↔15 am 5-Wege-Switch 1 korrigiert + Datenmigration ✓ |
| v0.7.30 | Hilfe-Tab: Kalibrieren-Hinweis entfernt (Dev-Tool, nicht für Nutzer sichtbar) ✓ |
| v0.7.31 | Reset-Button leert jetzt auch Modus-Tags (Combat/Mining/Salvage) aller Felder beider Sticks ✓ |
| v0.7.32 | #dev: Store exportieren, Migrations-Flags zurücksetzen, Store leeren ✓ |
| v0.7.33 | Kritischer Bug: normalizeStore hat Migrations-Flags verworfen → Migrationen liefen bei jedem F5 erneut ✓ |
| v0.7.34 | Listen-Tab: Modus-Tags aus SC Import wurden nicht angezeigt (Feld-Tag-Fallback fehlte) ✓ |
| v0.7.35 | Listen-Tab: Modus-Tags nach Import sofort sichtbar ohne F5 (Liste wurde nur bei aktivem Tab aktualisiert) ✓ |
| v0.7.36 | SC Import: manuelle Seiten-Zuweisung bei unbekannten Stick-Namen (z. B. vJoy) per Dialog ✓ |
| v0.7.37 | „Was ist neu"-Popup + „🆕 Neuigkeiten"-Button + Versionshistorie im Hilfe-Tab ✓ |
| v0.7.38 | Versionshistorie als eigener Tab „📄 Versionen" statt im Hilfe-Tab ✓ |
