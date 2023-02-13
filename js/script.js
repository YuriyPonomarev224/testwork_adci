window.onload = init;

function showBox() {
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

function init() {
    var BoxBtn = document.getElementById("box_btn");
    var ModalBtn = document.getElementById("Modal_Exit");
    var HeaderModalBtn = document.getElementById("Header_Modal_Btn");
    BoxBtn.onclick = showBox;
    ModalBtn.onclick = modalWidow;
    HeaderModalBtn.onclick = modalWidow;
}

