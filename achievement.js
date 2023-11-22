const difficultPack = document.getElementById("difficultPack");
const artistPack = document.getElementById("artistPack");

function spreadAchievement(pack)
{
    pack.querySelectorAll("button").forEach(button => 
    {
            if(localStorage.getItem(button.getAttribute("data-name")+"Completed"))
            {
                button.querySelector("i").classList.add("icon-star");
                button.querySelector("i").classList.add("align-right");
            }
    });
}

spreadAchievement(difficultPack);
spreadAchievement(artistPack);