function changeContent(page) {
    document.getElementById("home").style.display = "none"
    document.getElementById("presentes").style.display = "none"
    document.getElementById("presenca").style.display = "none"
    document.getElementById("localizacao").style.display = "none"

    if (page === "home") {
        document.getElementById("home").style.display = "block"
    } else {
        document.getElementById(page).style.display = "block"
    }

    if (page === "presentes") {
        loadPresentesContent()
    }

    if (page === "presenca") {
        loadPresencaContent()
    }

    if (page === "localizacao") {
        loadLocalizacaoContent()
    }
}

function loadPresentesContent() {
    const presentesContainer = document.getElementById("presentes")
    if (!presentesContainer.hasChildNodes()) {
        fetch("./presentes.html")
            .then((response) => response.text())
            .then((html) => {
                presentesContainer.innerHTML = html
                const script = document.createElement("script")
                script.src = "./js/listaPresentes.js"
                script.defer = true
                document.body.appendChild(script)
            })
            .catch((error) => {
                console.error("Erro ao carregar o conteúdo de presentes:", error)
            })
    }
}

function loadPresencaContent() {
    const presencaContainer = document.getElementById("presenca")
    if (!presencaContainer.hasChildNodes()) {
        fetch("./presenca.html")
            .then((response) => response.text())
            .then((html) => {
                presencaContainer.innerHTML = html
                const script = document.createElement("script")
                script.src = "./js/presenca.js"
                script.defer = true
                document.body.appendChild(script)
            })
            .catch((error) => {
                console.error("Erro ao carregar o conteúdo de presença:", error)
            })
    }
}

function loadLocalizacaoContent() {
    const presencaContainer = document.getElementById("localizacao")
    if (!presencaContainer.hasChildNodes()) {
        fetch("./localizacao.html")
            .then((response) => response.text())
            .then((html) => {
                presencaContainer.innerHTML = html
                const script = document.createElement("script")
                script.src = "./js/localizacao.js"
                script.defer = true
                document.body.appendChild(script)
            })
            .catch((error) => {
                console.error("Erro ao carregar o conteúdo de presença:", error)
            })
    }
}

window.onload = function () {
    changeContent("home")
}
