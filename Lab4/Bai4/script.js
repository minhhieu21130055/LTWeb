document.getElementById("countButton").addEventListener("click", function() {
    var textA = document.getElementById("textA").value;
    var textB = document.getElementById("textB").value;
    var count = countOccurrences(textA, textB);
    document.getElementById("result").innerText = "Số lần xuất hiện của B trong A: " + count;
  });

  function countOccurrences(textA, textB) {
    var regex = new RegExp(textB, "g");
    var matches = textA.match(regex);
    return matches ? matches.length : 0;
  }