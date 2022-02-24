const songList = [
    {
        title: "Acoustic Breenze",
        file: "download.mp3",
        cover: "gato.jpg"
    },
    {
        title: "A new Beginning",
        file: "download(1).mp3",
        cover: "gato2.jpg"
    },
    {
        title: "Creative Minds",
        file: "download(2).mp3",
        cover: "gato3.jpg"
    }
];

//Capturar elementos del DOM
const songs = document.getElementById('songs');

//Mostrar listado de canciones
function loadSongs() {
    songList.forEach(song => {
        //console.log(song);
        //crear li
        const li = document.createElement("li");

        //crear a
        const link = document.createElement("a");

        //hidratar a
        link.textContent = song.title;

        //añadir a li
        li.appendChild(link);

        
        //añadir li a ul
        songs.appendChild(li);
    });


}

//GO
loadSongs();

