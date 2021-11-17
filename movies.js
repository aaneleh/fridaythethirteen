import './style.css'
import * as data from '/data.json';

const section = document.querySelector('#movies');

var movies = {
  titles: [],
  year: [],
  src: [],
  srcLocal: [],
  description: [],
  rating: [ [ ] ]
}

for(var i =0; i<data.movies.length; i++){
  movies.titles.push( data.movies[i].title  );
  movies.year.push  ( data.movies[i].year   );
  movies.src.push   ( data.movies[i].image  );
  movies.srcLocal.push   ( data.movies[i].imageLocal  );
  movies.description.push   ( data.movies[i].description  );
}

for(var j = 0; j< movies.titles.length; j++){
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


