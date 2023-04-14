JavaScript
var character = document.getElementById("персонаж");
document.addEventListener ("click",  jump);
 
function jump () {
    character.classList.add("animate");
    setTimeout(removeJump, 300); // 300мс = длина анимации
};
function removeJump () {
    character.classList.remove("animate");
}
if (character.classList == "animate") {return;}