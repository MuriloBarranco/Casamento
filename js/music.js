const backgroundMusic = document.getElementById("backgroundMusic");

function restoreMusicState() {
    const isMusicPlaying = localStorage.getItem("isMusicPlaying") === "true";
    const musicPosition = localStorage.getItem("musicPosition");

    if (isMusicPlaying && musicPosition) {
        backgroundMusic.currentTime = parseFloat(musicPosition);
        backgroundMusic.play();
    }
}

function playMusic() {
    backgroundMusic.play();
    localStorage.setItem("isMusicPlaying", "true");
}

function stopMusic() {
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0;
    localStorage.setItem("isMusicPlaying", "false");
}

backgroundMusic.addEventListener("timeupdate", () => {
    if (!backgroundMusic.paused) {
        localStorage.setItem("musicPosition", backgroundMusic.currentTime);
    }
});

window.addEventListener("load", () => {
    restoreMusicState();
});
