import re, os

tag = os.environ['TAG']
repo = os.environ['REPO']

with open('CHANGELOG.md', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = rf'(## {re.escape(tag)}.*?)(?=\n## v|\Z)'
match = re.search(pattern, content, re.DOTALL)
changelog_section = match.group(1).strip() if match else '_Keine Details im CHANGELOG gefunden._'

notes = (
    f"## Joystick-Map {tag}\n\n"
    f"**Download:** `joystick-map-{tag}.html` - Einzeldatei, direkt im Browser oeffnen.\n"
    f"Kein Server, keine Installation, keine weiteren Dateien noetig.\n\n"
    f"---\n\n"
    f"{changelog_section}\n\n"
    f"---\n\n"
    f"Alle Aenderungen: [CHANGELOG.md](https://github.com/{repo}/blob/main/CHANGELOG.md)"
)

with open('release_notes.md', 'w', encoding='utf-8') as f:
    f.write(notes)
print('Release Notes erstellt.')
