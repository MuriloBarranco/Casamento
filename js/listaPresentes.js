const produtos = [
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_2X_758541-MLA81181313210_122024-F.webp",
        descricao: "Jogo de Panelas Soft Touch Hercules Antiaderente",
        valor: "R$ 748,48",
        link: "https://mpago.la/2cuVM1w",
    },
    {
        imagem:
            "https://http2.mlstatic.com/D_NQ_NP_2X_663539-MLA81684647689_122024-F.webp",
        descricao: "Leiteira Fervedor Antiaderente Hércules",
        valor: "R$ 105,25",
        link: "https://mpago.la/1HimuwB",
    },

    {
        imagem: "https://m.media-amazon.com/images/I/61m5wUE9XzL._AC_SX679_.jpg",
        descricao: "WAP Aspirador de Pó Vertical SILENT SPEED MAX 3",
        valor: "R$ 199,90",
        link: "https://www.amazon.com.br/WAP-Silent-Speed-Max-Tecnologia/dp/B0BT26M491/ref=asc_df_B0BT26M491/?tag=googleshopp00-20&linkCode=df0&hvadid=709968341038&hvpos=&hvnetw=g&hvrand=7396696104837974365&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9213074&hvtargid=pla-2005284056820&mcid=5125a16267973b10aaf0af0f2b6e0ec4&gad_source=1&th=1",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/61NyX9fOgEL._AC_SX679_.jpg",
        descricao: "WOLFF Faqueiro de Aço Inox Viena",
        valor: "R$ 189,90",
        link: "https://www.amazon.com.br/Wolff-Faqueiro-Viena-Pe%C3%A7as-Prateado/dp/B0B1KVQ663/ref=asc_df_B0B1KVQ663/?tag=googleshopp00-20&linkCode=df0&hvadid=709964506220&hvpos=&hvnetw=g&hvrand=11923906534448774551&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9213074&hvtargid=pla-1880612327266&mcid=00a4e8bc561636ca87fbb01dad894452&gad_source=1&th=1",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/519XhcPOW8L._AC_SX679_.jpg",
        descricao: "WOLFF Garrafa Térmica de Plástico",
        valor: "R$ 83,74",
        link: "https://www.amazon.com.br/Garrafa-T%C3%A9rmica-Pl%C3%A1stico-Madeira-N%C3%B3rdica/dp/B09CBYHLHC/ref=pd_sim_d_sccl_3_7/137-6651612-1976510?pd_rd_w=YMhKL&content-id=amzn1.sym.8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_p=8555f615-361b-42f7-96c4-206bb8a5174e&pf_rd_r=14D00827PQ8Q74AB5YQY&pd_rd_wg=HyfaD&pd_rd_r=f4a03e27-6ccc-4555-a3e4-87f60b7db41b&pd_rd_i=B09CBYHLHC&psc=1",
    },
    {
        imagem:
            "https://a-static.mlcdn.com.br/800x560/panela-de-pressao-45-litros-polida-eterna-nigro/xstore/503122238/b65e9d3abfca1ebbeca8c3dfa7a2fb9c.jpeg",
        descricao: "Panela De Pressão 4,5 Litros",
        valor: "R$ 211,11",
        link: "https://www.magazineluiza.com.br/panela-de-pressao-45-litros-polida-eterna-nigro/p/gc3c50fe1e/ud/udpp/?&seller_id=xstore&utm_source=google&utm_medium=cpc&utm_term=77946&utm_campaign=google_eco_per_ven_pla_all_apo_3p_adv-funnel-trafego-csp&utm_content=&partner_id=77946&gclsrc=aw.ds&gad_source=1&gclid=CjwKCAiAtYy9BhBcEiwANWQQL8AQ0rInbePZsOcJeX6XBAT5EXFq4f6a_G5VSwId9t6Jry5T6q-Z8BoCaUMQAvD_BwE",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/61NdUZo4WBL._AC_SX679_.jpg",
        descricao: "Cestos Organizadores De Bambu 3 Unidades",
        valor: "R$ 89,90",
        link: "https://www.amazon.com.br/dp/B0CVNF7MFZ?ref=cm_sw_r_cso_wa_apin_dp_WTCFPNGPYGK4WS1M10P0&ref_=cm_sw_r_cso_wa_apin_dp_WTCFPNGPYGK4WS1M10P0&social_share=cm_sw_r_cso_wa_apin_dp_WTCFPNGPYGK4WS1M10P0&starsLeft=1&th=1",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/51xcKA+U54L._AC_SX679_.jpg",
        descricao: "Kit 2 Pote Slim Hermético Com Cesto Escorredor Ar 1360 ml",
        valor: "R$ 75,90",
        link: "https://www.amazon.com.br/dp/B0BWFHW3PH?ref=cm_sw_r_cso_wa_apin_dp_J3QDNBP1GH0PX9FVAK3R&ref_=cm_sw_r_cso_wa_apin_dp_J3QDNBP1GH0PX9FVAK3R&social_share=cm_sw_r_cso_wa_apin_dp_J3QDNBP1GH0PX9FVAK3R&starsLeft=1",
    },
    {
        imagem: "https://m.media-amazon.com/images/I/51pPSns9UmL._AC_SX679_.jpg",
        descricao: "Pote Slim Multiuso Hermético 2.570 ml",
        valor: "R$ 47,00",
        link: "https://www.amazon.com.br/dp/B09XBSZD1M?ref=cm_sw_r_cso_wa_apin_dp_A0QHQYV1F94PN4RC13TW&ref_=cm_sw_r_cso_wa_apin_dp_A0QHQYV1F94PN4RC13TW&social_share=cm_sw_r_cso_wa_apin_dp_A0QHQYV1F94PN4RC13TW&starsLeft=1",
    },
]

const giftListItems = document.querySelector(".gift-list-items")

produtos.forEach((produto) => {
    const item = document.createElement("div")
    item.classList.add("gift-list-item")

    item.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.descricao}" />
    <div class="title">
      <h1 class="gift-list-item-description">${produto.descricao}</h1>
      <p class="gift-list-item-description-paragraf">${produto.valor}</p>
      <a class="btn-content" href="${produto.link}" target="_blank" class="gift-list-item-link">Comprar</a>
    </div>

  `

    giftListItems.appendChild(item)
})
