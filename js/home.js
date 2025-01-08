const playMusicButton = document.getElementById("playMusicButton");
const stopMusicButton = document.getElementById("stopMusicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

function restoreMusicState() {
    const isMusicPlaying = localStorage.getItem("isMusicPlaying") === "true";
    const musicPosition = localStorage.getItem("musicPosition");

    if (isMusicPlaying) {
        if (musicPosition) {
            backgroundMusic.currentTime = parseFloat(musicPosition);
        }
        backgroundMusic.play();
    }
}

window.addEventListener("load", () => {
    restoreMusicState();
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
