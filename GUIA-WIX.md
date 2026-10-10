# Guia: montando o site da Tabaque no Wix (passo a passo)

**Meta:** loja no ar e vendendo a Coleção Halloween **até 20/10**, para ter 10 dias de venda antes do dia 31.

**O que tem nesta pasta:**

| Arquivo | Para que serve |
|---|---|
| `prototipo/index.html` | O desenho da Home. Abra no navegador e use como referência visual para montar no Wix (e para mostrar ao Gabriel) |
| `prototipo/colecoes-especiais.html` | O desenho da página Coleções Especiais (collab com o João) |
| `conteudo/textos-do-site.md` | Todos os textos prontos para copiar e colar |
| `assets/produtos/*.jpg` | Fotos já recortadas para os produtos da loja |
| `assets/fotos/*.jpg` | Fotos originais convertidas de HEIC para JPG |
| `assets/grafismos/drip-mini.svg` | O risquinho "escorrendo" que vai acima dos títulos (detalhe pequeno) |
| `assets/grafismos/drip-laranja.svg` | Versão larga da borda escorrendo. Opcional; use com moderação |
| `embeds/contagem-regressiva.html` | O contador até o Halloween, para colar no Wix |

> **Uma verdade importante sobre o Wix:** ele não importa um site pronto em código. A gente **remonta** o design dentro do editor, usando o protótipo como molde. Isso é bom: depois o Gabriel consegue mudar preço, foto e estoque sozinho, sem mexer em código.

---

## Cronograma sugerido (hoje: 07/10)

| Quando | O quê |
|---|---|
| 07 a 09/10 | Gabriel responde o briefing (bot). Criar a conta e o site, montar o Tema |
| 09 a 13/10 | Montar Home + página Halloween + cadastrar produtos. Pedir ao João o material da collab |
| 13 a 15/10 | Pagamentos, frete, políticas, domínio. Fotos novas, se tiver |
| 16 a 17/10 | Celular, SEO, compra-teste de verdade |
| **18 a 20/10** | **Publicar** e anunciar no Instagram |
| 18 a 24/10 | Página **Coleções Especiais** com a collab do João (se o material chegar antes, entra já no lançamento) |
| Depois | Linha Gatinho, página de personalizados |

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
| Fundo principal | Branco | `#FFFFFF` |
| Fundo de seções alternadas, cards | Gelo | `#F6F4F1` |
| Linhas e bordas finas | Linha | `#E6E2DC` |
| Títulos e textos | Preto | `#111111` |
| Texto secundário | Cinza | `#6B6862` |
| **Destaque**: botão principal, selos, ponto final dos títulos | Laranja (a cor do filamento) | `#FF7A21` |
| Laranja para texto pequeno em fundo branco (as "tags") | Laranja escuro | `#C9560C` |

> **A regra do site:** o fundo é sempre branco ou gelo. Laranja e preto só aparecem como **destaque**: o botão principal, os selos, o ponto laranja no fim do título ("DERRETEU**.**"), a faixa de aviso no topo e **um único bloco preto** na Home (o da collab com o João). Se uma seção inteira ficar laranja ou preta, está pesado demais.
>
> As fotos de produto já têm fundo claro (mesa branca), então combinam naturalmente com o site branco.

**Design do site → Temas de texto:**

| Estilo | Fonte | Observação |
|---|---|---|
| Título 1 e 2 | **Anton** | sempre MAIÚSCULAS |
| Título 3 (a "tag" de grafite) | **Permanent Marker** | frases curtas em minúsculas, levemente inclinadas |
| Parágrafos | **Inter** (ou *Helvetica/Arial*, se não achar) | |

Se Anton ou Permanent Marker não aparecerem na lista: no seletor de fontes clique em **Fontes → Fazer upload de fontes** e suba os arquivos `.ttf`. Os dois são gratuitos no **fonts.google.com** (procure o nome → *Get font* → *Download*).

**Botões** (crie 2 estilos em *Design do site → Botões*):
- **Principal:** formato pílula (cantos totalmente arredondados), fundo laranja `#FF7A21`, texto preto em negrito e maiúsculo. Ao passar o mouse: fundo preto, texto branco. Use **um por seção**, no máximo.
- **Secundário:** pílula, fundo transparente, borda preta de 2px, texto preto. Ao passar o mouse: fundo preto. É o botão dos cards de produto e o "Ver a loja".
- Sem sombra.

---

## PASSO 3: Cabeçalho e rodapé (30 min)

Eles aparecem em todas as páginas, então monte uma vez só.

**Cabeçalho** (veja o topo do protótipo):
1. Uma **faixa preta fina** (uns 32 px) no topo com o texto da faixa de aviso (em `textos-do-site.md`), texto branco pequeno e a palavra "Halloween:" em laranja.
2. Abaixo, fundo **branco** com uma linha fina `#E6E2DC` embaixo: **logo** à esquerda (por enquanto o nome "Tabaque" em Permanent Marker; troque pela logo oficial quando o Gabriel mandar o PNG/SVG).
3. **Menu**: *Adicionar → Menu*. Itens: Halloween · Loja · **Coleções Especiais** · Personalizado · Sobre · Dúvidas. Deixe só o item "Coleções Especiais" com o texto em laranja escuro `#C9560C`, para chamar atenção (no Wix: clique no menu → *Design* → personalize o item, ou use um texto com link no lugar desse item).
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
10. **Categoria / Coleção**: crie a categoria **Halloween** e marque. (Crie também **Gatinho** e **Collab João**, mesmo vazias. A categoria **Collab João** é a que vai alimentar a página Coleções Especiais.)
11. **Seções de informações extras**: adicione "Envio" e "Trocas" com os textos do arquivo.
12. **SEO** (fim da página do produto): título e descrição de `textos-do-site.md`.

Depois cadastre o **Combo Família Derretida** como outro produto, com faixa `Combo` e **Preço promocional** (o Wix mostra o preço cheio riscado).

> **Ainda não tem a peça pronta?** Em *Estoque*, ative **Pré-venda** (se aparecer na sua conta). O cliente paga agora e você avisa o prazo de envio.

> **Personalizado:** se o Gabriel quiser vender personalização direto pelo site, crie um produto "Case Personalizado" e ative **Campo de texto personalizado** (ex.: "Que nome ou texto você quer no case?"). Por enquanto o protótipo manda para o WhatsApp, que é mais simples para orçamento.

---

## PASSO 5: Montar as páginas no editor (2 a 4 h)

Abra `prototipo/index.html` ao lado do Wix e vá recriando **seção por seção**. No Wix: *Adicionar → Seção → Seção em branco*. Uma seção do Wix = um bloco do protótipo.

### Home (de cima pra baixo)
1. **Hero** (fundo branco): texto "coleção halloween 2026" (Título 3, laranja escuro), "DERRETEU." (Título 1, bem grande, **preto**, só o ponto final em laranja: selecione o ponto e mude a cor), parágrafo em cinza, botão principal + botão secundário. À direita, a foto `abobora-grande.jpg` com cantos levemente arredondados (6 px), **sem borda e sem girar**. Selo "edição limitada": retângulo laranja pequeno, levemente inclinado, com o texto em Permanent Marker.
2. **Contador**: *Adicionar → Embed → Incorporar HTML* (pode aparecer como "Código HTML" / "Embed a widget"). Clique em **Inserir código**, cole tudo de `embeds/contagem-regressiva.html` e ajuste a caixa para mais ou menos 380 × 70 px. Coloque uma linha fina acima dele.
3. **Produtos Halloween** (fundo gelo `#F6F4F1`): um **risquinho escorrendo** pequeno acima do título (suba `assets/grafismos/drip-mini.svg` em *Adicionar → Imagem → Fazer upload*; o Wix aceita SVG), título "Abóbora Derretida" + texto + *Adicionar → Loja → Galeria de produtos* (ou "Grade"). Nas configurações da galeria escolha **Categoria: Halloween**. Em **Design**: card sem borda, foto com cantos de 6 px, nome em Inter negrito, preço preto, botão "Adicionar ao carrinho" no estilo **secundário** (contornado).
4. **Por que Tabaque?** (fundo branco): título + 4 colunas (*Adicionar → Layout → Colunas / Repetidor*). Só os números "01, 02..." em laranja.
5. **Coleções Especiais: destaque** (fundo branco, com uma **caixa preta** de cantos arredondados no meio): à esquerda "coleções especiais" (tag laranja), "TABAQUE × JOÃO" (branco, com o × laranja), texto curto e um botão contornado branco "Conhecer a collab", com link para a página **Coleções Especiais**. À direita, a foto da collab. **É o único bloco preto da Home**, e é isso que faz ele chamar atenção.
6. **Coleções** (fundo branco): 3 fotos com título embaixo (Halloween / Gatinho / Pássaros × João), cada uma com **link** para a categoria (a terceira vai para a página Coleções Especiais).
7. **Faz o seu.** (fundo branco): caixa com borda tracejada laranja + botão principal do WhatsApp (link em `textos-do-site.md`).
8. **Sobre** (fundo gelo `#F6F4F1`): foto + texto.
9. **Dúvidas** (fundo branco): *Adicionar → Listas/Interativo → Acordeão* (ou o app **Wix FAQ**) com as perguntas do arquivo.
10. **Rodapé** em fundo gelo, com textos pretos e cinza.

### Página "Halloween" (landing do lançamento)
*Páginas → + Adicionar página*. Pode **duplicar a Home** e deixar só: Hero + contador + produtos + "por que" + FAQ. É essa página que vai no link da bio do Instagram e nos anúncios.

### Página "Coleções Especiais" (collab com o João)
Referência: `prototipo/colecoes-especiais.html`. *Páginas → + Adicionar página → Em branco*, nome **Coleções Especiais** (o endereço fica `/colecoes-especiais`). Textos prontos em `textos-do-site.md`.
1. **Topo** (branco, tudo centralizado): tag "coleções especiais", título "TABAQUE × JOÃO" (× em laranja), texto de apresentação, e "coleção pássaros".
2. **A coleção** (fundo gelo): *Galeria de produtos* filtrada pela categoria **Collab João**. Faixa (ribbon) dos produtos: `Collab`.
3. **O artista** (branco): foto do João à esquerda; à direita bio, uma frase dele em destaque (Permanent Marker, com uma barrinha laranja à esquerda) e o link para o Instagram dele.
4. **Do papel pro 3D** (fundo gelo): 3 colunas: o desenho → a modelagem → a impressão. Se tiver fotos do processo (esboço, tela do 3D, impressora), coloque aqui. Isso valoriza muito a collab.
5. **Próximas collabs** (branco): *Adicionar → Formulário → Inscrição/Newsletter* (Wix Forms) com o campo de e-mail. Os contatos caem em **Painel → Contatos**, e dá para avisar todo mundo quando sair a próxima collab.

> Quando vier a próxima collab, é só duplicar as seções 1 a 4 nessa mesma página (a mais nova em cima) e criar uma categoria nova na loja. A aba vira o "arquivo" de todas as collabs da Tabaque.

### Página "Loja"
Já foi criada pelo Wix Stores. Em *Configurações da galeria*, ative o **filtro por categoria** (Halloween / Gatinho / Collab João) e aplique o mesmo design dos cards.

### Página do produto, Carrinho e Checkout
Clique na página do produto → **Configurações / Design** → ajuste fontes e cores para o tema (fundo branco, botão "Adicionar ao carrinho" laranja). No carrinho, ative **campo de cupom** e **nota para o vendedor**.

### Sobre e Dúvidas
Páginas simples com o texto completo, quando o briefing chegar.

---

## PASSO 6: Versão para celular (1 h, NÃO PULE)

A maioria da venda vai vir pelo Instagram, ou seja, pelo celular.
No topo do editor clique no **ícone de celular**. O Wix reorganiza tudo, mas sempre bagunça um pouco:
- Use o protótipo aberto no celular como referência: tudo em **uma coluna**, foto do hero **abaixo** do texto, e na caixa preta da collab a foto vai **embaixo** do texto.
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
- [ ] Fotos da linha Gatinho
- [ ] Collab com o João: fotos dos modelos, nomes e preços, @ do Instagram, mini bio, uma frase dele, como a collab surgiu, fotos do processo (esboço → 3D → impressão) e uma foto do João
- [ ] História da marca e do nome
- [ ] CNPJ/razão social, endereço, e-mail, WhatsApp, @ do Instagram
- [ ] Domínio (já tem?)
- [ ] Cidade de envio / se faz entrega local
- [ ] Decisão sobre o aviso +18

## Dica de foto (pra ficar MUITO melhor)
Com o site branco, as fotos atuais (mesa branca) já combinam bem. Para ficar ainda mais profissional, vale uma sessão rápida com o celular mesmo:
- **Fotos de loja (cards):** produto em fundo **branco ou bege bem claro**, luz de janela, sem planta nem móvel aparecendo. Todas no mesmo enquadramento (vertical 4:5), para a grade ficar alinhada.
- **Fotos de clima (hero, coleções, redes):** aqui entra a rua: **muro pichado**, mão segurando o isqueiro, foto à noite com a lanterna do celular de lado. Elas trazem a vibe de grafite sem pesar o site.
- **Collab do João:** foto dele no estúdio + o desenho original em papel ao lado do case pronto.
