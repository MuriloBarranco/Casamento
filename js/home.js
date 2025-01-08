const playMusicButton = document.getElementById("playMusicButton");
const stopMusicButton = document.getElementById("stopMusicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

window.addEventListener("load", () => {
    if (localStorage.getItem("isMusicPlaying") === "true") {
        const musicPosition = localStorage.getItem("musicPosition");
        if (musicPosition) {
            backgroundMusic.currentTime = parseFloat(musicPosition); 
        }
        backgroundMusic.play(); 
    } else {
        backgroundMusic.pause(); 
        backgroundMusic.currentTime = 0; 
    }
});

playMusicButton.addEventListener("click", () => {
    backgroundMusic.play();
    localStorage.setItem("isMusicPlaying", "true");
});

stopMusicButton.addEventListener("click", () => {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    localStorage.setItem("isMusicPlaying", "false");
});

backgroundMusic.addEventListener("timeupdate", () => {
    if (!backgroundMusic.paused) {
        localStorage.setItem("musicPosition", backgroundMusic.currentTime);
    }
});

// Lottie animation
const animation = lottie.loadAnimation({
    container: document.getElementById("lottie-container"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "./assets/lotties/heart.json",
});

animation.addEventListener("complete", () => {
    document.getElementById("lottie-container").style.display = "none";
    document.getElementById("main-content").style.display = "flex";
    document.body.style.backgroundColor = "var(--secondary)";

    if (localStorage.getItem("isMusicPlaying") === "true") {
        backgroundMusic.play();  
    }
});

window.addEventListener("load", () => {
    if (localStorage.getItem("isMusicPlaying") === "true") {
        const musicPosition = localStorage.getItem("musicPosition");
        if (musicPosition) {
            backgroundMusic.currentTime = parseFloat(musicPosition); 
        }
        backgroundMusic.play();
    } else {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
});
