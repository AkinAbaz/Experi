
// Get the modal
var button = document.getElementById('janela1');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  button.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  button.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == button) {
    button.style.display = "none";
  }
}