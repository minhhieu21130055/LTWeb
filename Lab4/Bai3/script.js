document.addEventListener("DOMContentLoaded", function() {
    var greetings = [
      "Chào bạn!",
      "Xin chào!",
      "Long time no see, bro!!",
      "Lâu rùi hong thấy bạn nha ^^",
      "Hello!",
      "Chào bạn đến web của tui!!"
    ];

    var randomIndex = Math.floor(Math.random() * greetings.length);
    var greetingElement = document.getElementById("greeting");
    greetingElement.textContent = greetings[randomIndex];
  });