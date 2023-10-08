var currentNumber = 1;

    function checkButton(button) {
      var buttonNumber = parseInt(button.innerHTML);
      var messageContainer = document.getElementById("messageContainer");

      if (buttonNumber === currentNumber) {
        button.classList.add("clicked");
        currentNumber++;

        if (currentNumber > 64) {
          alert("Chúc mừng. Bạn đã hoàn thành trò chơi !!");
        }
      } else {
        button.classList.add("wrong");
        alert("Bạn đã nhấn sai button!");
      }
    }

    var buttonContainer = document.getElementById("buttonContainer");
    for (var i = 1; i <= 64; i++) {
      var button = document.createElement("button");
      button.innerHTML = i;
      button.className = "button";
      button.addEventListener("click", function() {
        checkButton(this);
      });
      buttonContainer.appendChild(button);
    }