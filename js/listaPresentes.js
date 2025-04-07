const produtos = [
    {
        imagem: "https://m.media-amazon.com/images/I/61m5wUE9XzL._AC_SX679_.jpg",
        descricao: "WAP Aspirador de Pó Vertical",
        valor: "R$ 199,90",
        link: "https://mpago.la/1HaGEDb",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_788252-MLB82403657638_022025-F.jpg",
        descricao: "WOLFF Faqueiro de Aço Inox Viena",
        valor: "R$ 182,90",
        link: "https://mpago.la/2i5VWhk",
    },

    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_648956-MLB82403679850_022025-F.jpg",
        descricao: "Panela De Pressão 4,5 Litros Polida Eterna Nigro",
        valor: "R$ 222,70",
        link: "https://mpago.li/2Zjq1kA",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_725291-MLB82403692378_022025-F.jpg",
        descricao: "Cestos Organizadores De Bambu Multiuso Com Forro",
        valor: "R$ 78,94",
        link: "https://mpago.li/2ALjPfu",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_925931-MLB82656315645_022025-F.jpg",
        descricao: "Jogo de Panelas Soft Touch Hercules Antiaderente",
        valor: "R$ 682,44",
        link: "https://mpago.la/2cuVM1w",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_666770-MLB82689128233_022025-F.jpg",
        descricao: "WOLFF Garrafa Térmica",
        valor: "R$ 88,00",
        link: "https://mpago.la/1gHM3i3",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_983040-MLB82689129687_022025-F.jpg",
        descricao: "Kit 2 Pote Slim Hermético Com Cesto Escorredor",
        valor: "R$79,90",
        link: "https://mpago.la/2g2pdus",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_875708-MLB82689160467_022025-F.jpg",
        descricao: "Pote Slim Multiuso Hermético",
        valor: "R$ 49,47",
        link: "https://mpago.la/2h783DZ",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_916481-MLB82689112925_022025-F.jpg",
        descricao: "Liquidificador Philips Walita Branco 110v ",
        valor: "R$ 294,68",
        link: "https://mpago.la/24VNe3f",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_969738-MLB82689143487_022025-F.jpg",
        descricao: "Buddemeyer Jogo de Toalhas Branco 5 peças",
        valor: "R$ 310,80",
        link: "https://mpago.la/13ZwiAd",
    },
]

const giftListItems = document.querySelector(".gift-list-items")

produtos.forEach((produto) => {
    const item = document.createElement("div")
    item.classList.add("gift-list-item")

    item.innerHTML = `
    <div class="gift-list-item">
  <img src="${produto.imagem}" alt="${produto.descricao}" />
  <div class="card-content">
    <div class="title">
      <h1 class="gift-list-item-description">${produto.descricao}</h1>
      <p class="gift-list-item-description-paragraf">${produto.valor}</p>
    </div>
    <a class="btn-content" href="${produto.link}" target="_blank">Comprar</a>
  </div>
</div>


  `

    giftListItems.appendChild(item)
})
