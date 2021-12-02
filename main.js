import './style.css'

/* DIMINUIR O HEADER */
function changeHeader(){
  const header = document.getElementById('header');
  
  if(this.scrollY >= 100){
    header.style.removeProperty('height');
    header.classList.add('smaller-header');
  } else {
    header.classList.remove('smaller-header');
  }
}
window.addEventListener('scroll',changeHeader);

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

/* DIMINUIR O HEADER */
function showArrow(){
  const arrow = document.getElementById('return-arrow');

  if(this.scrollY >= 1000){
    arrow.style.right = "50px";
  } else {
    arrow.style.right = "-50px";
  }
}
window.addEventListener('scroll',showArrow);

/* INTERATIVIDADE COM OS GIFS */
const gif_1 = document.getElementById('gif_1');
  gif_1.addEventListener("mouseover",
    function() {
      gif_1.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Primeira-Kill-gif.gif";
    });
  gif_1.addEventListener("mouseout",
    function(){
      gif_1.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Primeira-Kill-LastFrame.png";
    });

const gif_2 = document.getElementById('gif_2');
  gif_2.addEventListener("mouseover",
    function() {
      gif_2.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Faca-Jogada-gif.gif";

    });
  gif_2.addEventListener("mouseout",
    function(){
      gif_2.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Faca-Jogada-LastFrame.png";
    });

const gif_3 = document.getElementById('gif_3');
  gif_3.addEventListener("mouseover",
    function() {
      gif_3.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Quebrando-a-porta-gif.gif";
    });
  gif_3.addEventListener("mouseout",
    function(){
      gif_3.src = "https://raw.githubusercontent.com/aaneleh/fridaythethirteen/main/assets/gifs/Quebrando-a-porta-LastFrame.png";
    });