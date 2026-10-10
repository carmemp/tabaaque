# Guia: montando o site da Tabaqu3 no Wix (passo a passo)

**Meta:** loja no ar em **tabaqu3.com.br** vendendo a Coleção Halloween **até 20/10**, para ter uns 10 dias de venda antes do dia 31.

**O que tem nesta pasta:**

| Arquivo | Para que serve |
|---|---|
| `prototipo/index.html` | Desenho da **Home**. Abra no navegador e use como molde para montar no Wix |
| `prototipo/colecoes-especiais.html` | Página **Coleções Especiais** (collab com o João Morais) |
| `prototipo/personalize.html` | Página **Personalize** (formulário + pagamento) |
| `prototipo/parcerias.html` | Página **Parcerias** (tabacarias, estúdios e artistas) |
| `prototipo/sobre.html` | Página **Sobre** (a história do nome e da marca) |
| `conteudo/textos-do-site.md` | Todos os textos prontos para copiar e colar |
| `briefing/briefing-gabriel.md` | As respostas do Gabriel (fonte de tudo) |
| `assets/produtos/*.jpg` | Fotos já recortadas para os produtos da loja |
| `assets/fotos/*.jpg` | Fotos originais convertidas de HEIC para JPG |
| `assets/grafismos/drip-mini.svg` | Risquinho "escorrendo", detalhe opcional |
| `embeds/contagem-regressiva.html` | Contador até o Halloween (opcional) |

> **Sobre o Wix:** ele não importa um site pronto em código. A gente **remonta** o design dentro do editor, usando o protótipo como molde. A vantagem: depois o Gabriel muda preço, foto e estoque sozinho, pelo app do Wix no celular.

> **Para abrir o protótipo sem a pergunta de +18 toda hora:** adicione `?sem18` no fim do endereço (ex.: `index.html?sem18`).

---

## ⚠️ Antes de tudo: o orçamento

O Gabriel disse **até R$ 60/mês**. O Wix cobra em dólar, e o plano mais barato que **vende com carrinho e pagamento online** (hoje chamado **Core**) fica em torno de **US$ 29/mês no plano anual**, o que dá **bem mais que R$ 60** com o câmbio e os impostos. Os planos mais baratos (Light) não têm loja com checkout.

Opções para levar ao Gabriel:
1. **Aumentar o orçamento e ir de Core anual** (recomendado): loja completa, Pix e cartão, frete automático e domínio grátis no 1º ano. É o que o briefing pede ("automatizar frete, envio e pagamentos").
2. **Ficar no limite de R$ 60:** o Wix não atende. As alternativas seriam plataformas com plano grátis e taxa por venda (ex.: Nuvemshop grátis), mas aí sai do Wix, que foi o pedido do cliente.

**Confira o preço do dia em wix.com/plans** antes de passar o número pra ele. Dá para montar tudo no plano grátis e só pagar na hora de publicar.

---

## Cronograma sugerido

| Quando | O quê |
|---|---|
| 10 a 11/10 | Gabriel decide o plano. Pedir a logo T3, as fotos do celular e o material do João. Criar o site e montar o Tema |
| 11 a 14/10 | Montar Home + cadastrar os produtos do Halloween + porta +18 |
| 14 a 16/10 | Pagamentos, frete (BH + Brasil), "Leve 2", políticas, domínio tabaqu3.com.br |
| 16 a 18/10 | Páginas Personalize, Sobre e Parcerias. Celular, SEO, compra-teste |
| **18 a 20/10** | **Publicar** e anunciar no @tabaqu3_ |
| 20 a 25/10 | Coleções Especiais (collab João Morais), quando o material chegar |

---

## PASSO 1: Criar o site (15 min)

1. Entre em **wix.com**. O ideal é a conta ficar **no e-mail do Gabriel** e ele te convidar como **Administradora** (*Configurações → Funções e permissões*). Assim o pagamento e o dinheiro ficam no nome dele.
2. **Criar novo site** → **Loja online** → comece por um **template de loja em branco**.
3. Use o **Wix Editor** (o normal). O Wix Studio é mais complexo e o prazo é curto.
4. Garanta que o app **Wix Stores (Loja)** está instalado. Ele cria sozinho as páginas *Loja*, *Página do produto*, *Carrinho* e *Obrigado*.

---

## PASSO 2: Tema: cores e fontes (20 min)

Faça **antes** de qualquer página. No editor: **Design do site** (pincel) → **Cores do site**:

| Uso | Cor | Hex |
|---|---|---|
| Fundo principal | Branco | `#FFFFFF` |
| Seções alternadas | Gelo | `#F5F4F2` |
| Linhas finas | | `#E5E2DD` |
| Títulos e textos | Preto | `#111111` |
| Texto secundário | Cinza | `#66635E` |
| **Halloween**, botão de compra | Laranja | `#FF6A13` |
| **Personalize** | Azul | `#2F5BFF` |
| **Collabs / Coleções Especiais** | Verde | `#13A86B` |
| **Parcerias** | Amarelo | `#FFC61A` |
| **Promoções e avisos** ("Leve 2") | Vermelho | `#EE3124` |

> **A regra do site:** o fundo é sempre **branco ou gelo**. As cores de grafite do Gabriel (laranja, azul, verde, amarelo, vermelho) entram só como **destaque**, e **cada área tem a sua cor**. Assim o site fica clean, mas colorido e com cara de grafite.
>
> O "grafite" aparece nos **adesivos**: etiquetas coloridas, pequenas e levemente tortas, como sticker colado em parede. Nada de letra de pichação (o Gabriel quer "underground clean").

**Temas de texto:**

| Estilo | Fonte |
|---|---|
| Título 1 e 2 | **Anton**, sempre MAIÚSCULAS |
| Parágrafos, menu, botões | **Inter** (ou Helvetica/Arial) |

Se Anton não aparecer: no seletor de fontes → **Fazer upload de fontes** → suba o `.ttf` baixado grátis em fonts.google.com.

**Botões** (*Design do site → Botões*), todos em formato pílula, texto maiúsculo em negrito:
- **Principal:** fundo preto, texto branco. Ao passar o mouse, fica laranja.
- **Compra (Halloween):** fundo laranja `#FF6A13`, texto preto.
- **Secundário:** transparente, borda preta de 2 px.

**Como fazer um "adesivo" no Wix:** *Adicionar → Texto* → escreva em maiúsculas, Inter extra-negrito, tamanho 11–12, espaçamento entre letras alto → *Design do texto → Cor de fundo* (ou coloque uma *Forma → retângulo* atrás) → gire **-2°**. Depois de pronto, **clique com o botão direito → Salvar em "Meus elementos"**, para reaproveitar nas outras cores.

---

## PASSO 3: Cabeçalho, rodapé e porta +18 (45 min)

Montados uma vez, aparecem no site inteiro.

**Faixa de aviso** (topo, preta, 32 px): texto em `textos-do-site.md`.

**Cabeçalho** (branco, linha fina embaixo, **Rolagem → Fixo**):
1. **Logo T3** à esquerda + "TABAQU3" em Anton. ⚠️ O SVG atual é conversão automática do PNG, então pode vir com borda serrilhada. Se ficar feio, use o **PNG em alta** por enquanto e anote que precisa redesenhar o vetor.
2. **Menu:** Halloween (em laranja) · Loja · Coleções Especiais · Personalize · Parcerias · Sobre.
3. **Ícone do carrinho:** *Adicionar → Loja → Ícone do carrinho*.

**Rodapé** (fundo gelo): 4 colunas (logo + frase / Loja / Ajuda / Tabaqu3). Embaixo: razão social, **CNPJ**, endereço/BH, e "Site e produtos destinados a maiores de 18 anos". ⚖️ Razão social, CNPJ, endereço e contato são **obrigatórios** em loja online (Decreto 7.962/2013).

**WhatsApp flutuante:** botão com ícone, link `https://wa.me/5531XXXXXXXXX` → botão direito → **Fixar na tela** → canto inferior direito.

**Porta +18** (o briefing pede comunicação restrita a +18):
1. *Adicionar → Interativo → **Lightbox*** → layout em branco.
2. Conteúdo: logo T3, "VOCÊ TEM 18 ANOS OU MAIS?", texto curto, botão **"Sim, tenho 18+"** (configure para **fechar a lightbox**) e botão **"Não"** (link para google.com).
3. *Configurações da lightbox → Exibir automaticamente*: **sim**, em **todas as páginas**, ao carregar.
4. Desative **fechar ao clicar fora** e o **X**, para a pessoa ter que responder.

> O Wix não tem um "lembrar que já respondeu" nativo na lightbox. Se for chato aparecer em toda página, configure para aparecer **só na Home** e na página Halloween (que são as portas de entrada do Instagram).

---

## PASSO 4: Cadastrar os produtos (40 min)

**Painel → Catálogo → Produtos da loja → + Novo produto → Produto físico.**

### Abóbora Derretida (Halloween)
1. **Imagens:** `abobora-grande.jpg`, `abobora-mini.jpg`, `abobora-dupla-quadrada.jpg` (+ as fotos novas do Gabriel).
2. **Nome:** Abóbora Derretida. **Descrição:** em `textos-do-site.md`.
3. **Faixa (ribbon):** `Edição limitada`.
4. **Preço:** **R$ 54,90**.
5. **Opções do produto → Tamanho:** `BIC mini` e `BIC normal` (mostrar como botões).
6. **Estoque:** ative **Rastrear estoque**. O Gabriel produz sob demanda, mas a edição é de **50 peças**: distribua entre os tamanhos (ex.: 25 + 25; confirmar com ele). Quando zerar, aparece "Esgotado" sozinho.
7. **Peso:** pese uma capa embalada (ex.: 0,05 kg). Sem peso, o frete calculado não funciona.
8. **Categoria:** crie **Halloween** e marque.
9. **Infos extras:** seções "Material", "Prazo" e "Trocas" (textos no arquivo).
10. **SEO** do produto: no arquivo de textos.

> Se preferir que a Home mostre **dois cards** (mini e normal) como no protótipo, cadastre **dois produtos** iguais, um para cada tamanho, com 25 de estoque cada. Fica mais visual, e o "Leve 2" funciona igual.

### Capa Personalizada
- **Preço:** R$ 59,90 · **Categoria:** Personalizada · **Faixa:** `Sob encomenda`
- **Opções:** Tamanho (BIC mini / BIC normal) e **Cor** (Laranja / Lilás / Cinza / Azul; use o tipo **cor** com amostras).
- **Campo de texto personalizado** (ativar): "Nome usado no formulário de personalização".
- **Estoque:** não rastrear (é sob demanda).

### Collab João Morais
- Um produto por desenho, categoria **Collab João Morais**, faixa `Collab`. Preço **a definir**.

### Categorias para criar agora
Halloween · Personalizada · Collab João Morais · Designs Originais (vazia, para o futuro, a R$ 44,90).

---

## PASSO 5: "Leve 2 e ganhe 10% na segunda" (10 min)

**Painel → Marketing → Descontos automáticos** (ou *Loja → Promoções*; o nome muda) → **Criar desconto**:
- Tipo: **Compre X, ganhe Y**.
- **Compre:** 1 item da categoria **Halloween** · **Ganhe:** 1 item da categoria **Halloween** com **10% de desconto**.
- Validade: até 31/10 (ou até acabar).

O desconto entra sozinho no carrinho. Conta: 2 capas = R$ 54,90 + R$ 49,41 = **R$ 104,31**.

---

## PASSO 6: Montar as páginas (3 a 5 h)

Abra o protótipo ao lado do Wix e recrie **seção por seção** (*Adicionar → Seção → Em branco*). Textos em `textos-do-site.md`.

### Home (`index.html`)
1. **Hero** (branco): adesivo laranja "Coleção Halloween 2026", "DERRETEU." em preto com o **ponto laranja**, texto, botão de compra laranja + botão secundário "Fazer a minha do zero" → Personalize. Abaixo, "Edição limitada: 50 peças". À direita, a foto com 2 adesivos ("só 50 peças" e "R$ 54,90").
   - Opcional: no lugar da barrinha, cole o **contador** de `embeds/contagem-regressiva.html` (*Adicionar → Embed → Incorporar HTML*).
2. **Abóbora Derretida** (fundo gelo): título, texto, **faixa "Leve 2"** (caixa com borda preta + adesivo vermelho) e *Adicionar → Loja → **Galeria de produtos*** filtrada pela categoria **Halloween**. Design do card: sem borda, foto com cantos de 6 px, nome em Inter negrito, botão contornado.
3. **Por que Tabaqu3** (branco): 4 colunas, cada uma com uma **bolinha** de cor (ABS / Design original / Feita pra você / Encaixe BIC).
4. **Collab** (bloco **preto**, o único escuro da Home): adesivo verde, "TABAQU3 × JOÃO MORAIS", texto, botão → Coleções Especiais. Foto da collab à direita.
5. **Loja** (gelo): 3 fotos com bolinha de cor e título (Halloween / Collab João Morais / Personalizada), cada uma com link. Linha "Em breve: designs originais a partir de R$ 44,90".
6. **Personalize + Parcerias** (branco): duas caixas lado a lado, uma com **borda azul** (cores de filamento + R$ 59,90) e outra com **borda e fundo amarelo-claro**.
7. **Sobre** (gelo): foto, "TABAQU3 = TABACARIA + 3", texto e os 3 adesivos **Expressiva / Artística / Não usual**.
8. **Dúvidas** (branco): *Adicionar → Interativo → Acordeão* (ou app **Wix FAQ**).

### Personalize (`personalize.html`)
O fluxo: **formulário com as referências → pagamento no carrinho**.
1. Topo (branco, centralizado), "Como funciona" em 4 passos (números em azul).
2. **Caixa de aviso azul** com as regras: o que não é aceito, o reembolso se a ideia for recusada e os **7 dias do CDC**.
3. *Adicionar → Formulário → **Wix Forms*** com os campos: Nome · WhatsApp · E-mail · Tamanho (opções) · Cor (opções) · Descrição (texto longo) · **Upload de arquivo** (referências) · Caixa de aceite das políticas.
4. Em *Configurações do formulário → Após o envio* → **Redirecionar para** o produto **Capa Personalizada**. O cliente escolhe tamanho e cor, escreve o nome e paga.
5. O Gabriel recebe o formulário em **Painel → Formulários** e o pedido em **Painel → Pedidos**, e casa os dois pelo nome. Se recusar a ideia: **Pedidos → Reembolsar**.

> Alternativa mais simples: o Wix Forms tem **campo de pagamento** (cobra os R$ 59,90 no próprio formulário). O lado ruim é que aí o frete não é calculado. Só vale se a personalizada for entregue em mãos em BH.

### Coleções Especiais (`colecoes-especiais.html`)
Topo "TABAQU3 × JOÃO MORAIS" (× verde) → **Galeria de produtos** da categoria Collab João Morais → bloco do artista (foto, história, frase, link **@joaomorais.tattoo**) → "Como a capa nasce" em 3 passos → chamada "É artista ou tatuador?" → Parcerias. Na próxima collab, duplique os blocos.

### Parcerias (`parcerias.html`)
Duas caixas: **Tabacarias e estúdios** (amarelo) e **Artistas e tatuadores** (verde), e depois um **Wix Forms** de contato (Nome, WhatsApp, "Você é" com opções, Loja/estúdio, Cidade, Instagram, Mensagem).

### Sobre (`sobre.html`)
História do nome, origem ("chega de genérico"), os 3 adesivos e "Quem está por trás" com a foto do Gabriel.

### Página do produto, Carrinho, Loja
Ajuste para o tema: fundo branco, botão "Adicionar ao carrinho" laranja. Na Loja, ative o **filtro por categoria**. No carrinho, ative o **campo de cupom** (os parceiros vão usar).

---

## PASSO 7: Parcerias com tabacarias: QR code + 10% (20 min por parceiro)

O briefing: unidades expostas + QR code + **10% de comissão** nas vendas vindas daquela tabacaria. Jeito simples de controlar no Wix:

1. **Um cupom por parceiro:** *Marketing → Cupons → Novo cupom*, ex.: `CHARUTARIA5` com **5% de desconto** para o cliente (o desconto é o que faz o cliente digitar o código; sem isso ninguém usa).
2. **QR code:** gere grátis (ex.: no próprio Wix, *Marketing → QR code*, se aparecer; ou em qualquer gerador) apontando para `https://tabaqu3.com.br/halloween`. Imprima um display com o QR **e o cupom escrito em grande**.
3. **Fechamento mensal:** *Pedidos* → filtre/busque pelo cupom → some o valor dos produtos → **10%** é a comissão.

> Se o volume crescer, dá para trocar por um app de afiliados do App Market, que calcula a comissão sozinho.

---

## PASSO 8: Versão para celular (1 h, NÃO PULE)

As vendas vão vir do Instagram, ou seja, do celular. No editor, clique no **ícone de celular**:
- Tudo em **uma coluna**. Foto do hero **abaixo** do texto. Botões em largura cheia.
- "DERRETEU." numa linha só (diminua a fonte só no celular).
- Caixas Personalize e Parcerias, uma embaixo da outra.
- Teste a **lightbox +18** no celular.

---

## PASSO 9: Plano Premium

*Fazer upgrade* → plano com **loja/pagamentos** (Core ou superior). O **anual** é bem mais barato e dá 1 ano de domínio grátis. Veja o aviso de orçamento lá no início.

---

## PASSO 10: Pagamentos (Pix + cartão)

Hoje o Gabriel só recebe por Pix. **Painel → Configurações → Aceitar pagamentos**:

| Opção | Pix | Cartão | Observação |
|---|---|---|---|
| **Wix Pagamentos** | ✅ | ✅ | Nativo, mais fácil. **Recomendado** |
| Mercado Pago | ✅ | ✅ | Se ele já tiver conta |
| PagBank | ✅ | ✅ | Taxas de Pix baixas |

Quem preenche CPF/CNPJ e conta bancária é o **Gabriel**.

---

## PASSO 11: Frete e entrega (BH + Brasil)

**Painel → Configurações → Envio e entrega**:
1. **Região "Belo Horizonte"**: ative **Entrega local** (taxa fixa, ex.: R$ 10, ou grátis) e/ou **Retirada** (combinar pelo WhatsApp). Hoje ele já entrega em mãos em BH, então isso mantém o que funciona.
2. **Região "Brasil"**: instale o app **Melhor Envio** (App Market). Ele calcula Correios e transportadoras pelo CEP e gera etiqueta barata, sem mensalidade. Por isso o **peso** do Passo 4 é importante.
3. **Prazo de manuseio:** 2 dias úteis (o tempo de produção).

---

## PASSO 12: Políticas

*Configurações → Políticas* (base em `textos-do-site.md`):
- **Trocas:** 7 dias de arrependimento (CDC art. 49), inclusive na personalizada (compra online); defeito em até 30 dias.
- **Personalização:** o que não é aceito e reembolso integral se a ideia for recusada.
- **Envio** e **Privacidade (LGPD)**.

---

## PASSO 13: Domínio tabaqu3.com.br

**Configurações → Domínios → Conectar um domínio que você já tem** → digite `tabaqu3.com.br` → o Wix mostra os **servidores DNS**. No **registro.br** (login do Gabriel): *Domínio → Alterar servidores DNS* → cole os do Wix. Leva até 48 h para propagar, então **faça até 15/10**.

---

## PASSO 14: SEO e redes

- *Marketing e SEO → Ferramentas de SEO*: siga o checklist.
- SEO de cada página: em `textos-do-site.md`.
- **Imagem de compartilhamento** (aparece no WhatsApp): foto da abóbora.
- **Favicon:** a logo T3.
- Link na bio do **@tabaqu3_**: `tabaqu3.com.br`. Peça ao João para colocar o link da página da collab na bio dele também.

---

## PASSO 15: Testar e publicar

1. **Visualizar** no desktop e no celular, clicando em tudo.
2. **Compra real** com Pix e cartão, comprando **2 capas** (para testar o "Leve 2"): uma entrega em BH e um CEP de outro estado. Confira frete, e-mails, pedido no painel e baixa de estoque.
3. Teste o **formulário de personalização** com upload e o redirecionamento.
4. Teste um **cupom de parceiro**.
5. Reembolse os testes → **Publicar**.

---

## PASSO 16: Entregar para o Gabriel

No **app Wix** do celular dele:
- **Pedidos:** marcar como enviado + código de rastreio; reembolsar uma personalizada recusada.
- **Formulários:** ver os pedidos de personalização e de parceria.
- **Produtos:** preço, foto e estoque.
- **Cupons:** criar o cupom de cada nova tabacaria parceira.
- **Notificações:** alerta de pedido novo.

---

## Pendências

**Precisa do Gabriel agora:**
- [ ] Decidir o plano do Wix (o orçamento de R$ 60/mês não cobre loja)
- [ ] Arquivos **t3-logo.png** e **t3-logo.svg** (não chegaram para mim)
- [ ] Fotos de produto que estão no celular dele
- [ ] **Vídeo de referência** `screenrecording-2026-09-16_16-13-55.mp4` (não chegou)
- [ ] Divisão das 50 peças entre BIC mini e BIC normal
- [ ] CNPJ/razão social, endereço comercial, e-mail, número do WhatsApp
- [ ] Lista do que **não** é aceito na personalização (políticas da marca)
- [ ] Foto e 2 linhas sobre ele para a página Sobre
- [ ] Condições da parceria com tabacarias: as unidades são consignadas? Tem custo?

**Precisa do João Morais:**
- [ ] Fotos e nomes dos modelos, preço de cada um
- [ ] Mini bio (estúdio, cidade, estilo), uma frase sobre a collab e uma foto dele

**A definir (futuro):** cenário das fotos novas, referências visuais, outros modelos de isqueiro, designs originais a R$ 44,90. Gatinho e Pássaros **saíram do site** (ainda não existem).

## Dica de foto
O Gabriel quer "underground clean": rua, mas sem sujeira. Sugestões:
- **Fotos de loja:** fundo branco ou cinza bem claro, luz de janela, mesmo enquadramento vertical em todas.
- **Fotos de clima:** **mão** (a dele ou a da amiga) segurando o isqueiro na frente de um **muro com grafite colorido desfocado** atrás. O colorido do grafite conversa com a paleta do site sem precisar de pichação.
- **Collab:** o João no estúdio com as capas, e o desenho em papel ao lado da capa pronta.
