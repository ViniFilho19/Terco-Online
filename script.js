/* ==========================================================

       1. TEXTOS (edite aqui para mudar orações e mistérios)

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

        "A auto - Revelação de Jesus nas Bodas de Caná",

        "O Anúncio do Reino de Deus e o convite a conversão",

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

        "A Coroação de Maria no céu "

      ]}

    ];



    // Mistério sugerido para cada dia (0 = domingo ... 6 = sábado)

    const MISTERIO_DO_DIA = [3, 0, 2, 3, 1, 2, 0];



    // Dias em que cada mistério é rezado (mesma ordem de MISTERIOS)

    const DIAS_DO_MISTERIO = ["Seg · Sáb", "Qui", "Ter · Sex", "Qua · Dom"];



    const ORDINAIS = ["1º", "2º", "3º", "4º", "5º"];

    const VIRTUDES = ["pela fé", "pela esperança", "pela caridade"];



    /* ==========================================================

       2. DESENHO DO TERÇO

       Cada "passo" é uma conta (ou o crucifixo/medalha) e guarda:

       k = tipo (cruz, pai, ave, gloria, salve)

       d = dezena (0 a 4, ou -1 fora das dezenas)

       n = número da Ave Maria, x/y/r = posição e tamanho do brilho

       els = elementos SVG que acendem

       ========================================================== */

    const NS = "http\://www.w3.org/2000/svg";

    const svg = document.getElementById("svg");



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

      // corrente (círculo + haste até o crucifixo)

      criar("circle", { cx: CENTRO_X, cy: CENTRO_Y, r: RAIO, fill: "none", stroke: "var(--chain)", "stroke-width": 2 });

      criar("line", { x1: 300, y1: CENTRO_Y + RAIO, x2: 300, y2: 760, stroke: "var(--chain)", "stroke-width": 2 });



      // brilho (criado antes das contas para ficar por trás delas)

      window.halo = criar("circle", { class: "halo", cx: 300, cy: 783, r: 40, filter: "url(#blur)" });



      // crucifixo

      novoPasso({

        k: "cruz", d: -1, x: 300, y: 783, r: 40,

        els: [

          criar("rect", { x: 292, y: 745, width: 16, height: 80, rx: 4, class: "bead" }),

          criar("rect", { x: 270, y: 766, width: 60, height: 16, rx: 4, class: "bead" })

        ]

      });



      // haste: Pai Nosso, 3 Ave Marias, Glória (pequena) e o Pai Nosso que abre a 1ª dezena

      novoPasso({ k: "pai", d: -1, x: 300, y: 725, r: 20, els: [conta(300, 725, 12)] });

      [684, 656, 628].forEach((y, i) => {

        novoPasso({ k: "ave", d: -1, n: i + 1, x: 300, y, r: 14, els: [conta(300, y, 7.5)] });

      });

      novoPasso({ k: "gloria", d: -1, x: 300, y: 602, r: 14, els: [conta(300, 602, 5)] });

      novoPasso({ k: "pai", d: 0, x: 300, y: 568, r: 20, els: [conta(300, 568, 12)] });



      // 5 dezenas: 1 conta grande + 10 pequenas + 1 conta do Glória

      // (o Pai Nosso da 1ª dezena já foi desenhado na haste, então ela começa em j = 1)

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



      // medalha (Salve Rainha)

      novoPasso({ k: "salve", d: -1, x: 300, y: CENTRO_Y + RAIO, r: 26, els: [conta(300, CENTRO_Y + RAIO, 16)] });

    }



    desenharTerco();



    // Clicar em uma conta pula direto para ela

    function ativarCliques() {

      passos.forEach((passo, indice) => {

        let raio = 11;                       // contas pequenas

        if (passo.k === "cruz") raio = 34;   // crucifixo

        else if (passo.r >= 20) raio = 12;   // contas grandes



        const area = criar("circle", { cx: passo.x, cy: passo.y, r: raio, class: "hit" });

        area.addEventListener("click", () => mostrar(indice));

      });

    }



    ativarCliques();



    /* ==========================================================

       3. ESTADO (lembra onde você parou)

       ========================================================== */

    const $ = (id) => document.getElementById(id);



    let salvo = null;

    try { salvo = JSON.parse(localStorage.getItem("terco")); } catch (e) {}



    let misterio = salvo && salvo.m >= 0 && salvo.m < 4

      ? salvo.m

      : MISTERIO_DO_DIA[new Date().getDay()];



    let atual = salvo && salvo.i >= 0 && salvo.i < passos.length

      ? salvo.i

      : 0;



    function salvarProgresso() {

      try { localStorage.setItem("terco", JSON.stringify({ m: misterio, i: atual })); } catch (e) {}

    }



    /* ==========================================================

       4. O QUE MOSTRAR EM CADA PASSO

       ========================================================== */

    function descrever(passo) {

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



    function tituloDoMisterio(passo) {

      if (passo.d >= 0) {

        const m = MISTERIOS[misterio];

        return ORDINAIS[passo.d] + " mistério " + m.singular + "<strong>" + m.itens[passo.d] + "</strong>";

      }

      return passo.k === "salve" ? "Oração final" : "Orações iniciais";

    }



    /* ==========================================================

       5. ATUALIZAR A TELA

       ========================================================== */

    const abas = $("tabs");



    MISTERIOS.forEach((m, n) => {

      const botao = document.createElement("button");

      botao.className = "tab";



      // destaca a aba do mistério de hoje

      const ehHoje = n === MISTERIO_DO_DIA[new Date().getDay()];

      if (ehHoje) botao.classList.add("hoje");



      botao.innerHTML =

        m.nome + "<small>" + DIAS_DO_MISTERIO[n] + (ehHoje ? " · hoje" : "") + "</small>";



      botao.onclick = () => { misterio = n; mostrar(atual); botao.blur(); };

      abas.appendChild(botao);

    });



    function mostrar(n) {

      atual = Math.max(0, Math.min(passos.length - 1, n));

      const passo = passos[atual];

      const info = descrever(passo);



      // contas: já rezadas / atual / futuras

      passos.forEach((p, j) => {

        p.els.forEach((el) => {

          el.classList.toggle("done", j < atual);

          el.classList.toggle("cur", j === atual);

        });

      });



      // brilho acompanha a conta atual

      window.halo.setAttribute("cx", passo.x);

      window.halo.setAttribute("cy", passo.y);

      window.halo.setAttribute("r", passo.r);



      // abas de mistério

      [...abas.children].forEach((b, k) => b.setAttribute("aria-pressed", k === misterio));



      // textos

      $("where").innerHTML = tituloDoMisterio(passo);

      $("name").textContent = info.nome;

      $("count").textContent = info.contagem;

      $("text").innerHTML = info.textos.map((t) => "<p>" + t + "</p>").join("");

      $("pos").textContent = (atual + 1) + " de " + passos.length;



      // botões

      $("prev").disabled = atual === 0;

      $("next").disabled = atual === passos.length - 1;



      document.querySelector(".stage").scrollTop = 0;

      salvarProgresso();

    }
// ---- Tema claro / escuro ----
const botaoTema = $("theme");
const html = document.documentElement;

const ICONE_SOL =
  '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/>' +
  '<path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const ICONE_LUA =
  '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';

function temaAtual() {
  return html.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

// o botão mostra o tema para o qual vai trocar
function atualizarBotaoTema() {
  const escuro = temaAtual() === "dark";
  botaoTema.innerHTML = (escuro ? ICONE_SOL : ICONE_LUA) +
    "<span>" + (escuro ? "Tema claro" : "Tema escuro") + "</span>";
}

// se a pessoa já escolheu um tema antes, aplica
try {
  const temaSalvo = localStorage.getItem("terco-tema");
  if (temaSalvo === "light" || temaSalvo === "dark") html.dataset.theme = temaSalvo;
} catch (e) {}

atualizarBotaoTema();

botaoTema.onclick = (e) => {
  const novo = temaAtual() === "dark" ? "light" : "dark";
  html.dataset.theme = novo;
  try { localStorage.setItem("terco-tema", novo); } catch (err) {}
  atualizarBotaoTema();
  e.currentTarget.blur();
};


    /* ==========================================================

       6. CONTROLES (botões e teclado)

       ========================================================== */

    $("next").onclick  = (e) => { mostrar(atual + 1); e.target.blur(); };

    $("prev").onclick  = (e) => { mostrar(atual - 1); e.target.blur(); };

    $("reset").onclick = (e) => { mostrar(0);         e.target.blur(); };



    const TECLAS_AVANCAR = [ "ArrowRight", "ArrowUp",  "PageUp", " ", "Enter"];

    const TECLAS_VOLTAR  = [ "ArrowLeft", "ArrowDown", "PageDown", "Backspace"];



    addEventListener("keydown", (e) => {

      // se um botão está focado, deixa o próprio botão tratar Enter/Espaço

      if (e.target.tagName === "BUTTON" && (e.key === "Enter" || e.key === " ")) return;



      if (TECLAS_AVANCAR.includes(e.key)) {

        e.preventDefault();

        mostrar(atual + 1);

      } else if (TECLAS_VOLTAR.includes(e.key)) {

        e.preventDefault();

        mostrar(atual - 1);

      }

    });



    /* ==========================================================

       7. INICIAR

       ========================================================== */

    mostrar(atual);