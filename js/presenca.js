function redirectToWhatsApp() {
    const phone = "+5518997875551"
    const nameInput = document.getElementById("nameInput")
    let name = nameInput.value.trim()

    if (!name) {
        alert("Por favor, digite seu nome antes de confirmar.")
        return
    }

    name = name
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")

    const message = encodeURIComponent(
        `Eu, ${name}, confirmo minha presença no seu casamento.`
    )
    const whatsappURL = `https://wa.me/${phone}?text=${message}`
    window.location.href = whatsappURL
}