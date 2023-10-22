const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phoneNumber");

emailInput.addEventListener("input", function () {
  const email = emailInput.value;
  const atIndex = email.indexOf("@");
  const isValidEmail = atIndex !== -1 && atIndex !== 0 && atIndex !== email.length - 1;
  emailInput.setCustomValidity(isValidEmail ? "" : "Please enter a valid email address.");
});

phoneNumberInput.addEventListener("input", function () {
  const phoneNumber = phoneNumberInput.value;
  const isValidPhoneNumber = /^0\d*$/.test(phoneNumber);
  phoneNumberInput.setCustomValidity(isValidPhoneNumber ? "" : "Please enter a valid phone number starting with 0.");
}); 