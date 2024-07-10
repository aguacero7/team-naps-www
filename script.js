let currentAudio = null;
let currentButton = null;

function toggleMusic(musicFile, button) {
    if (currentAudio && currentAudio.src.includes(musicFile)) {
        if (currentAudio.paused) {
            currentAudio.play();
            button.classList.add('pause');
            button.textContent = 'Pause';
        } else {
            currentAudio.pause();
            button.classList.remove('pause');
            button.textContent = `Musique ${button.textContent.split(' ')[1]}`;
        }
    } else {
        if (currentAudio) {
            currentAudio.pause();
            currentButton.classList.remove('pause');
            currentButton.textContent = `Musique ${currentButton.textContent.split(' ')[1]}`;
        }
        const audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = musicFile;
        audioPlayer.play();
        button.classList.add('pause');
        button.textContent = 'Pause';
        currentAudio = audioPlayer;
        currentButton = button;
    }
}
