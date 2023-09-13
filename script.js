function colorRandom() {
    const r = parseInt(Math.random() * 256); 
    const g = parseInt(Math.random() * 256);
    const b = parseInt(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
const tituloPag = document.querySelector(".titulo-pag")
const ColorRandom = document.querySelector("#ColorRandom");
ColorRandom.addEventListener("click", () => {
    document.body.style.backgroundColor = colorRandom();
    ColorRandom.remove();
    ColorDefinido.remove();
    tituloPag.remove()
});

const ColorDefinido = document.querySelector("#ColorDefinido");
ColorDefinido.addEventListener("input", () => {
    document.body.style.backgroundColor = ColorDefinido.value;
    ColorRandom.remove();
    ColorDefinido.remove();
    tituloPag.remove()
});
const nav = document.querySelector("nav")
ColorDefinido2 = document.querySelector("#ColorDefinido2")
ColorDefinido2.addEventListener("input", () => {
    nav.style.backgroundColor = ColorDefinido2.value;
    ColorDefinido2.remove();
    nav.classList.toggle("bg-dark")
})

const input1 = document.querySelector("#input-1");
const input2 = document.querySelector("#input-2");
const input3 = document.querySelector("#input-3");
const input4 = document.querySelector("#input-4");
const input5 = document.querySelector("#input-5");
const input6 = document.querySelector("#input-6");

document.querySelector(".form1").addEventListener("submit", (submitt) => {
  submitt.preventDefault(); // Evitar el envío del formulario
  input1.remove();
  input2.remove();
  input3.remove();
  input4.remove();
  input5.remove();
  input6.remove();

  const navbarBrand = document.querySelector(".navbar-brand");
  navbarBrand.textContent = input1.value;
  const navbar1 = document.querySelector(".nav-1");
  navbar1.textContent = input2.value;
  const navbar2 = document.querySelector(".nav-2");
  navbar2.textContent = input3.value;
  const navbar3 = document.querySelector(".nav-3");
  navbar3.textContent = input4.value;
  const navbar4 = document.querySelector(".nav-4");
  navbar4.textContent = input5.value;
});

const input7 = document.querySelector("#input-7");
const input8 = document.querySelector("#input-8");
const input9 = document.querySelector("#input-9");
const input10 = document.querySelector("#input-10");
const input11 = document.querySelector("#input-11");
const h1 = document.querySelector(".titulo")
const p1 = document.querySelector(".p1")
const h3 = document.querySelector("h3")
const p2 = document.querySelector(".p2")

document.querySelector(".form2").addEventListener("submit", (submittt) => {
    submittt.preventDefault(); // Evitar el envío del formulario
    input7.remove();
    input8.remove();
    input9.remove();
    input10.remove();
    input11.remove();
    const Titulo = document.querySelector(".titulo");
    Titulo.textContent = input7.value;
    const contenido = document.querySelector(".contenido");
    contenido.textContent = input8.value;
    const Subtitulo = document.querySelector(".subtitulo");
    Subtitulo.textContent = input10.value;
    const contenido2 = document.querySelector(".contenido2");
    contenido2.textContent = input11.value;
    h1.classList.toggle("d-none")
    p1.classList.toggle("d-none")
    h3.classList.toggle("d-none")
    p2.classList.toggle("d-none")
  });