function toggleDarkLight() {
    var body = document.getElementById("changethis");
    var currentClass = body.className;
    body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
  }