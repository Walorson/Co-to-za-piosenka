const customPack = document.getElementById("customPack");
///////// CREATE BUTTONS ///////////////
customPackList.forEach(song => {
    customPack.innerHTML += `<button id="${song}">${song}</button>`;
});
///////// ADD CLICK ELEMENT TO EVERY BUTTON ///////////
for(let i=0; i<customPackList.length; i++) {
    document.getElementById(customPackList[i]).addEventListener("click",() => {
        location.href = 'customPack/'+customPackList[i]+'/'+customPackList[i]+'.html';
    });
}