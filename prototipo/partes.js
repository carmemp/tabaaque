// Partes repetidas em todas as páginas do protótipo (no Wix isso é o Cabeçalho, o Rodapé e a Lightbox +18,
// que você monta uma vez e aparecem no site inteiro).
(function () {
  var ativo = document.body.getAttribute('data-pagina') || '';

  // Logo provisória "T3" com pingos. TROCAR pelo t3-logo.svg/png oficial do Gabriel.
  var T3 = '<svg class="t3" viewBox="0 0 64 64" aria-hidden="true"><rect width="64" height="64" rx="8" fill="#111"/>' +
    '<text x="32" y="43" text-anchor="middle" font-family="Anton,Impact,sans-serif" font-size="34" fill="#fff">T3</text>' +
    '<path fill="#fff" d="M17 45h4v6a2 2 0 0 1-4 0Zm22 0h3v9a1.5 1.5 0 0 1-3 0Zm7 0h3v4a1.5 1.5 0 0 1-3 0Z"/></svg>';

  function item(id, cls, href, txt) {
    return '<li class="' + cls + '"><a href="' + href + '"' + (ativo === id ? ' class="ativo"' : '') + '>' + txt + '</a></li>';
  }

  var topo =
    '<div class="aviso"><b>🎃 Halloween:</b> só 50 peças · Leve 2 e ganhe 10% na segunda · Envio para todo o Brasil</div>' +
    '<header><div class="wrap nav">' +
      '<a href="index.html" class="logo">' + T3 + '<span>TABAQU3</span></a>' +
      '<ul class="menu">' +
        item('hall', 'm-hall', 'index.html#halloween', 'Halloween') +
        item('loja', '', 'index.html#colecoes', 'Loja') +
        item('esp', 'm-esp', 'colecoes-especiais.html', 'Coleções Especiais') +
        item('pers', 'm-pers', 'personalize.html', 'Personalize') +
        item('parc', 'm-parc', 'parcerias.html', 'Parcerias') +
        item('sobre', '', 'sobre.html', 'Sobre') +
      '</ul>' +
      '<a href="#" class="carrinho">Carrinho <i>0</i></a>' +
      '<button class="hamb" aria-label="Menu">☰</button>' +
    '</div></header>';

  var rodape =
    '<footer><div class="wrap"><div class="foot">' +
      '<div><a href="index.html" class="logo">' + T3 + '<span>TABAQU3</span></a>' +
      '<p style="color:var(--cinza);margin-top:14px;max-width:34ch">Capas para isqueiro impressas em 3D, com design original. Feito em Belo Horizonte/MG.</p></div>' +
      '<div><h4>Loja</h4><ul><li><a href="index.html#halloween">Halloween</a></li><li><a href="colecoes-especiais.html">Coleções Especiais</a></li><li><a href="personalize.html">Personalize</a></li></ul></div>' +
      '<div><h4>Ajuda</h4><ul><li><a href="index.html#faq">Dúvidas</a></li><li><a href="#">Trocas e devoluções</a></li><li><a href="#">Envio</a></li><li><a href="#">Privacidade</a></li></ul></div>' +
      '<div><h4>Tabaqu3</h4><ul><li><a href="sobre.html">Sobre</a></li><li><a href="parcerias.html">Parcerias</a></li><li><a href="https://instagram.com/tabaqu3_">Instagram @tabaqu3_</a></li><li><a href="#">WhatsApp</a></li></ul></div>' +
    '</div><div class="legal"><span>© 2026 Tabaqu3 · tabaqu3.com.br · CNPJ [00.000.000/0000-00] · Belo Horizonte/MG</span><span>Site e produtos destinados a maiores de 18 anos.</span></div></div></footer>' +
    '<a class="zap" href="#" aria-label="Falar no WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3Z"/></svg></a>' +
    '<div class="nota">Protótipo: referência para montar no Wix</div>';

  var portao =
    '<div class="portao" id="portao" role="dialog" aria-modal="true" aria-labelledby="portao-t"><div class="caixa">' + T3 +
      '<h2 id="portao-t">Você tem 18 anos ou mais?</h2>' +
      '<p>A Tabaqu3 faz acessórios para isqueiro e conversa com o universo da tabacaria. Este site é só para maiores de 18.</p>' +
      '<div class="acoes"><button class="btn laranja" id="sim18">Sim, tenho 18+</button><a class="btn ghost" href="https://www.google.com">Não</a></div>' +
    '</div></div>';

  document.body.insertAdjacentHTML('afterbegin', topo);
  document.body.insertAdjacentHTML('beforeend', rodape);

  var ok = false;
  try { ok = sessionStorage.getItem('t3-18') === '1'; } catch (e) {}
  if (!ok && !/[?&]sem18/.test(location.search)) {
    document.body.insertAdjacentHTML('beforeend', portao);
    document.getElementById('sim18').onclick = function () {
      try { sessionStorage.setItem('t3-18', '1'); } catch (e) {}
      document.getElementById('portao').hidden = true;
    };
  }
})();
