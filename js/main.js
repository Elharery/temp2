let drop = document.querySelector(".big header .links .toggle-menu");
let ul = document.querySelector(".big header .links ul");

drop.addEventListener('click', () => {
    if (ul.style.display != "block") {
        ul.style.display = "block";
    } else {
        ul.style.display = " none " ;
    }
})
//
let cobyRight = new Date().getFullYear()
document.querySelector(".coby").innerHTML = cobyRight;