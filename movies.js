import './style.css'
import * as data from '/data.json';

//html element that will be edited
const section = document.querySelector('#movies');

//initiates the object to then add the data
var movies = {
  titles: [],
  year: [],
  src: [],
  srcLocal: [],
  description: [],
  avgRating: []
}
//Puts all the json information in a object to read it more easily
var sumRating;
var average;
for(var i =0; i<data.movies.length; i++){
  movies.titles.push( data.movies[i].title  );
  movies.year.push  ( data.movies[i].year   );
  movies.src.push   ( data.movies[i].image  );
  movies.srcLocal.push   ( data.movies[i].imageLocal  );
  movies.description.push   ( data.movies[i].description  );
  
  sumRating = 0;
  for(j=0;j< data.movies[i].rating.length; j++){
    sumRating += data.movies[i].rating[j];
  }
  average = sumRating / data.movies[i].rating.length
  movies.avgRating.push (Math.round(average * 100) / 100);
}
/* MOVIES SECTIONS */
//Writes all the films from the movies section with the information on the json
//TRANSFORMAR ISSO NUMA FUNÇÃO QUE RETORNA TODA A DIV CRIADA DAÍ SÓ CHAMAR A FUNÇÃO E ApendiceChild NA SESSÃO 
for(var j = 0; j < movies.titles.length; j++){
  if(j % 2 == 0){
    section.innerHTML+= `
      <div class ="movies-even">
        <div class="movies-description">
          <p> ${movies.description[j]} </p>

          <form>
            <div class="form-container">

              <div class="input-container">
              
                <label class="rank-input" for="vol">Rank (between 0-5):</label>
                <input class="rank-input" type="range" name="vol" min="0" max="5">
                <br><br>
                </div>
                
              <div>
                <input class="button" type="submit" value="Submit">
              </div>

            </div>
          </form>

        </div>

        <div>
          <h1 class="movies-title">  ${movies.titles[j]} </h1>
          <h3 class="movies-year">  ${movies.year[j]} </h3>
          <picture>
          <source srcset="${movies.src[j]}">
          <source srcset="${movies.srcLocal[j]}">
            <img class= "movies-image" src = "${movies.srcLocal[j]}" width="300px"> </img>
          </picture>
        </div>
      </div>
    `
  } else {
    section.innerHTML+= `
    <div class ="movies-odd">
      <div>
        <h1 class="movies-title">  ${movies.titles[j]} </h1>
        <h3 class="movies-year">  ${movies.year[j]} </h3>
        <picture>
        <source srcset="${movies.src[j]}">
        <source srcset="${movies.srcLocal[j]}">
          <img class= "movies-image" src = "${movies.srcLocal[j]}" width="300px"> </img>
        </picture>
      </div>

      <div class="movies-description">
        <p> ${movies.description[j]} </p>

        <form>
          <label for="vol">Rank (between 0-5):</label>
          <input type="range" name="vol" min="0" max="5">
          <br><br>
          <input class="button" type="submit" value="Submit" >
        </form>
        
      </div>
      </div>
      `
    }
  }

/* RANKING SECTION */
//Saves the order of the highests rankings
var rankIndex = [ ];

//copy all the ratings to another array so now I can change the numbers to find the info I need
var avgRantings = [];
for(i=0;i<movies.avgRating.length;i++){
  avgRantings[i] = movies.avgRating[i];
}

//Code to find the highests ranking, I spent way to much time to do this, I think it could be better, but hey, it works
//made it into a function to avoid ignoring equal numbers
function seekHighest(array,number){
  for(j = 0;j < array.length; j++){
    if(array[j] == number){
      return j;
    }
  }
}
var highestNumber;
var highestNumberIndex;
//find the highest number in the array then find its index using the function above then "deletes" this number and saves its position
for(i = 0; i < 5; i++){
  highestNumber       = Math.max.apply(null,avgRantings)
  highestNumberIndex  = seekHighest(avgRantings,highestNumber);
  rankIndex[i]        = highestNumberIndex;
  avgRantings[highestNumberIndex] = null;

}
//writes the title of the top 5 movies in the html
for(i = 0; i< 5;i++){
  console.log(movies.avgRating[rankIndex[i]]);
  document.querySelector('#rank-' + (i+1) +' h2').innerHTML = movies.titles[rankIndex[i]];
  document.querySelector('#rank-' + (i+1) +' img').src = movies.srcLocal[rankIndex[i]];
  document.querySelector('#rank-' + (i+1) +' h3').innerHTML = movies.avgRating[rankIndex[i]];
}