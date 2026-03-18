// Scroll suave ao clicar nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Efeito ao rolar a página (aparecer elementos)
const elementos = document.querySelectorAll(".secao");

function mostrarElementos() {
  const alturaTela = window.innerHeight;

  elementos.forEach(el => {
    const distanciaTopo = el.getBoundingClientRect().top;

    if (distanciaTopo < alturaTela - 100) {
      el.classList.add("ativo");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
mostrarElementos();