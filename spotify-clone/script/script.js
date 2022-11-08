console.log("welcome to spotify");

// Initialise the variables
let songIndex = 0;
let audioElement = new Audio('audio/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let song = [

    { songName: "Tokya-Drift", filePath: "audio/1.mp3" },
    { songName: "Animals-Martin garix", filePath: "audio/2.mp3" },
    { songName: "Sia-Cheap Thrills", filePath: "audio/3.mp3" },
    { songName: "Sugar & Brownies", filePath: "audio/4.mp3" },
    { songName: "Ginza- J Balvin", filePath: "audio/5.mp3" },
    { songName: "The Weekend - After hours", filePath: "sonsg/6.mp3" },
    { songName: "The Fat rat - Rise Up", filePath: "audio/7.mp3" },
    { songName: "Shawn Mendes - Senorita", filePath: "audio/8.mp3" },
]

songItem.forEach((element, i) => {
    // element.getElementByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
// audioElement.play();
// listen to events
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})
// Handle play
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        console.log(e.target);
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `audio/${songIndex + 1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
});
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 8) {
        songIndex = 0
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `audio/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `audio/${songIndex + 1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})




document.querySelector("#shuffle").addEventListener('click', () => {
    song[Math.floor(Math.random() * song.length)]
    audioElement.currentTime = 0;
    audioElement.shuffle();
    gif.style.opacity = 1;
})
