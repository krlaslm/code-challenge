const form = document.getElementById("form");
const address = document.getElementById("input-address");
const amount = document.getElementById("input-amount");
const otp = document.getElementById("input-otp");
const sendBtn = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
  sendBtn.addEventListener("click", () => {
    sendBtn.innerHTML = "<div class='loader'></div>";
    setTimeout(() => {
      sendBtn.innerHTML = "SEND TOKEN";
      alert("Token sent successfully!");
    }, 2000);
  });
});

const setError = (element, message) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = message;
};

const setSuccess = (element) => {
  const inputBox = element.parentElement;
  const errorDisplay = inputBox.querySelector(".error");

  errorDisplay.innerText = "";
};

const validateInputs = () => {
  const addressValue = address.value.trim();
  const amountValue = amount.value.trim();
  const otpValue = otp.value.trim();

  if (addressValue === "") {
    setError(address, "Address is required");
  } else {
    setSuccess(address);
  }

  if (amountValue === "") {
    setError(amount, "Amount is required");
  } else {
    setSuccess(amount);
  }

  if (otpValue === "") {
    setError(otp, "OTP is required");
  } else {
    setSuccess(otp);
  }
};
