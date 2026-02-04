function escrevendoletra() {
  function ativaLetra(elemento) {
    const arrTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';

    arrTexto.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra;
      }, 75 * i);
    });
  }

  const titulo = document.querySelector('.digitando');
  if (titulo) ativaLetra(titulo);
}

escrevendoletra();

// MENU MOBILE
const ativaMenu = document.querySelector('.fa-bars');
const navMenu = document.querySelector('header .navegacao-primaria');

if (ativaMenu && navMenu) {
  ativaMenu.addEventListener('click', () => {
    ativaMenu.classList.toggle('fa-x');
    ativaMenu.classList.toggle('fa-bars');
    navMenu.classList.toggle('ativado');
  });
}