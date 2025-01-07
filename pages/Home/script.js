const playMusicButton = document.getElementById("playMusicButton")
const stopMusicButton = document.getElementById("stopMusicButton")
const backgroundMusic = document.getElementById("backgroundMusic")
const goToPresentesButton = document.getElementById("goToPresentesButton")

if (localStorage.getItem("isMusicPlaying") === "true") {
    backgroundMusic.play()
}

playMusicButton.addEventListener("click", () => {
    backgroundMusic.play()
    localStorage.setItem("isMusicPlaying", "true")
})

stopMusicButton.addEventListener("click", () => {
    backgroundMusic.pause()
    backgroundMusic.currentTime = 0
    localStorage.setItem("isMusicPlaying", "false")
})

goToPresentesButton.addEventListener("click", () => {
    localStorage.setItem("isMusicPlaying", "true")
})

window.onload = () => {
    if (localStorage.getItem("isMusicPlaying") === "true") {
        backgroundMusic.play()
    }
}

const animation = lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "/assets/lotties/heart.json",
})

animation.addEventListener("complete", () => {
    document.getElementById("lottie-container").style.display = "none"
    document.getElementById("main-content").style.display = "flex"
    document.body.style.backgroundColor = "var(--secondary)"
})

document.body.style.backgroundColor = "var(--secondary)"
