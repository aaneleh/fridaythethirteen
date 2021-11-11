import './style.css'

function changeHeader(){
  const header = document.getElementById('header');
  this.scrollY > 150 ? header.classList.add('smaller-header') : header.classList.remove('smaller-header');
  /* jeito com if e else comum
  if(this.scrollY >= 100){
    header.classList.add('smaller-header');
  } else {
    header.classList.remove('smaller-header');
  }
  */
}

window.addEventListener('scroll',changeHeader);