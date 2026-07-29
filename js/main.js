let indiceAtual = 0;
const totalSlides = 2;
const slide = document.getElementById("slide");

function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % totalSlides;
  
  const deslocamento = -indiceAtual * 103;
  slide.style.transform = `translateX(${deslocamento}%)`;
}

setInterval(proximoSlide, 3000);

const botaoTema = document.getElementById("theme-toggle");
const iconeTema = document.getElementById("theme-icon");

if (localStorage.getItem("tema") === "escuro") {
  document.body.classList.add("dark");
  iconeTema.src = "img/moon-stars-svgrepo-com.svg";
} else {
  iconeTema.src = "img/sun-svgrepo-com.svg";
}

botaoTema.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "escuro");
    iconeTema.src = "img/moon-stars-svgrepo-com.svg";
  } else {
    localStorage.setItem("tema", "claro");
    iconeTema.src = "img/sun-svgrepo-com.svg";
  }
});

