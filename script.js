const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide"),
  sideMenu = document.querySelector(".side-menu");

formOpenBtn.addEventListener("click", () => {
  home.classList.add("show");
  sideMenu.classList.remove("show");
});

formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Signup button clicked");
  formContainer.classList.add("active");
  sideMenu.classList.remove("show");
});


loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
  sideMenu.classList.remove("show");
});

// Toggle side menu on small screens
document.querySelector(".nav_logo").addEventListener("click", () => {
  sideMenu.classList.toggle("show");
});

// Close side menu when a link is clicked
sideMenu.addEventListener("click", () => {
  sideMenu.classList.remove("show");
});
