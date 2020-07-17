// pegar o container do texto
const postWrap = document.querySelector('.post-wrap');
// criando a barra
let bar = document.createElement('div');

// estilizando a barra
bar.style.height = '4px';
bar.style.width = '0';
bar.style.backgroundColor = '#6633cc';
bar.style.position = 'fixed';
bar.style.top = '0';
bar.style.left = '0';
bar.style.zIndex = '9999';
bar.style.transition = '0.2s';

// adiciona a barra no corpo da página
document.body.append(bar);

// atualizar a barra
function updateBar() {
  // o tamanho da caixa que contém o texto
  const textHeight = postWrap.offsetHeight;
  // verificar em que posição da página estou
  const pagePositionY = window.pageYOffset;

  const updatedBar = (pagePositionY * 100) / textHeight;

  bar.style.width = updatedBar + '%';
}

window.addEventListener('load', () => {
  // verificar o movimento do scroll
  document.addEventListener('scroll', updateBar);
});
