function myFunction() {
    document.getElementById("box_btn").classList.toggle("box__rotatebtn")
    document.getElementById("box_content").classList.toggle("box__show");
}
function modalWidow() {
    document.getElementById("modalbox").classList.toggle("modalbox__show")
}
var modal = document.getElementById("modalbox");
window.onclick = function(event) {
    if (event.target == modal) {
        document.getElementById("modalbox").classList.toggle("modalbox__show");
    }
}