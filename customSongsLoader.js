const customSongs = document.getElementById("customSongs");
///////// CREATE BUTTONS ///////////////
customSongsList.forEach(song => {
    customSongs.innerHTML += `<button id="${song}">${song}</button>`;
});
///////// ADD CLICK ELEMENT TO EVERY BUTTON ///////////
for(let i=0; i<customSongsList.length; i++) {
    document.getElementById(customSongsList[i]).addEventListener("click",() => {
        location.href = 'customSongs/'+customSongsList[i]+'/'+customSongsList[i]+'.html';
    });
}