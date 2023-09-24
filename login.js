function btnCheck() {
  // Find the input password field within the form
  const passwordInput = document.querySelector(
    '.login-form .input-text[type="password"], .login-form .input-text[type="text"]'
  );

  // Toggle the input type between text and password
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
