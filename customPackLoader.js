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

if(customPackList.length <= 3)
{
    customPack.style.top = '50%';
    customPack.style.transform = 'translate(-50%,-50%)';
    customPack.style.height = 'auto';
}