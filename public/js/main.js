const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("icone").src = "./img/instagram-logo-white.png";
    document.getElementById("icone").style.width = "120px";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("icone").src = "./img/instagram-logo-white.png";
    document.getElementById("icone").style.width = "120px";
    localStorage.setItem("theme", "dark"); //add this
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); //add this
    document.getElementById("icone").src = "./img/instagram-logo.svg";
  }
}
