var modelTalkWithUs = document.getElementById('janela1');
var buttonTalkWithUs = document.getElementById("myBtn");
var spanCloseTalk = document.getElementsByClassName("close")[0];

var modelForm = document.getElementById('janela2');
var buttonSubscribe = document.getElementById("myBtnSubs");
var spanCloseSubs = document.getElementById("closeSubs");

buttonTalkWithUs.onclick = function() {
    modelTalkWithUs.style.display = "block";
}

spanCloseTalk.onclick = function() {
    modelTalkWithUs.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modelTalkWithUs) {
        modelTalkWithUs.style.display = "none";
    } else if (event.target == modelForm) {
        modelForm.style.display = "none";
    }
}

buttonSubscribe.onclick = function() {
    modelForm.style.display = "block";
}

spanCloseSubs.onclick = function() {
    modelForm.style.display = "none";
}