import base64, re, os

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

for path in set(re.findall(r'assets/[^\s"\']+\.png', html)):
    if os.path.exists(path):
        with open(path, 'rb') as img:
            b64 = base64.b64encode(img.read()).decode('ascii')
        html = html.replace(path, f'data:image/png;base64,{b64}')
        print(f'Eingebettet: {path}')
    else:
        print(f'WARNUNG: {path} nicht gefunden')

tag = os.environ['TAG']
out = f'joystick-map-{tag}.html'
with open(out, 'w', encoding='utf-8') as f:
    f.write(html)
print(f'Erstellt: {out}')
