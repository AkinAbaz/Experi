var model = document.getElementById('janela1');
var buttonTalkWithUs = document.getElementById("myBtn");
var spanClose = document.getElementsByClassName("close")[0];

buttonTalkWithUs.onclick = function() {
    model.style.display = "block";
}

spanClose.onclick = function() {
    model.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == model) {
        model.style.display = "none";
    }
}