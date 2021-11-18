import './style.css'

/* DIMINUIR O HEADER */
function changeHeader(){
  const header = document.getElementById('header');
  //const headerIcon = document.querySelector('#header svg');

  /*
  this.scrollY > 150 ? header.classList.add('smaller-header') : header.classList.remove('smaller-header');
  this.scrollY > 150 ? headerIcon.classList.add('smaller-header-icon') : headerIcon.classList.remove('smaller-header-icon');
  */
  
  if(this.scrollY >= 100){
    header.classList.add('smaller-header');
  } else {
    header.classList.remove('smaller-header');
  }
  
}
window.addEventListener('scroll',changeHeader);

/* INTERATIVIDADE COM OS GIFS */
const gif_1 = document.getElementById('gif_1');
  gif_1.addEventListener("mouseover",
    function() {
      //gif_1.src = "assets/gifs/Primeira-Kill-gif.gif";
      gif_1.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Primeira-Kill-gif.gif";
    });
  gif_1.addEventListener("mouseout",
    function(){
      //gif_1.src = "assets/gifs/Primeira-Kill-LastFrame.png";
      gif_1.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Primeira-Kill-LastFrame.png";
    });

const gif_2 = document.getElementById('gif_2');
  gif_2.addEventListener("mouseover",
    function() {
      //gif_2.src = "assets/gifs/Faca-Jogada-gif.gif";
      gif_2.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Faca-Jogada-gif.gif";

    });
  gif_2.addEventListener("mouseout",
    function(){
      //gif_2.src = "assets/gifs/Faca-Jogada-LastFrame.png";
      gif_2.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Faca-Jogada-LastFrame.png";
    });

const gif_3 = document.getElementById('gif_3');
  gif_3.addEventListener("mouseover",
    function() {
      //gif_3.src = "assets/gifs/Quebrando-a-porta-gif.gif";
      gif_3.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Quebrando-a-porta-gif.gif";
    });
  gif_3.addEventListener("mouseout",
    function(){
      //gif_3.src = "assets/gifs/Quebrando-a-porta-LastFrame.png";
      gif_3.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Quebrando-a-porta-LastFrame.png";
    });

/* LISTA DE CONTEUDO */
const openList = document.getElementById('open-content-list');
const closeList = document.getElementById('close-content-list');

const list = document.getElementById('content-list');
openList.onclick = function(){
  list.classList.toggle('active');
}
closeList.onclick = function(){
  list.classList.remove('active');
}