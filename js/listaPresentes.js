// presentes.js
const produtos = [
    {
        imagem: "./assets/images/presentes/01.png",
        descricao: "Adega 28 Garrafas Termo",
        valor: "R$ 1.975,86",
        loja: "Brink lar",
    },
    {
        imagem: "./assets/images/presentes/02.png",
        descricao: "Adega 33 Garrafas Compressor",
        loja: "Brink lar",
        valor: "R$ 3.527,21",
    },
    {
        imagem: "./assets/images/presentes/03.png",
        descricao: "Aparelho de Jantar Polka Dots 20 Peças",
        loja: "Brink lar",
        valor: "R$ 369,37",
    },
    {
        imagem: "./assets/images/presentes/04.png",
        descricao: "Aspirador Robo Keep Clean",
        loja: "Brink lar",
        valor: "R$ 1.508,69",
    },
    {
        imagem: "./assets/images/presentes/05.png",
        descricao: "Aparelho de Jantar Polka Dots 20 Peças",
        loja: "Brink lar",
        valor: "R$ 369,37",
    },
    {
        imagem: "./assets/images/presentes/06.png",
        descricao: "Assadeira Retangular Alumínio Ecolon 43 cm x 21 cm",
        loja: "Brink lar",
        valor: "R$ 269,48",
    },
    // Adicione os outros produtos da mesma maneira...
];

const giftListItems = document.querySelector(".gift-list-items");

produtos.forEach((produto) => {
    const item = document.createElement("div");
    item.classList.add("gift-list-item");

    item.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.descricao}" />
    <div class="title">
      <h1 class="gift-list-item-description">${produto.descricao}</h1>
      <p class="gift-list-item-description-paragraf">${produto.valor}</p>
      <p class="gift-list-item-description-paragraf">Loja: ${produto.loja}</p>
    </div>
  `;

    giftListItems.appendChild(item);
});
