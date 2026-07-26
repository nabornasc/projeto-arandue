let indiceAtual = 0;
const totalSlides = 2;
const slide = document.getElementById("slide");

function proximoSlide() {
  indiceAtual = (indiceAtual + 1) % totalSlides;

  const deslocamento = -indiceAtual * 103;
  slide.style.transform = `translateX(${deslocamento}%)`;
}

setInterval(proximoSlide, 3000);
