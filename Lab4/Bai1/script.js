document.addEventListener("DOMContentLoaded", function() {
  var colorButtons = document.getElementsByClassName("color-button");

  for (var i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", function() {
      var color = this.style.backgroundColor;
      document.body.style.backgroundColor = color;
    });
  }
});