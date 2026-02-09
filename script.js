function DescrevendoLetra(){

}


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

function menuMobol(){

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
}

const divExperiencia = document.querySelectorAll('.experience_content div')
const liExperiencia = document.querySelectorAll('.experience_content ul li')
const divEducation = document.querySelectorAll('.education_content div')
const liEducation = document.querySelectorAll('.education_content ul li')

function slideShow(index){
  divExperiencia.forEach((div)=>{
    div.classList.remove('ativo');
  });
  liExperiencia.forEach((botao)=>{
    botao.classList.remove('ativo');
  })
  divExperiencia[index].classList.add('ativo');
  liExperiencia[index].classList.add('ativo');





}