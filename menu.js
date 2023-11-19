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
$("#customPackBtn").click(() => {
    $("#secondMenu").css("top","-1000px");

    $("#customPack").css("top","50%");
    $(".menuInfo").html("Custom Pack");
    menuStatus = "customPack";
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
        case "customPack": {
            $("#customPack").css("top","-1000px");
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
$("#hardBtn").click(() => location.href = 'difficultPack/hard.html');
$("#veryHardBtn").click(() => location.href = 'difficultPack/veryHard.html');
$("#extremeBtn").click(() => location.href = 'difficultPack/extreme.html');
$("#brutalBtn").click(() => location.href = 'difficultPack/brutal.html');
$("#hardcoreBtn").click(() => location.href = 'difficultPack/hardcore.html');
////////// Artist Pack ////////////////
$("#jjna100Btn").click(() => location.href = 'artistPack/jjna100.html');
$("#edjBtn").click(() => location.href = 'artistPack/edj.html');
$("#eddyjBtn").click(() => location.href = 'artistPack/eddyj.html');
$("#aerialtwistBtn").click(() => location.href = 'artistPack/aerialtwist.html');