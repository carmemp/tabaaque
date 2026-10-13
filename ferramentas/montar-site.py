"""Monta a versão "publicável" do site a partir de prototipo/.

Cada página sai AUTOCONTIDA: estilo, script e fotos ficam dentro do próprio .html
(fotos em base64, já otimizadas). Assim a página abre com imagens de qualquer lugar:
direto do zip, enviada sozinha por WhatsApp/e-mail, ou subida numa hospedagem.

Uso:  python3 ferramentas/montar-site.py
Saída: entrega/site/*.html  e  entrega/tabaqu3-site.zip
"""
import base64
import io
import re
import shutil
import zipfile
from pathlib import Path

from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
ORIGEM = RAIZ / "prototipo"
SAIDA = RAIZ / "entrega"
SITE = SAIDA / "site"
PAGINAS = ["index", "colecoes-especiais", "personalize", "parcerias", "sobre"]
LADO_MAX = 1000  # px: suficiente para tela retina nos tamanhos usados no site

_cache = {}


def imagem_base64(caminho: Path) -> str:
    if caminho not in _cache:
        im = Image.open(caminho).convert("RGB")
        im.thumbnail((LADO_MAX, LADO_MAX))
        buf = io.BytesIO()
        im.save(buf, "JPEG", quality=80, optimize=True, progressive=True)
        _cache[caminho] = "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()
    return _cache[caminho]


def montar_pagina(nome: str, css: str, js: str) -> str:
    html = (ORIGEM / f"{nome}.html").read_text(encoding="utf-8")
    html = html.replace('<link rel="stylesheet" href="estilo.css">', f"<style>\n{css}\n</style>")
    html = html.replace('<script src="partes.js"></script>', f"<script>\n{js}\n</script>")

    def trocar(m):
        arq = (ORIGEM / m.group(1)).resolve()
        if not arq.is_file():
            raise SystemExit(f"Imagem não encontrada em {nome}.html: {m.group(1)}")
        return f'src="{imagem_base64(arq)}"'

    html = re.sub(r'src="(\.\./assets/[^"]+\.(?:jpg|jpeg|png))"', trocar, html)
    # notas internas que não devem ir para o site publicado
    html = html.replace(' [no Wix: "Restam X" vem do estoque]', "")
    if "../assets/" in html or 'href="estilo.css"' in html or 'src="partes.js"' in html:
        raise SystemExit(f"{nome}.html ainda depende de arquivo externo")
    return html


def main():
    css = (ORIGEM / "estilo.css").read_text(encoding="utf-8")
    js = (ORIGEM / "partes.js").read_text(encoding="utf-8")
    js = js.replace(" +\n    '<div class=\"nota\">Protótipo: referência para montar no Wix</div>';", ";")

    if SITE.exists():
        shutil.rmtree(SITE)
    SITE.mkdir(parents=True)
    for nome in PAGINAS:
        destino = SITE / f"{nome}.html"
        destino.write_text(montar_pagina(nome, css, js), encoding="utf-8")
        print(f"{destino.relative_to(RAIZ)}  {destino.stat().st_size // 1024} KB")

    zip_path = SAIDA / "tabaqu3-site.zip"
    with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as z:
        z.writestr("tabaqu3/LEIA-ME.txt", (RAIZ / "ferramentas" / "LEIA-ME.txt").read_text(encoding="utf-8"))
        for f in sorted(SITE.iterdir()):
            z.write(f, f"tabaqu3/site/{f.name}")
        z.write(RAIZ / "GUIA-WIX.md", "tabaqu3/wix/GUIA-WIX.md")
        for pasta in ["conteudo", "embeds", "briefing"]:
            for f in sorted((RAIZ / pasta).rglob("*")):
                if f.is_file():
                    z.write(f, f"tabaqu3/wix/{f.relative_to(RAIZ)}")
        for f in sorted((RAIZ / "assets").rglob("*")):
            if f.is_file():
                z.write(f, f"tabaqu3/wix/imagens-para-upload/{f.relative_to(RAIZ / 'assets')}")
    print(f"{zip_path.relative_to(RAIZ)}  {zip_path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
