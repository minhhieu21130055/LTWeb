var imageElement = document.getElementById("myImage");
    var rotation = 0;
    setInterval(function() {
      rotation += 15;
      imageElement.style.transform = "rotate(" + rotation + "deg)";
    }, 2000);