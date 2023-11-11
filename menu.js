const audioMainMenu = new Audio("audio/mainmenu.mp3");
const blackScreen = document.querySelector(".blackScreen");

let inactive = false;
window.addEventListener("click",() => {
    if(inactive == false) {
        blackScreen.style.opacity = 0;
        setTimeout(() => blackScreen.style.zIndex = -50,900);
        audioMainMenu.play();
        inactive = true;
    }
});
$("#exit").click(() => {
    $(".infoStart").css("opacity",0);
    setTimeout(()=> {
        blackScreen.style.zIndex = 50;
        blackScreen.style.opacity = 1;
    },0);
    setTimeout(close,1000);
})
let menuStatus = "";
$("#play").click(() => {
    $("#firstMenu").css("top","-1000px");
    $("#secondMenu").css("top","50%");
    $(".back").css("opacity",1);
    $(".back").css("z-index",1);
    menuStatus = "secondMenu";
});
$("#difficultPackBtn").click(() => {
    $("#secondMenu").css("top","-1000px");

    $("#difficultPack").css("top","50%");
    $(".menuInfo").html("Difficult Pack");
    menuStatus = "difficultPack";
});
$("#artistPackBtn").click(() => {
    $("#secondMenu").css("top","-1000px");

    $("#artistPack").css("top","50%");
    $(".menuInfo").html("Artist Pack");
    menuStatus = "artistPack";
});
$("#customSongsBtn").click(() => {
    $("#secondMenu").css("top","-1000px");

    $("#customSongs").css("top","50%");
    $(".menuInfo").html("Custom Songs");
    menuStatus = "customSongs";
});
$(".back").click(() => {
    switch(menuStatus) {
        case "secondMenu": {
            $("#secondMenu").css("top","-1000px");
            $("#firstMenu").css("top","72%");
            $(".back").css("opacity",0);
            $(".back").css("z-index",-50);
        } break;
        case "difficultPack": {
            $("#difficultPack").css("top","-1000px");
            $(".menuInfo").html("");
            $("#secondMenu").css("top","50%");
            menuStatus = "secondMenu";
        } break;
        case "artistPack": {
            $("#artistPack").css("top","-1000px");
            $(".menuInfo").html("");
            $("#secondMenu").css("top","50%");
            menuStatus = "secondMenu";
        } break;
        case "customSongs": {
            $("#customSongs").css("top","-1000px");
            $(".menuInfo").html("");
            $("#secondMenu").css("top","50%");
            menuStatus = "secondMenu";
        }
    }
});
/////////// Difficult Pack ////////////
$("#simpleBtn").click(() => location.href = 'difficultPack/simple.html');
$("#easyBtn").click(() => location.href = 'difficultPack/easy.html');
$("#normalBtn").click(() => location.href = 'difficultPack/normal.html');
////////// Artist Pack ////////////////
$("#jjna100Btn").click(() => location.href = 'artistPack/jjna100.html');
$("#edjBtn").click(() => location.href = 'artistPack/edj.html');
$("#eddyjBtn").click(() => location.href = 'artistPack/eddyj.html');
$("#aerialtwistBtn").click(() => location.href = 'artistPack/aerialtwist.html');