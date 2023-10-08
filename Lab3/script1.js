function validateForm() {
    var emailInput = document.getElementById("email");
    var phoneNumberInput = document.getElementById("phoneNumber");
  
    var email = emailInput.value;
    var phoneNumber = phoneNumberInput.value;
  
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var phoneNumberRegex = /^0\d{9}$/;
  
    var valid = true;
  
    if (!emailRegex.test(email)) {
      valid = false;
      emailInput.classList.add("error");
      emailInput.nextElementSibling.innerHTML = "Email của bạn không hợp lệ. Mời bạn nhập lại";
    } else {
      emailInput.classList.remove("error");
      emailInput.nextElementSibling.innerHTML = "";
    }
  
    if (!phoneNumberRegex.test(phoneNumber) || !phoneNumber.startsWith("0")) {
      valid = false;
      phoneNumberInput.classList.add("error");
      phoneNumberInput.nextElementSibling.innerHTML = "Số điện thoại bạn không hợp lệ. Mời bạn nhập lại";
    } else {
      phoneNumberInput.classList.remove("error");
      phoneNumberInput.nextElementSibling.innerHTML = "";
    }
  
    return valid;
  }