/* ==========================================================
   1. TEXTOS
   ========================================================== */
const ORACOES = {
  sinal: "Em nome do Pai e do Filho e do Espírito Santo. Amém.",
  creio: "Creio em Deus Pai todo-poderoso, criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo, nasceu da Virgem Maria, padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos, ressuscitou ao terceiro dia, subiu aos céus, está sentado à direita de Deus Pai todo-poderoso, donde há de vir a julgar os vivos e os mortos. Creio no Espírito Santo, na santa Igreja Católica, na comunhão dos santos, na remissão dos pecados, na ressurreição da carne, na vida eterna. Amém.",
  pai: "Pai nosso, que estais no céu, santificado seja o vosso nome, venha a nós o vosso reino, seja feita a vossa vontade assim na terra como no céu. O pão nosso de cada dia nos dai hoje, perdoai-nos as nossas ofensas assim como nós perdoamos a quem nos tem ofendido, e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém.",
  ave: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora da nossa morte. Amém.",
  gloria: "Glória ao Pai, ao Filho e ao Espírito Santo. Como era no princípio, agora e sempre. Amém.",
  jesus: "Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem.",
  salve: "Salve, Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos, os degredados filhos de Eva; a vós suspiramos, gemendo e chorando neste vale de lágrimas. Eis pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei; e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria. Rogai por nós, santa Mãe de Deus, para que sejamos dignos das promessas de Cristo. Amém."
};

const MISTERIOS = [
  { nome: "Gozosos", singular: "gozoso", itens: [
    "A Anunciação do Anjo a Maria",
    "A Visita de Maria a sua prima Santa Isabel",
    "O Nascimento de Jesus em Belém",
    "A Apresentação de Jesus no Templo e a Purificação de Nossa Senhora",
    "A Perda e o Encontro de Jesus no Templo" ]},

  { nome: "Luminosos", singular: "luminoso", itens: [
    "O Batismo de Jesus no Rio Jordão",
    "A auto-revelação de Jesus nas Bodas de Caná",
    "O Anúncio do Reino de Deus e o convite à conversão",
    "A Transfiguração de Jesus",
    "A Instituição da Eucaristia" ]},

  { nome: "Dolorosos", singular: "doloroso", itens: [
    "A Agonia de Jesus no Horto das Oliveiras",
    "A Flagelação de Jesus",
    "A Coroação de Espinhos",
    "Jesus carrega a Cruz até o Calvário",
    "A Crucifixão e Morte de Jesus" ]},
    

  { nome: "Gloriosos", singular: "glorioso", itens: [
    "A Ressurreição de Jesus",
    "A Ascensão de Jesus ao Céu",
    "A vinda do Espírito Santo sobre os apóstolos",
    "A Assunção de Maria ao Céu",
    "A Coroação de Maria no céu" ]}
];

// Mistério sugerido para cada dia (0 = domingo ... 6 = sábado)
const MISTERIO_DO_DIA = [3, 0, 2, 3, 1, 2, 0];

// Dias em que cada mistério é rezado (mesma ordem de MISTERIOS)
const DIAS_DO_MISTERIO = ["Seg · Sáb", "Qui", "Ter · Sex", "Qua · Dom"];

const ORDINAIS = ["1º", "2º", "3º", "4º", "5º"];
const VIRTUDES = ["pela fé", "pela esperança", "pela caridade"];

const MISERICORDIA = {
  faustina: "Ó Jesus, Verdade eterna, nossa Vida, clamo a Ti e imploro Tua misericórdia para os pobres pecadores. Ó Coração dulcíssimo do meu Senhor, cheio de piedade e misericórdia insondável, rogo a Ti pelos pecadores. Ó Sacratíssimo Coração, Fonte de Misericórdia, de onde jorram raios de graças inconcebíveis sobre toda a humanidade, suplico luz para os pobres pecadores. Ó Jesus, lembra-Te da Tua amarga Paixão e não permitas a perda das almas resgatadas a tão alto preço de Teu Preciosíssimo Sangue. Ó Jesus, ao considerar o grande preço do Teu Sangue, rejubilo-me com sua imensidão, pois uma única gota seria suficiente para a salvação de todos os pecadores. Embora o pecado seja um abismo de maldade e ingratidão, o preço pago por nós jamais poderá ser superado. Por isso, que cada alma confie na Tua Paixão e coloque sua esperança em Tua misericórdia. Deus não negará Sua misericórdia a ninguém. Céu e terra podem mudar, mas a misericórdia de Deus jamais se esgotará. Oh, que imensa alegria arde em meu coração quando contemplo Tua bondade incompreensível, ó Jesus! Desejo levar todos os pecadores aos Teus pés, para que glorifiquem Tua misericórdia por toda a eternidade.",
  fonte: "Tu expiraste, Jesus, mas a fonte de vida jorrou para as almas, e o oceano de misericórdia abriu-se para o mundo inteiro. Ó Fonte de Vida, insondável Misericórdia Divina, envolve o mundo inteiro e derrama-te sobre nós.",
  sangueAgua: "Ó Sangue e Água, que jorraste do Coração de Jesus como fonte de misericórdia para nós, eu confio em Vós!",
  eternoPai: "Eterno Pai, eu Vos ofereço o Corpo e o Sangue, a Alma e a Divindade de Vosso diletíssimo Filho, Nosso Senhor Jesus Cristo, em expiação dos nossos pecados e dos pecados do mundo inteiro.",
  paixao: "Pela Sua dolorosa Paixão, tende misericórdia de nós e do mundo inteiro.",
  deusSanto: "Deus Santo, Deus Forte, Deus Imortal, tende misericórdia de nós e do mundo inteiro.",
  deusEterno: "Deus eterno, em quem a misericórdia é infinita e o tesouro da compaixão é inesgotável, olhai para nós com bondade e aumentai em nós a Vossa misericórdia, para que nos momentos difíceis não nos desesperemos nem desanimemos, mas nos submetamos com grande confiança à Vossa santa vontade, que é o Amor e a própria Misericórdia.",
  deusMisericordioso: "Ó Deus, cuja misericórdia é infinita, hoje toda a humanidade clama a Ti do abismo de sua miséria. Com sua poderosa voz, grita a Ti por compaixão. Ó Deus de bondade infinita, não rejeiteis a súplica deste mundo sofredor! Ó Senhor, cuja bondade está além de nossa compreensão, Vós conheceis nossa fraqueza e sabeis que, por nós mesmos, não podemos nos elevar a Vós. Imploramos: precedei-nos com a Vossa graça e aumentai a Vossa misericórdia em nós, para que possamos cumprir fielmente a Vossa santa vontade ao longo de nossas vidas e na hora da nossa morte. Que a onipotência de Vossa misericórdia nos proteja dos inimigos da nossa salvação, para que possamos aguardar, como Vossos filhos, a Vinda Final de Vosso Filho. Esperamos alcançar tudo o que Jesus nos prometeu, apesar de nossa miséria. Pois Jesus é nossa Esperança: por meio de Seu Coração Misericordioso, como por uma porta aberta, passamos para o Céu."
};

const rotulo = (t) => '<span class="rotulo">' + t + "</span>";

/* ==========================================================
   2. DESENHO DO TERÇO
   ========================================================== */
const $ = (id) => document.getElementById(id);

const NS = "http://www.w3.org/2000/svg";
const svg = $("svg");

function criar(tag, atributos) {
  const el = document.createElementNS(NS, tag);
  for (const nome in atributos) el.setAttribute(nome, atributos[nome]);
  svg.appendChild(el);
  return el;
}

const conta = (x, y, r) => criar("circle", { cx: x, cy: y, r, class: "bead" });

const CENTRO_X = 300;
const CENTRO_Y = 300;
const RAIO = 235;

const passos = [];
const novoPasso = (passo) => passos.push(passo);

function desenharTerco() {
  criar("circle", { cx: CENTRO_X, cy: CENTRO_Y, r: RAIO, fill: "none", stroke: "var(--chain)", "stroke-width": 2 });
  criar("line", { x1: 300, y1: CENTRO_Y + RAIO, x2: 300, y2: 760, stroke: "var(--chain)", "stroke-width": 2 });

  window.halo = criar("circle", { class: "halo", cx: 300, cy: 783, r: 40, filter: "url(#blur)" });

  novoPasso({
    k: "cruz", d: -1, x: 300, y: 783, r: 40,
    els: [
      criar("rect", { x: 292, y: 745, width: 16, height: 80, rx: 4, class: "bead" }),
      criar("rect", { x: 270, y: 766, width: 60, height: 16, rx: 4, class: "bead" })
    ]
  });

  novoPasso({ k: "pai", d: -1, x: 300, y: 725, r: 20, els: [conta(300, 725, 12)] });
  [684, 656, 628].forEach((y, i) => {
    novoPasso({ k: "ave", d: -1, n: i + 1, x: 300, y, r: 14, els: [conta(300, y, 7.5)] });
  });
  novoPasso({ k: "gloria", d: -1, x: 300, y: 602, r: 14, els: [conta(300, 602, 5)] });
  novoPasso({ k: "pai", d: 0, x: 300, y: 568, r: 20, els: [conta(300, 568, 12)] });

  for (let dezena = 0; dezena < 5; dezena++) {
    for (let j = dezena === 0 ? 1 : 0; j < 12; j++) {
      const angulo = (90 - (dezena * 12 + j) * 360 / 60) * Math.PI / 180;
      const x = CENTRO_X + RAIO * Math.cos(angulo);
      const y = CENTRO_Y + RAIO * Math.sin(angulo);

      if (j === 0)      novoPasso({ k: "pai",    d: dezena, x, y, r: 20, els: [conta(x, y, 12)] });
      else if (j < 11)  novoPasso({ k: "ave",    d: dezena, n: j, x, y, r: 14, els: [conta(x, y, 7.5)] });
      else              novoPasso({ k: "gloria", d: dezena, x, y, r: 14, els: [conta(x, y, 5)] });
    }
  }

  novoPasso({ k: "salve", d: -1, x: 300, y: CENTRO_Y + RAIO, r: 26, els: [conta(300, CENTRO_Y + RAIO, 16)] });
}

desenharTerco();

function ativarCliques() {
  passos.forEach((passo, indice) => {
    let raio = 11;
    if (passo.k === "cruz") raio = 34;
    else if (passo.r >= 20) raio = 12;

    const area = criar("circle", {
      cx: passo.x,
      cy: passo.y,
      r: raio,
      class: "hit",
      tabindex: "0",
      role: "button",
      "aria-label": "Ir para a conta " + (indice + 1)
    });

    area.addEventListener("click", () => mostrar(indice));
    area.addEventListener("keydown", (e) => {
      if (caixaSobre.open) return;
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        e.stopPropagation();
        mostrar(indice);
      }
    });
  });
}

/* ==========================================================
   3. ESTADO
   ========================================================== */
let salvo = null;
try { salvo = JSON.parse(localStorage.getItem("terco")); } catch (e) {}

let modo = salvo && salvo.t === "misericordia" ? "misericordia" : "mariano";

let misterio = salvo && salvo.m >= 0 && salvo.m < 4
  ? salvo.m
  : MISTERIO_DO_DIA[new Date().getDay()];

let atual = salvo && salvo.i >= 0 && salvo.i < passos.length
  ? salvo.i
  : 0;

function salvarProgresso() {
  try { localStorage.setItem("terco", JSON.stringify({ m: misterio, i: atual, t: modo })); } catch (e) {}
}

/* ==========================================================
   ACESSIBILIDADE: TAMANHO DA LETRA
   ========================================================== */
const CHAVE_FONTE = "terco-tamanho-fonte";
let escalaFonte = 1;

try {
  const fonteSalva = Number(localStorage.getItem(CHAVE_FONTE));
  if (fonteSalva >= 0.8 && fonteSalva <= 1.5) escalaFonte = fonteSalva;
} catch (e) {}

function aplicarTamanhoFonte() {
  document.querySelector(".stage").style.setProperty("--terco-font-scale", escalaFonte);
  try { localStorage.setItem(CHAVE_FONTE, escalaFonte); } catch (e) {}
}

$("font-decrease").addEventListener("click", () => {
  escalaFonte = Math.max(0.8, +(escalaFonte - 0.1).toFixed(1));
  aplicarTamanhoFonte();
});
$("font-reset").addEventListener("click", () => {
  escalaFonte = 1;
  aplicarTamanhoFonte();
});
$("font-increase").addEventListener("click", () => {
  escalaFonte = Math.min(1.5, +(escalaFonte + 0.1).toFixed(1));
  aplicarTamanhoFonte();
});

aplicarTamanhoFonte();

/* ==========================================================
   4. O QUE MOSTRAR EM CADA PASSO
   ========================================================== */

// no modo Misericórdia, algumas contas não são usadas
function passoAtivo(passo) {
  if (modo === "mariano") return true;
  if (passo.k === "gloria") return false;
  if (passo.d === -1 && passo.k === "ave" && passo.n === 3) return false;
  return true;
}

// próxima (+1) ou anterior (-1) conta ativa; devolve i se não houver
function vizinho(i, direcao) {
  let j = i + direcao;
  while (j >= 0 && j < passos.length && !passoAtivo(passos[j])) j += direcao;
  return j >= 0 && j < passos.length ? j : i;
}

function descreverMariano(passo) {
  switch (passo.k) {
    case "cruz":
      return { nome: "Sinal da Cruz e Creio", contagem: "No crucifixo", textos: [ORACOES.sinal, ORACOES.creio] };

    case "pai":
      return {
        nome: "Pai Nosso",
        contagem: passo.d < 0 ? "Primeira conta grande" : "Conta grande",
        textos: [ORACOES.pai]
      };

    case "ave":
      return {
        nome: "Ave Maria",
        contagem: passo.d < 0 ? VIRTUDES[passo.n - 1] + " · " + passo.n + " de 3" : passo.n + " de 10",
        textos: [ORACOES.ave]
      };

    case "gloria":
      return {
        nome: "Glória",
        contagem: passo.d < 0 ? "Conta pequena" : "Fim da dezena",
        textos: [ORACOES.gloria, ORACOES.jesus]
      };

    default: // salve
      return { nome: "Salve Rainha", contagem: "No medalhão · fim do terço", textos: [ORACOES.salve] };
  }
}

function descreverMisericordia(passo) {
  const M = MISERICORDIA;

  if (passo.k === "cruz") {
    return {
      nome: "Sinal da Cruz",
      contagem: "No crucifixo · abertura opcional",
      textos: [
        ORACOES.sinal,
        // rotulo("Opcional · Oração de Santa Faustina pelos Pecadores") + M.faustina,
        // rotulo("Opcional · Oração a Jesus Misericordioso") + M.fonte,
        rotulo("Opcional · repetir três vezes") + M.sangueAgua
      ]
    };
  }

  if (passo.k === "salve") {
    return {
      nome: "Deus Santo",
      contagem: "No medalhão · repetir três vezes",
      textos: [
        M.deusSanto,
        //rotulo("Opcional · Oração ao Deus Eterno") + M.deusEterno,
        //rotulo("Opcional · Oração a Deus Misericordioso") + M.deusMisericordioso
      ]
    };
  }

  if (passo.d < 0) { // haste
    if (passo.k === "pai") return { nome: "Pai Nosso", contagem: "Primeira conta grande", textos: [ORACOES.pai] };
    if (passo.n === 1)     return { nome: "Ave Maria", contagem: "Primeira conta pequena", textos: [ORACOES.ave] };
    return { nome: "Creio", contagem: "Segunda conta pequena", textos: [ORACOES.creio] };
  }

  if (passo.k === "pai") {
    return { nome: "Eterno Pai", contagem: "Conta grande", textos: [M.eternoPai] };
  }
  return { nome: "Dolorosa Paixão", contagem: passo.n + " de 10", textos: [M.paixao] };
}

function descrever(passo) {
  return modo === "misericordia" ? descreverMisericordia(passo) : descreverMariano(passo);
}

function tituloMisericordia(passo) {
  if (passo.d >= 0) {
    return (passo.d + 1) + "ª dezena<strong>Terço da Misericórdia</strong>";
  }
  return passo.k === "salve" ? "Oração final" : "Orações iniciais";
}

function tituloDoMisterio(passo) {
  if (modo === "misericordia") return tituloMisericordia(passo);

  if (passo.d >= 0) {
    const m = MISTERIOS[misterio];
    let texto = ORDINAIS[passo.d] + " mistério " + m.singular +
                "<strong>" + m.itens[passo.d] + "</strong>";
    if (m.meditacoes) {
      texto += '<span class="fruto">Fruto: ' + m.meditacoes[passo.d].fruto + "</span>";
    }
    return texto;
  }
  return passo.k === "salve" ? "Oração final" : "Orações iniciais";
}

// texto da barra do celular (título + subtítulo ao lado do botão do menu)
function atualizarTopo() {
  if (modo === "misericordia") {
    $("topo-titulo").textContent = "Terço da Misericórdia";
    $("topo-sub").textContent = "Hora da Misericórdia · 15h";
  } else {
    const ehHoje = misterio === MISTERIO_DO_DIA[new Date().getDay()];
    $("topo-titulo").textContent = "Terço Mariano";
    $("topo-sub").textContent = MISTERIOS[misterio].nome + (ehHoje ? " · hoje" : "");
  }
}

/* ==========================================================
   5. ATUALIZAR A TELA
   ========================================================== */
const abas = $("tabs");

MISTERIOS.forEach((m, n) => {
  const botao = document.createElement("button");
  botao.className = "tab";

  const ehHoje = n === MISTERIO_DO_DIA[new Date().getDay()];
  if (ehHoje) botao.classList.add("hoje");

  botao.innerHTML =
    m.nome + "<small>" + DIAS_DO_MISTERIO[n] + (ehHoje ? " · hoje" : "") + "</small>";

  botao.onclick = () => { misterio = n; mostrar(atual); botao.blur(); };
  abas.appendChild(botao);
});

function mostrar(n) {
  atual = Math.max(0, Math.min(passos.length - 1, n));

  // se caiu numa conta que não é usada neste modo, vai para a próxima
  if (!passoAtivo(passos[atual])) {
    const frente = vizinho(atual, 1);
    atual = frente !== atual ? frente : vizinho(atual, -1);
  }

  const passo = passos[atual];
  const info = descrever(passo);

  passos.forEach((p, j) => {
    p.els.forEach((el) => {
      el.classList.toggle("done", j < atual);
      el.classList.toggle("cur", j === atual);
    });
  });

  window.halo.setAttribute("cx", passo.x);
  window.halo.setAttribute("cy", passo.y);
  window.halo.setAttribute("r", passo.r);

  [...abas.children].forEach((b, k) => b.setAttribute("aria-pressed", k === misterio));

  let conteudo = info.textos.map((t) => "<p>" + t + "</p>").join("");

  // meditação na conta grande que abre cada dezena (só no terço mariano)
  const meds = modo === "mariano" && passo.d >= 0 && passo.k === "pai" && MISTERIOS[misterio].meditacoes;
  if (meds) {
    const md = meds[passo.d];
    conteudo = '<p class="meditacao"><em>' + md.ref + "</em><br>" + md.texto + "</p>" + conteudo;
  }

  $("where").innerHTML = tituloDoMisterio(passo);
  $("name").textContent = info.nome;
  $("count").textContent = info.contagem;
  $("text").innerHTML = conteudo;
  atualizarTopo();

  const ativos = passos.filter(passoAtivo);
  $("pos").textContent = (ativos.indexOf(passo) + 1) + " de " + ativos.length;

  $("prev").disabled = vizinho(atual, -1) === atual;
  $("next").disabled = vizinho(atual, 1) === atual;

  document.querySelector(".stage").scrollTop = 0;
  salvarProgresso();
}

/* ==========================================================
   TEMA CLARO / ESCURO
   ========================================================== */
const botaoTema = $("theme");
const raiz = document.documentElement;

const ICONE_SOL =
  '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/>' +
  '<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICONE_LUA =
  '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

function temaAtual() {
  return raiz.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function atualizarBotaoTema() {
  const escuro = temaAtual() === "dark";
  botaoTema.innerHTML = (escuro ? ICONE_SOL : ICONE_LUA) +
    "<span>" + (escuro ? "Tema claro" : "Tema escuro") + "</span>";
}

try {
  const temaSalvo = localStorage.getItem("terco-tema");
  if (temaSalvo === "light" || temaSalvo === "dark") raiz.dataset.theme = temaSalvo;
} catch (e) {}

atualizarBotaoTema();

botaoTema.onclick = (e) => {
  const novo = temaAtual() === "dark" ? "light" : "dark";
  raiz.dataset.theme = novo;
  try { localStorage.setItem("terco-tema", novo); } catch (err) {}
  atualizarBotaoTema();
  e.currentTarget.blur();
};

/* ==========================================================
   MENU (gaveta em tela cheia no celular)
   ========================================================== */
const menu = $("menu");
const botaoAbrirMenu = $("menu-abrir");
const ehCelular = () => matchMedia("(max-width: 800px)").matches;
const menuAberto = () => menu.classList.contains("aberto");

function abrirMenu() {
  menu.classList.add("aberto");
  botaoAbrirMenu.setAttribute("aria-expanded", "true");
  $("menu-fechar").focus();
}

function fecharMenu() {
  menu.classList.remove("aberto");
  botaoAbrirMenu.setAttribute("aria-expanded", "false");
  botaoAbrirMenu.focus();
}

botaoAbrirMenu.onclick = abrirMenu;
$("menu-fechar").onclick = fecharMenu;

$("menu-reset").onclick = () => {
  mostrar(0);
  if (ehCelular()) fecharMenu();
};

// escolher um mistério fecha o menu no celular
abas.addEventListener("click", (e) => {
  if (e.target.closest(".tab") && ehCelular() && menuAberto()) fecharMenu();
});
/* ==========================================================
   SOBRE ESTE TERÇO
   ========================================================== */
const caixaSobre = $("sobre");

function abrirSobre() {
  if (caixaSobre.showModal) caixaSobre.showModal();
  else caixaSobre.setAttribute("open", "");
}

function fecharSobre() {
  if (caixaSobre.close) caixaSobre.close();
  else caixaSobre.removeAttribute("open");
}

$("sobre-abrir").onclick = abrirSobre;
$("menu-sobre").onclick = abrirSobre;
$("sobre-fechar").onclick = fecharSobre;

// clicar fora da caixa também fecha
caixaSobre.addEventListener("click", (e) => {
  if (e.target === caixaSobre) fecharSobre();
});
/* ==========================================================
   6. CONTROLES
   ========================================================== */
$("next").onclick  = (e) => { mostrar(vizinho(atual, 1));  e.target.blur(); };
$("prev").onclick  = (e) => { mostrar(vizinho(atual, -1)); e.target.blur(); };
$("reset").onclick = (e) => { mostrar(0);                  e.target.blur(); };

const TECLAS_AVANCAR = ["ArrowRight", "ArrowUp", "PageUp", " ", "Enter"];
const TECLAS_VOLTAR  = ["ArrowLeft", "ArrowDown", "PageDown", "Backspace"];

addEventListener("keydown", (e) => {
  // Esc fecha o menu; com o menu aberto, as setas não passam as contas
  if (menuAberto()) {
    if (e.key === "Escape") fecharMenu();
    return;
  }

  if (e.target.tagName === "BUTTON" && (e.key === "Enter" || e.key === " ")) return;

  if (TECLAS_AVANCAR.includes(e.key)) {
    e.preventDefault();
    mostrar(vizinho(atual, 1));
  } else if (TECLAS_VOLTAR.includes(e.key)) {
    e.preventDefault();
    mostrar(vizinho(atual, -1));
  }
});

/* ==========================================================
   MODO (Mariano / Misericórdia)
   ========================================================== */
const botoesModo = document.querySelectorAll(".modo");

function aplicarModo() {
  const mis = modo === "misericordia";
  botoesModo.forEach((b) => b.setAttribute("aria-pressed", b.dataset.modo === modo));
  $("tabs").hidden = mis;
  $("rot-misterios").hidden = mis;
  $("hora").hidden = !mis;
}

botoesModo.forEach((b) => {
  b.onclick = () => {
    modo = b.dataset.modo;
    aplicarModo();
    mostrar(0);
    b.blur();
    if (ehCelular() && menuAberto()) fecharMenu();
  };
});

/* ==========================================================
   7. INICIAR
   ========================================================== */
aplicarModo();
ativarCliques();
mostrar(atual);