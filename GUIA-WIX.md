# Guia: montando o site da Tabaque no Wix (passo a passo)

**Meta:** loja no ar e vendendo a Coleção Halloween **até 20/10**, para ter 10 dias de venda antes do dia 31.

**O que tem nesta pasta:**

| Arquivo | Para que serve |
|---|---|
| `prototipo/index.html` | O desenho do site. Abra no navegador e use como referência visual para montar no Wix (e para mostrar ao Gabriel) |
| `conteudo/textos-do-site.md` | Todos os textos prontos para copiar e colar |
| `assets/produtos/*.jpg` | Fotos já recortadas para os produtos da loja |
| `assets/fotos/*.jpg` | Fotos originais convertidas de HEIC para JPG |
| `assets/grafismos/drip-*.svg` | A "borda escorrendo" para usar entre seções |
| `embeds/contagem-regressiva.html` | O contador até o Halloween, para colar no Wix |

> **Uma verdade importante sobre o Wix:** ele não importa um site pronto em código. A gente **remonta** o design dentro do editor, usando o protótipo como molde. Isso é bom: depois o Gabriel consegue mudar preço, foto e estoque sozinho, sem mexer em código.

---

## Cronograma sugerido (hoje: 07/10)

| Quando | O quê |
|---|---|
| 07 a 09/10 | Gabriel responde o briefing (bot). Criar a conta e o site, montar o Tema |
| 09 a 13/10 | Montar Home + página Halloween + cadastrar produtos |
| 13 a 15/10 | Pagamentos, frete, políticas, domínio. Fotos novas, se tiver |
| 16 a 17/10 | Celular, SEO, compra-teste de verdade |
| **18 a 20/10** | **Publicar** e anunciar no Instagram |
| Depois | Linhas Gatinho e Pássaros, página de personalizados |

---

## PASSO 1: Criar o site (15 min)

1. Entre em **wix.com** e faça login (de preferência com um e-mail da Tabaque, não o seu pessoal; depois você entra como colaboradora).
2. **Criar novo site** → tipo **Loja online** → quando perguntar, escolha **começar do zero / template em branco** (template de loja em branco). A gente não quer brigar com o design de um template pronto.
3. Editor: use o **Wix Editor** (o normal). O Wix Studio é mais poderoso, mas leva mais tempo para aprender e o prazo é curto.
4. Se o Wix perguntar sobre apps, garanta que o **Wix Stores (Loja)** está instalado. Ele cria sozinho as páginas: *Loja*, *Página do produto*, *Carrinho* e *Obrigado*.

> **Dica:** se você já tiver a conta da Tabaque no Wix, vá em *Configurações → Funções e permissões* e peça para o Gabriel te convidar como **Administradora**. Assim o site e o pagamento ficam no nome dele, e você edita.

---

## PASSO 2: Montar o Tema (cores e fontes) (20 min)

Fazer isso **antes** de qualquer página. Tudo que você colocar depois já sai com a cara da Tabaque.

No editor: **Design do site** (ícone de pincel no menu da esquerda) → **Cores do site** → *Personalizar*:

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Preto | `#0E0E0E` |
| Fundo alternativo / cards | Asfalto | `#1C1C1C` |
| Destaque, botões, preço | Laranja (a cor do filamento) | `#FF7A21` |
| Laranja escuro (hover) | | `#D9580A` |
| Texto claro / fundo claro | Osso | `#F2EDE4` |
| Texto secundário | Cinza | `#9A948C` |
| Acento "spray" (selos, faixas; usar pouco) | Limo | `#C6FF3D` |

**Design do site → Temas de texto:**

| Estilo | Fonte | Observação |
|---|---|---|
| Título 1 e 2 | **Anton** | sempre MAIÚSCULAS |
| Título 3 (a "tag" de grafite) | **Permanent Marker** | frases curtas em minúsculas, levemente inclinadas |
| Parágrafos | **Inter** (ou *Helvetica/Arial*, se não achar) | |

Se Anton ou Permanent Marker não aparecerem na lista: no seletor de fontes clique em **Fontes → Fazer upload de fontes** e suba os arquivos `.ttf`. Os dois são gratuitos no **fonts.google.com** (procure o nome → *Get font* → *Download*).

**Botões:** retangulares (raio 0), fundo laranja, texto preto em negrito, borda 3px. Para o efeito de "sombra deslocada" do protótipo: *Design do botão → Sombra*, distância 6, desfoque 0, cor `#F2EDE4`.

---

## PASSO 3: Cabeçalho e rodapé (30 min)

Eles aparecem em todas as páginas, então monte uma vez só.

**Cabeçalho** (veja o topo do protótipo):
1. Uma **faixa** laranja fina no topo com o texto da faixa de aviso (em `textos-do-site.md`). Se quiser o texto andando: *Adicionar → Texto → Texto em movimento (Marquee)*; se não achar, deixe o texto parado.
2. Abaixo, fundo preto: **logo** à esquerda (por enquanto o nome "Tabaque" em Permanent Marker; troque pela logo oficial quando o Gabriel mandar o PNG/SVG).
3. **Menu**: *Adicionar → Menu*. Itens: Halloween · Loja · Personalizado · Sobre · Dúvidas.
4. **Ícone do carrinho**: *Adicionar → Loja → Ícone do carrinho*.
5. Clique no cabeçalho → **Rolagem → Fixo** (ele fica grudado no topo).

**Rodapé**: 4 colunas igual ao protótipo (logo + frase / Loja / Ajuda / Siga) e embaixo a linha com CNPJ e "Produto para maiores de 18 anos".

**Botão do WhatsApp flutuante:** *Adicionar → Botão → ícone* (ou procure "WhatsApp" no App Market); link: `https://wa.me/55DDDNUMERO`. Clique com o botão direito → **Fixar na tela** → canto inferior direito.

---

## PASSO 4: Cadastrar os produtos (o coração da loja) (40 min)

No **Painel de controle** (fora do editor): **Catálogo → Produtos da loja → + Novo produto → Produto físico**.

Para a **Abóbora Derretida**, recomendo **1 produto com 2 opções** (o cliente escolhe o tamanho na mesma página):

1. **Imagens**: suba `abobora-grande.jpg`, `abobora-mini.jpg` e `abobora-dupla-quadrada.jpg`.
2. **Nome**: Abóbora Derretida
3. **Descrição**: cole de `textos-do-site.md`.
4. **Faixa (ribbon)**: `Edição limitada`
5. **Preço**: coloque o preço do tamanho mais barato.
6. **Opções do produto → + Adicionar opção**: nome `Tamanho`, valores `BIC Grande (Maxi)` e `BIC Mini`. Mostre como **lista suspensa** ou **botões**.
7. Ative **Gerenciar preço e estoque das variantes**: aí você põe um preço e uma **quantidade** diferente para cada tamanho.
8. **Estoque**: ative **Rastrear estoque** e coloque o número de peças da edição limitada. Quando zerar, o site mostra "Esgotado" sozinho, e isso cria escassez real.
9. **Informações de envio**: **peso** (ex.: 0,05 kg, mas pese uma peça embalada). Sem peso, o frete calculado não funciona.
10. **Categoria / Coleção**: crie a categoria **Halloween** e marque. (Crie também **Gatinho** e **Pássaros**, mesmo vazias.)
11. **Seções de informações extras**: adicione "Envio" e "Trocas" com os textos do arquivo.
12. **SEO** (fim da página do produto): título e descrição de `textos-do-site.md`.

Depois cadastre o **Combo Família Derretida** como outro produto, com faixa `Combo` e **Preço promocional** (o Wix mostra o preço cheio riscado).

> **Ainda não tem a peça pronta?** Em *Estoque*, ative **Pré-venda** (se aparecer na sua conta). O cliente paga agora e você avisa o prazo de envio.

> **Personalizado:** se o Gabriel quiser vender personalização direto pelo site, crie um produto "Case Personalizado" e ative **Campo de texto personalizado** (ex.: "Que nome ou texto você quer no case?"). Por enquanto o protótipo manda para o WhatsApp, que é mais simples para orçamento.

---

## PASSO 5: Montar as páginas no editor (2 a 4 h)

Abra `prototipo/index.html` ao lado do Wix e vá recriando **seção por seção**. No Wix: *Adicionar → Seção → Seção em branco*. Uma seção do Wix = um bloco do protótipo.

### Home (de cima pra baixo)
1. **Hero** (fundo `#0E0E0E`): texto "coleção halloween 2026" (Título 3), "DERRETEU." (Título 1, bem grande, laranja), parágrafo, 2 botões. À direita, a foto `abobora-grande.jpg` com borda clara de 4px e levemente girada (arraste a alça de girar até ~2°). O selo verde "Edição limitada": *Adicionar → Formas → círculo* + texto.
2. **Contador**: *Adicionar → Embed → Incorporar HTML* (pode aparecer como "Código HTML" / "Embed a widget"). Clique em **Inserir código**, cole tudo de `embeds/contagem-regressiva.html` e ajuste a caixa para mais ou menos 330 × 90 px.
3. **Borda escorrendo**: suba `assets/grafismos/drip-laranja.svg` em *Adicionar → Imagem → Fazer upload* (o Wix aceita SVG) e estique na largura total, colado no começo da seção laranja.
4. **Produtos Halloween** (fundo laranja `#FF7A21`): título "Abóbora Derretida" + texto + *Adicionar → Loja → Galeria de produtos* (ou "Grade"). Nas configurações da galeria escolha **Coleção/Categoria: Halloween**. Em **Design**, deixe o card com fundo preto, nome em Anton, preço laranja e o botão "Adicionar ao carrinho" visível.
5. **Por que Tabaque?** (fundo preto): título + 4 colunas (*Adicionar → Layout → Colunas / Repetidor*).
6. **Coleções** (fundo `#1C1C1C`): 3 caixas com imagem + rótulo, cada uma com **link para a categoria** correspondente da loja.
7. **Faz o seu.**: caixa com borda tracejada laranja + botão do WhatsApp (link em `textos-do-site.md`).
8. **Sobre** (fundo osso `#F2EDE4`, texto preto): foto + texto.
9. **Dúvidas**: *Adicionar → Listas/Interativo → Acordeão* (ou o app **Wix FAQ**) com as perguntas do arquivo.

### Página "Halloween" (landing do lançamento)
*Páginas → + Adicionar página*. Pode **duplicar a Home** e deixar só: Hero + contador + produtos + "por que" + FAQ. É essa página que vai no link da bio do Instagram e nos anúncios.

### Página "Loja"
Já foi criada pelo Wix Stores. Em *Configurações da galeria*, ative o **filtro por categoria** (Halloween / Gatinho / Pássaros) e aplique o mesmo design dos cards.

### Página do produto, Carrinho e Checkout
Clique na página do produto → **Configurações / Design** → ajuste fontes e cores para o tema (botão laranja, fundo escuro). No carrinho, ative **campo de cupom** e **nota para o vendedor**.

### Sobre e Dúvidas
Páginas simples com o texto completo, quando o briefing chegar.

---

## PASSO 6: Versão para celular (1 h, NÃO PULE)

A maioria da venda vai vir pelo Instagram, ou seja, pelo celular.
No topo do editor clique no **ícone de celular**. O Wix reorganiza tudo, mas sempre bagunça um pouco:
- Use o print mobile do protótipo como referência: tudo em **uma coluna**, foto do hero **abaixo** do texto.
- "DERRETEU." precisa caber numa linha (diminua a fonte só no celular).
- Botões com largura cheia.
- Esconda no celular o que não couber (clique → *ícone de olho → Ocultar*), em vez de espremer.

---

## PASSO 7: Plano Premium (obrigatório para vender)

O plano grátis **não** vende: não tem checkout, mostra anúncio do Wix e o endereço fica `usuario.wixsite.com/tabaque`.
- Vá em **Fazer upgrade** e escolha um plano de **e-commerce** (hoje se chama **Core** ou superior; os nomes mudam). Compare na página de planos qual libera "Aceitar pagamentos online".
- O **plano anual** costuma ser bem mais barato que o mensal e normalmente vem com **1 ano de domínio grátis**.
- Os preços são em dólar e convertidos; confira o valor do dia em **wix.com/plans** antes de passar para o Gabriel.

---

## PASSO 8: Pagamentos (Pix + cartão)

**Painel → Configurações → Aceitar pagamentos.** No Brasil as opções hoje são:

| Opção | Pix | Cartão parcelado | Observação |
|---|---|---|---|
| **Wix Pagamentos** | ✅ | ✅ | Nativo, mais fácil, tudo no painel do Wix. **Recomendado** |
| **Mercado Pago** | ✅ | ✅ | Bom se o Gabriel já usa Mercado Pago. Taxa a partir de ~3,99% |
| **PagBank (PagSeguro)** | ✅ | ✅ | Pix e carteira a ~0,99% |
| PayPal | ❌ | ✅ | Complemento opcional |

- Só dá para ter **um** provedor de cartão, mas você pode somar outros métodos.
- Quem preenche os dados bancários e CPF/CNPJ é o **Gabriel** (a conta tem que estar no nome dele).
- **Desconto no Pix:** a forma mais simples é um cupom (*Marketing → Cupons*, ex.: `PIX5`) ou deixar claro no texto. O Wix não dá desconto automático por forma de pagamento sem app extra.

---

## PASSO 9: Frete

**Painel → Configurações → Envio e entrega**:

1. Crie a **região Brasil**.
2. Escolha uma das opções:
   - **Mais rápido para lançar:** **frete fixo** (ex.: R$ 15 para o Brasil todo) + **frete grátis acima de R$ X** (ótimo para empurrar o Combo).
   - **Mais certo:** instale o app **Melhor Envio** (*App Market → "Melhor Envio"*). Ele calcula Correios/transportadoras no checkout com o CEP do cliente e gera as etiquetas mais baratas. Não tem mensalidade, só paga a etiqueta. Por isso o **peso** do Passo 4 importa.
3. Se o Gabriel entrega em mãos na cidade dele: ative **Retirada local** e/ou **Entrega local** (motoboy) com taxa fixa.

---

## PASSO 10: Políticas, aviso +18 e dados obrigatórios

- **Políticas** (trocas, envio, privacidade): *Configurações → Políticas* (ou nas configurações da loja). Use a base de `textos-do-site.md`. O Wix mostra os links no checkout.
- **Rodapé com razão social, CNPJ, endereço e contato:** é exigência legal para loja online no Brasil (Decreto 7.962/2013).
- **Aviso +18:** o case é acessório, mas a marca conversa com tabacaria. Recomendo pelo menos a frase no rodapé. Se o Gabriel quiser uma porta de entrada: *Adicionar → Interativo → Lightbox* com "Você tem 18 anos ou mais? [Sim] [Não]" aparecendo ao abrir o site. Atenção: atrapalha um pouco a conversão, então decida com ele.

---

## PASSO 11: Domínio

**Configurações → Domínios**:
- **Ainda não tem domínio:** use o domínio grátis do plano anual ou compre ali mesmo. Para `.com.br`, o mais comum é registrar no **registro.br** (~R$ 40/ano) no CPF/CNPJ do Gabriel e depois conectar.
- **Já tem (ex.: no registro.br):** *Conectar um domínio que você já tem* → o Wix mostra os **servidores DNS** (nameservers). No registro.br: *Domínio → Alterar servidores DNS* → cole os do Wix. Leva de algumas horas até 48 h para propagar, então **faça isso até o dia 15/10**.

---

## PASSO 12: SEO e compartilhamento

- **Painel → Marketing e SEO → Ferramentas de SEO**: siga o checklist (conecta ao Google).
- Em cada página: *Menu de páginas → ⋯ → Configurações de SEO*: título e descrição de `textos-do-site.md`.
- **Imagem de compartilhamento** (a que aparece quando mandam o link no WhatsApp): *Configurações da página → Redes sociais* → use uma foto da abóbora.
- **Favicon** (iconezinho da aba): *Configurações → Favicon*, com a logo em quadrado.

---

## PASSO 13: Testar ANTES de anunciar

1. Clique em **Visualizar**, desktop e celular. Clique em **todos** os botões e links.
2. Faça uma **compra real** de verdade (pode ser você ou o Gabriel) com **Pix** e com **cartão**, com um CEP de outro estado. Confira:
   - o frete calculou certo?
   - chegou o e-mail de confirmação para o cliente e para a loja?
   - o pedido apareceu em **Painel → Pedidos**?
   - o estoque baixou?
3. Cancele/reembolse o pedido de teste pelo painel.
4. Abra o site no celular de outra pessoa, de preferência pelo link no Instagram.

Tudo certo → **Publicar** (canto superior direito).

---

## PASSO 14: Entregar para o Gabriel (o dia a dia dele)

Mostre só isto para ele, no **app Wix** do celular (é onde ele vai viver):
- **Pedidos**: ver pedido novo, marcar como "enviado" e colar o código de rastreio (o cliente recebe e-mail automático).
- **Produtos**: mudar preço, foto e estoque, e ocultar produto esgotado.
- **Cupons**: criar cupom para influenciador/parceiro.
- **Notificações**: ativar o alerta de "novo pedido" no celular.

---

## O que ainda falta do briefing (precisa do Gabriel)

- [ ] Logo em PNG/SVG (fundo transparente)
- [ ] Preços: Grande, Mini, Combo; desconto no Pix?
- [ ] Quantas peças de cada (edição limitada)
- [ ] Material (PLA/PETG), se vem com isqueiro, prazo de produção
- [ ] Fotos das linhas Gatinho e Pássaros + nome/@ do tatuador
- [ ] História da marca e do nome
- [ ] CNPJ/razão social, endereço, e-mail, WhatsApp, @ do Instagram
- [ ] Domínio (já tem?)
- [ ] Cidade de envio / se faz entrega local
- [ ] Decisão sobre o aviso +18

## Dica de foto (pra ficar MUITO melhor)
As fotos atuais são boas para começar, mas o fundo de casa (mesa branca e plantas) não conversa com a vibe de rua. Para o lançamento, vale uma sessão rápida com o celular mesmo:
- **Muro pichado ou parede de tijolo** ao fundo, à noite, com a lanterna do celular de lado (sombra dura = clima de Halloween).
- **Mão segurando** o isqueiro com o case (mostra tamanho e escala).
- Uma foto em **fundo preto liso** para os cards da loja. Combina com o site e deixa o laranja explodir.
