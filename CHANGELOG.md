# Changelog

Alle wichtigen Änderungen an diesem Projekt werden hier dokumentiert.

Das Projekt nutzt SemVer: `MAJOR.MINOR.PATCH`.

## v0.5.16 - 2026-05-23

### Verbessert

- SC-Import: Parser erkennt jetzt auch `rotz`-Achse und Hat-Inputs (`hat1_up/down/left/right`) aus der XML.
- SC-Import: VKB-Achsen `twist` → `rotz`, `throttle` → `z`, `A1(x)` → `rotx`, `A1(y)` → `roty` werden jetzt korrekt befüllt.

## v0.5.15 - 2026-05-23

### Behoben

- SC-Import: VKB-Sticks wurden nicht erkannt, weil der Produktname ` L ` / ` R ` statt `LEFT` / `RIGHT` enthält. Regex in `parseActionmaps()` um `| L |` und `| R |` erweitert — VKB Gladiator (und ähnliche Sticks) importieren jetzt korrekt.

## v0.5.14 - 2026-05-23

### Hinzugefügt

- SC-Import: Modus-Tags werden nach dem Import automatisch gesetzt, basierend auf der Aktionskategorie in der `actionmaps.xml` (z.B. `ship_weapons` → Combat, `ship_mining` → Mining, `ship_salvage` → Salvage). Der User muss nur noch Ausnahmen manuell anpassen.

## v0.5.13 - 2026-05-23

### Behoben

- Virpil Alpha R: Eingabe-Boxen waren durch `largeArea=1` in v0.5.1 fälschlich transparent gemacht worden. Template-PNG auf Stand v0.4.15 (largeArea=50000) zurückgesetzt — Boxen sind wieder weiß.

## v0.5.12 - 2026-05-23

### Dokumentation

- README.md auf v0.5.x aktualisiert: Belegungsliste, Modus-Tags, Farb-Streifen und Filter-Bar beschrieben.
- ROADMAP.md: Phase-5-Duplikat entfernt, Versionstabelle um v0.5.1–v0.5.11 ergänzt.
- Hilfe-Tab: Zeilen-Tags-Eintrag korrigiert — beschreibt jetzt den Listen-Tab statt des veralteten Popup-Systems.

## v0.5.11 - 2026-05-23

### Behoben

- Listen-Tab: Farb-Streifen auf dem Stick-Overlay aktualisiert sich jetzt sofort nach einem Klick auf C/M/S — kein Reload mehr nötig.

## v0.5.10 - 2026-05-23

### Geändert

- Stick-Overlay: Farbige Punkte (Tag-Companion-Dots) entfernt — Modus-Tags werden jetzt ausschließlich über den Listen-Tab gesetzt.
- Farb-Streifen links vom Feld bleibt als rein visuelle Anzeige erhalten, ist aber nicht mehr anklickbar.

## v0.5.9 - 2026-05-23

### Hinzugefügt

- Listen-Tab: Button „↺ Modus zurücksetzen" oben rechts löscht alle Feld- und Zeilen-Modus-Tags der aktuell angezeigten Seite (L oder R) nach Bestätigung.

## v0.5.8 - 2026-05-23

### Hinzugefügt

- Neuer Tab „📋 Liste": Zeigt alle Button-Belegungen eines Sticks als strukturierte Tabelle — ähnlich dem Tastatur/Maus-Tab. Jede Zeile eines Feldes erscheint als eigene Tabellenzeile mit direkt anklickbaren C/M/S-Modus-Buttons. Multi-line Felder werden mit rowspan zusammengefasst.
- Seiten-Umschalter im Listen-Tab: Alpha L (Links) / Alpha R (Rechts) direkt im Panel.
- Änderungen in der Liste werden sofort im Overlay-Feld synchronisiert und umgekehrt.
- Filter-Bar „Mining/Combat/Salvage" blendet nicht passende Zeilen auch in der Liste aus.

## v0.5.7 - 2026-05-23

### Dokumentation

- Hilfe-Tab: Zeilen-Tags erklärt — Farb-Streifen links vom Feld, Klick auf Segment, Mini-Popup mit C/M/S-Buttons pro Zeile.

## v0.5.6 - 2026-05-23

### Behoben

- Farb-Streifen (Zeilen-Tags): 120 ms Verzögerung beim Ausblenden verhindert, dass der Streifen verschwindet, bevor die Maus von der Textbox dorthin wechseln kann (2 px Lücke).

## v0.5.5 - 2026-05-23

### Hinzugefügt

- Zeilen-Modus-Tags: Einzelne Zeilen innerhalb eines Textfeldes können jetzt unabhängig mit Combat, Mining oder Salvage getaggt werden.
- Farb-Streifen links vom Feld: Ein 5 px breiter senkrechter Balken zeigt pro Zeile die zugewiesene Modus-Farbe. Erscheint automatisch bei getaggten Zeilen, sonst erst beim Hover.
- Klick auf ein Segment öffnet ein Mini-Popup mit den drei Modus-Buttons für genau diese Zeile.
- Standard-Zeilen-Tags für Virpil Alpha L (Felder 21, 23, 24) und Alpha R (Felder 3, 4, 15, 22, 23, 24, 25) werden beim ersten Start automatisch eingetragen.
- Der Tag-Companion (Dots unten links) zeigt jetzt die Vereinigung aller Zeilen-Tags und Feld-Tags an.
- Filter-Bar berücksichtigt Zeilen-Tags bei der Sichtbarkeitsberechnung.

## v0.5.4 - 2026-05-23

### Verbessert

- Modus-Tag-Punkte auf den Stick-Vorlagen: Größe von 5 px auf 9 px erhöht, dunkler Hintergrund und leichter Schatten hinzugefügt — deutlich besser erkennbar auf dem Template-Bild.

## v0.5.3 - 2026-05-23

### Hinzugefügt

- Virpil Alpha L und R: Standard-Modus-Tags werden beim ersten Start automatisch gesetzt — Combat, Mining und Salvage werden anhand der vorhandenen Feldbelegung erkannt und einmalig eingetragen. Eigene Tags werden dabei nicht überschrieben.

## v0.5.2 - 2026-05-23

### Dokumentation

- Hilfe-Tab: Neuer Abschnitt „Modus-Tags" erklärt Farben, Tagging per Hover-Popup (Stick-Vorlagen), Toggle-Buttons (Tastatur/Maus-Tab) und die Filter-Bar.

## v0.5.1 - 2026-05-23

### Behoben

- Virpil Alpha R: Weißer Hintergrund in eingeschlossenen Bereichen (umrahmt von roten Linien) entfernt — `largeArea`-Schwellwert in `remove-bg.mjs` von 50000 auf 1 gesenkt, analog zur VKB-SCG-Korrektur.

## v0.5.0 - 2026-05-23

### Hinzugefügt

- Modus-Tags: Jedes Joystick-Feld kann jetzt mit einem oder mehreren Spielmodi getaggt werden — Combat (rot), Mining (amber), Salvage (blau).
- Auf Stick-Vorlagen: Hover über ein Feld zeigt einen klickbaren Tag-Companion (●-Punkte). Klick öffnet ein Popup mit Checkboxen zum An-/Abschalten der Modi.
- Auf Tastatur- und Maus-Tabs: Neue Spalte „Modus" mit drei farbigen Kreis-Buttons pro Zeile — direktes Toggling ohne Popup.
- Modus-Filter-Bar unterhalb der Tabs: Buttons „Alle / Combat / Mining / Salvage" blenden alle nicht zugeordneten Felder aus, wenn ein Modus aktiv ist.
- Tags werden zusammen mit dem Profil im Browser gespeichert und bleiben nach Neustart erhalten.

## v0.4.22 - 2026-05-23

### Verbessert

- Update-Check: wenn der Browser den Zugriff auf die GitHub-API blockiert (z. B. Firefox bei `file://`-Seiten oder Firewall), erscheint jetzt „kein Zugriff" mit einem direkten Link zu den GitHub-Releases statt dem irreführenden „offline".

## v0.4.21 - 2026-05-23

### Verbessert

- Update-Check: "offline" erscheint jetzt nur noch bei echtem Netzwerkfehler. GitHub Rate-Limit (HTTP 403/429) zeigt „Rate-Limit (später erneut laden)", andere HTTP-Fehler zeigen den Statuscode — hilft bei der Diagnose wenn der Check nicht funktioniert.

## v0.4.20 - 2026-05-23

### Behoben

- GitHub-Actions-Workflow repariert: Python-Skripte aus dem YAML-Heredoc in separate Dateien (`.github/scripts/`) ausgelagert — alle Workflow-Runs seit v0.4.14 schlugen lautlos fehl (0 Jobs), neue GitHub-Releases wurden nicht erstellt, Update-Check zeigte immer „offline".

## v0.4.19 - 2026-05-23

### Geändert

- SC Live-Version wird jetzt im Header neben der App-Version angezeigt (statt im Virpil-Untertitelfeld), sichtbar bei jedem Stick.
- Virpil-Untertitelfeld: Standardwert auf „Star Citizen" gekürzt, Versionsauto-Fill entfernt.
- Neues Badge `.sc-version-badge` mit dezenter Farbe (neutral, nicht grün).

## v0.4.18 - 2026-05-23

### Hinzugefügt

- SC-Live-Version wird beim Laden automatisch von der Star Citizen Wiki API abgerufen (`api.star-citizen.wiki/api/v2/game-versions`) und ins Untertitelfeld eingetragen.
- Nur überschrieben wenn das Feld noch „Star Citizen …" enthält — eigene Texte bleiben erhalten.
- Bei offline oder API-Fehler bleibt der bisherige Wert unverändert.

## v0.4.17 - 2026-05-23

### Geändert

- Virpil-Templates: Titel- und Untertitelfeld haben jetzt immer weißen Hintergrund (`background: #ffffff`) — war nach PNG-Transparenz-Verarbeitung dunkel im Dark-Mode.

## v0.4.16 - 2026-05-23

### Geändert

- VKB-Gladiator-SCG-Templates: eingeschlossene weiße Boxen (von Verbindungslinien umrahmte Innenfelder) nun ebenfalls transparent — `largeArea`-Schwellwert in `remove-bg.mjs` von 200 auf 1 gesenkt.

## v0.4.15 - 2026-05-23

### Geändert

- Weißer Hintergrund aller Template-PNGs entfernt (Flood-Fill von den Bildkanten).
- Eingabefeld-Bereiche bleiben weiß — nur der äußere Seitenrand wird transparent.
- Funktioniert in Dark- und Light-Modus ohne sichtbare Ränder.

## v0.4.14 - 2026-05-23

### Hinzugefügt

- Hell/Dunkel-Umschalter im Header (☀ / ☾).
- Hell-Modus mit grün getöntem Hintergrund, dunkler Text, Xharig-Grün als Akzentfarbe.
- Gewählter Modus wird im Browser gespeichert und beim nächsten Start wiederhergestellt.

## v0.4.13 - 2026-05-23

### Geändert

- VKB-Vorlage auf VKB Gladiator SCG (LH/RH) umgestellt.
- Korrekte Template-PNGs aus den offiziellen PDF-Vorlagen erzeugt (1649×1274 px).
- Alle 40 Eingabefelder exakt auf die Eingabeboxen des PDF-Layouts ausgerichtet (koordinaten via pdfjs aus dem PDF extrahiert).
- Gerätekey von `vkb-gladiator-nxt` auf `vkb-gladiator-scg` umbenannt.
- Feldnamen jetzt nach VKB-SCG-Schema: B1, A1–A4, C1, D1, F1–F3, RF, MT, Sw1, En1.

## v0.4.12 - 2026-05-22

### Hinzugefügt

- VKB Gladiator NXT EVO als zweite Joystick-Vorlage ergänzt (L und R).
- Felder für alle 29 Buttons, Encoder 1/2, 8-Way-Mode und Achsen (Throttle, X/Y, Z/Twist).

## v0.4.11 - 2026-05-22

### Entfernt

- Tab `Standard Tastatur` vollständig entfernt (Layout-Entwurf, CSS, JS-Konstanten und Hilfsfunktionen).

## v0.4.10 - 2026-05-22

### Geändert

- Standard-Tastatur breiter dargestellt und Schrift eine Stufe groesser gemacht.
- Tastaturreihen naeher an ein echtes deutsches Tastaturlayout angepasst.
- Sondertasten wie Backspace, Enter, Shift und Space breiter dargestellt.

## v0.4.9 - 2026-05-21

### Hinzugefügt

- Neuen Tab `Standard Tastatur` als ersten visuellen Entwurf ergänzt.
- Tastaturansicht wird aus der hinterlegten Standardbelegung erzeugt und nutzt kein fremdes Bild.

## v0.4.8 - 2026-05-21

### Hinzugefügt

- Versionsnummer als gut sichtbare Badge im Header ergänzt.
- Statusleisten-Version bleibt als technische Zusatzinfo erhalten.

## v0.4.7 - 2026-05-21

### Geändert

- Titel `Constellation Alpha L/R` in den Vorlagen vertikal besser im Kasten zentriert.
- Unterzeile mit `Star Citizen` und Versionsnummer groesser und besser lesbar gemacht.

## v0.4.6 - 2026-05-21

### Geändert

- Stick-Auswahl im Header von einem Browser-Standardfeld auf ein eigenes Dropdown umgestellt.
- Aktuell ausgewähltes Gerät und Hover-Zeile sind jetzt optisch getrennt, damit die Markierung nicht auf der falschen Zeile wirkt.

## v0.4.5 - 2026-05-21

### Hinzugefügt

- Standardbelegung fuer Tastatur und Maus aus Xharigs HOTFIX `Profiles\default\actionmaps.xml` hinterlegt.
- Die Tabellenansicht fuer Tastatur und Maus ist jetzt ohne Import vorbefuellt.
- Eigene Star-Citizen-Importe ueberschreiben diese Standardwerte pro Profil.

## v0.4.4 - 2026-05-21

### Geändert

- Hilfe ergänzt: Der Button `⬇ SC Import` steht jetzt auch im Abschnitt `Buttons im Header`.

## v0.4.3 - 2026-05-21

### Hinzugefügt

- Update-Check beim Start: Joystick-Map prüft das neueste GitHub-Release und zeigt bei neuer Version einen Download-Link zur `.html`-Datei an.
- Wenn der Update-Check nicht erreichbar ist, bleibt die App normal nutzbar und zeigt nur `offline` in der Statusleiste.

## v0.4.2 - 2026-05-21

### Geändert

- Hilfe/README korrigiert: Joystick/HOTAS-Importdateien liegen bei LIVE und HOTFIX unter `user\client\0\controls\mappings`, nicht unter `Profiles\default`.

## v0.4.1 - 2026-05-21

### Geändert

- Hilfe/README ergänzt: Hinweis auf den Profilordner `StarCitizen\LIVE\user\client\0\Profiles\default`, in dem die aktuelle `actionmaps.xml` liegt.

## v0.4.0 - 2026-05-21

### Hinzugefügt

- Geräte-Auswahl um `Tastatur & Maus` erweitert.
- Neue Tabs `Tastatur` und `Maus` als Tabellenansicht.
- Star-Citizen-Import erkennt jetzt auch Tastatur- und Mausbelegungen aus `kb...` und `mouse...` Eingaben.
- Importierte Tastatur-/Mausbelegungen werden im Browser gespeichert und im Changelog erfasst.

## v0.3.7 - 2026-05-21

### Geändert

- Hilfe-Tab ergänzt: Star-Citizen-Mappingdateien können je nach aktivem Spielkanal unter `LIVE` oder `HOTFIX` liegen.
- README um Export-Befehl und Standardpfade für `controls\mappings` erweitert.

## v0.3.6 - 2026-05-21

### Geändert

- Star-Citizen-Import korrigiert: Felder werden anhand der SC-internen Eingaben befüllt, nicht anhand der sichtbaren Virpil-Vorlagennummern.
- Button-ID-Felder sind jetzt reine Anzeige und nicht mehr editierbar.
- Achsenimport ergänzt: `rX`, `rY`, `X`, `Y` und `Z` werden aus `rotx`, `roty`, `x`, `y` und `z` erkannt.
- Standardbeschriftungen für Alpha L/R aus Xharigs aktueller `actionmaps.xml` übernommen.
- Star-Citizen-Unterzeile auf `v4.8.0-live` aktualisiert.

## v0.3.5 - 2026-05-21

### Hinzugefügt

- Star Citizen Import: Schaltfläche „⬇ SC Import" im Header lädt eine `actionmaps.xml` aus dem Spiel.
- Linker und rechter Joystick werden anhand des Gerätenamens (LEFT / RIGHT) automatisch erkannt.
- Über 90 SC-Aktionen werden ins Deutsche übersetzt (Bergbau, Bergung, Waffen, Navigation, Scan usw.).
- Gesperrte Felder werden beim Import übersprungen.
- Hilfe-Tab erklärt den Import-Vorgang mit Pfadangabe.

## v0.3.4 - 2026-05-21

### Hinzugefügt

- Felder sperren: beim Hover über ein Feld erscheint ein 🔓-Symbol — Klick sperrt das Feld vor dem Reset.
- Gesperrte Felder zeigen dauerhaft 🔒 und einen grünen Rahmen.
- Reset überspringt gesperrte Felder und nennt deren Anzahl im Bestätigungsdialog.
- Sperrstatus wird pro Profil im localStorage gespeichert.
- Hilfe-Tab um Abschnitt „Felder sperren" erweitert.

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
