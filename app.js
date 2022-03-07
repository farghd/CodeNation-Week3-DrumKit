
function playDrum(note) {
    let audioPath;
    switch (note) {
        case 'w':
            audioPath = "/sounds/boom.wav";
            break;
        case 'a':
            audioPath = "/sounds/clap.wav";
            break;
        case 's':
            audioPath = "/sounds/hihat.wav";
            break;
        case 'd':
            audioPath = "/sounds/kick.wav";
            break;
        case 'j':
            audioPath = "/sounds/openhat.wav";
            break;
        case 'k':
            audioPath = "/sounds/ride.wav";
            break;
        case 'l':
            audioPath = "/sounds/snare.wav";
            break;
        case 'm':
            audioPath = "/sounds/tink.wav";
            break;
        case 'n':
            audioPath = "/sounds/tom.wav";
            break;
    }

    const audio = new Audio(audioPath);
    audio.play();
}

const clickEvent = (event) => {
    const note = event.target.innerText;
    playDrum(note);
};

document.getElementById("wDrum").addEventListener("click", clickEvent);

document.getElementById("aDrum").addEventListener("click", clickEvent);

document.getElementById("sDrum").addEventListener("click", clickEvent);

document.getElementById("dDrum").addEventListener("click", clickEvent);

document.getElementById("jDrum").addEventListener("click", clickEvent);

document.getElementById("kDrum").addEventListener("click", clickEvent);

document.getElementById("lDrum").addEventListener("click", clickEvent);

document.getElementById("mDrum").addEventListener("click", clickEvent);

document.getElementById("nDrum").addEventListener("click", clickEvent);

document.addEventListener("keypress", (event) => {
    const note = event.key;
    playDrum(note);
});