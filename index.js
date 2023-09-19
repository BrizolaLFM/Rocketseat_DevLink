function lightDark() {
  const html = document.documentElement;

  const img = document.querySelector("#profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }

  html.classList.toggle("light");
}

/* O html.classList.toggle("light"); faz basicamente essa função:
  if (html.classList.contains("light")) {
    html.classList.remove("light");
       } else {
         html.classList.add("light");
       }
       mas de forma simplificada */
