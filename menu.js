const audioMainMenu = new Audio("audio/mainmenu.mp3");

let inactive = false;
window.addEventListener("click",() => {
    if(inactive == false) {
        $('.blackScreen').css('opacity',0);
        setTimeout(() => $('.blackScreen').css('zIndex',-50), 900);
        audioMainMenu.play();
        inactive = true;
    }
});
$("#exit").click(() => {
    $(".infoStart").css("opacity",0);
    setTimeout(()=> {
        $('.blackScreen').css('zIndex',50);
        $('.blackScreen').css('opacity',1);
    },0);
    setTimeout(close,1000);
})
let menuStatus = "firstMenu";
$("#play").click(() => {
    setMenu("secondMenu", "firstMenu")
    $(".back").css("opacity",1);
    $(".back").css("z-index",1);
});
$("#difficultPackBtn").click(() => {
    setMenu("difficultPack", "secondMenu", true);
});
$("#artistPackBtn").click(() => {
    setMenu("artistPack", "secondMenu", true);
});
$("#customPackBtn").click(() => {
    setMenu("customPack", "secondMenu", true);
});
$(".back").click(() => {
    switch(menuStatus) {
        case "secondMenu": {
            setMenu("firstMenu", "secondMenu")
            $(".back").css("opacity",0);
            $(".back").css("z-index",-50);
        } break;
        case "difficultPack":
        case "artistPack": 
        case "customPack": {
            setMenu("secondMenu", menuStatus);
        } break;
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
$("#netskyBtn").click(() => location.href = 'artistPack/netsky.html');
$("#aerialtwistBtn").click(() => location.href = 'artistPack/aerialtwist.html');

///Utilities
function setMenu(showMenu, hideMenu, menuInfo=false)
{
    $("#"+hideMenu).css("display","none");
    $("#"+showMenu).css("display","flex");

    if(menuInfo == true) 
        $(".menuInfo").html(showMenu.cammelCaseCollapse()); 
    else
        $(".menuInfo").html('');

    menuStatus = showMenu;
}

String.prototype.cammelCaseCollapse = function() 
{
    let newString = this[0].toUpperCase();
    for(let i=1; i<this.length; i++)
    {
        if(this[i] == this[i].toUpperCase())
        {
            newString += " ";
        }

        newString += this[i];
    }

    return newString;
}