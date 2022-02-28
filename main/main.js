const songList = [
    {
        title: "Acoustic Breenze",
        file: "download.mp3",
        cover: "gato.jpg"
    },
    {
        title: "A new Beginning",
        file: "tema.mp3",
        cover: "gato2.jpg"
    },
    {
        title: "Creative Minds",
        file: "temita.mp3",
        cover: "gato3.jpg"
    },    
];

//Actual SOng
let actualSong = null;


//Capturar elementos del DOM
const songs = document.getElementById('songs');
const audio = document.getElementById('audio');
const cover = document.getElementById('cover');
const title = document.getElementById('title');

//Mostrar listado de canciones
function loadSongs() {
    songList.forEach((song, index) => {
        //console.log(song);
        //crear li
        const li = document.createElement("li");

        //crear a
        const link = document.createElement("a");

        //hidratar a
        link.textContent = song.title;
        link.href= "#";

        //escuchar clicks
        link.addEventListener("click", () => loadSong(index));

        //añadir a li
        li.appendChild(link);

        
        //añadir li a ul
        songs.appendChild(li);
    });
}

//Cargar Cancion seleccionada
function loadSong(songIndex) {
    if(songIndex =! actualSong) {
        actualSong = songIndex;
        //console.log(actualSong);
    
        audio.src = "./audio/" + songList[songIndex].file;
        audio.play();
    
        cover.src = "./img/" + songList[songIndex].cover;    
    
        title.innerText = songList[songIndex].title;

        changeActiveClass()
    }    
}

//change active class
function changeActiveClass() {
    const links = document.querySelectorAll("a")
    console.log(links);
}




//GO
loadSongs();

