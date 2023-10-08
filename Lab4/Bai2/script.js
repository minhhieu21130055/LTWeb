function solveQuadraticEquation() {
    var a = parseFloat(document.getElementById("input-a").value);
    var b = parseFloat(document.getElementById("input-b").value);
    var c = parseFloat(document.getElementById("input-c").value);

    var delta = b * b - 4 * a * c;
    var x1, x2;

    if (delta > 0) {
      x1 = (-b + Math.sqrt(delta)) / (2 * a);
      x2 = (-b - Math.sqrt(delta)) / (2 * a);
      document.getElementById("result").innerHTML = "Phương trình có hai nghiệm: x1 = " + x1 + ", x2 = " + x2;
    } else if (delta === 0) {
      x1 = -b / (2 * a);
      document.getElementById("result").innerHTML = "Phương trình có nghiệm kép: x = " + x1;
    } else {
      document.getElementById("result").innerHTML = "Phương trình không có nghiệm thực.";
    }
  }