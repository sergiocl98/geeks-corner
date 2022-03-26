import { fetchAnimeList, fetchAnimeListByPopularity, fetchAnimeListByStatus, fetchAnimeById } from '../api/anime/anime';
import { displayDetail } from './view-detail';

const handleOnClick = (e) =>{
    console.log("EVENTO",e)
    console.log("TARGET",e.currentTarget)
    let id = e.currentTarget.id;
    const detailData = fetchAnimeById(e.currentTarget.id);
    detailData.then((data)=> displayDetail(data.data,id))
    //displayDetail(detailData)
}
const displayAnimeList = (title, offset = 20,  genre) => {
    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const animeSections = document.querySelectorAll(".flex-gallery");

  const animes = animeSections[animeSections.length-1]
  const animeListPromise = fetchAnimeList(offset, genre);
  animeListPromise.then((animeList) => {
    animeList.data.forEach((anime) => {
      const li = document.createElement('li');
      li.id = anime.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${anime.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = anime.title;
      //div.appendChild(h3);
      //li.appendChild(h3);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = anime.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      animes.appendChild(li);

      //ADD EVENT
      li.addEventListener("click",handleOnClick)
    });
  });
};


//METHOD TO GET ANIMES ORDERED BY POPULARITY
const displayAnimeListByPopularity = (title, offset = 20,  genre) => {

    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const animeSections = document.querySelectorAll(".flex-gallery");

  const animes = animeSections[animeSections.length-1]
  if (offset === 0) {
    animes.innerHTML = ''; // clean content
  }
  const animeListPromise = fetchAnimeListByPopularity(offset, genre);
  animeListPromise.then((animeList) => {
    animeList.data.forEach((anime) => {
      const li = document.createElement('li');
      li.id = anime.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${anime.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = anime.title;
      //div.appendChild(h3);
      //li.appendChild(h3);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = anime.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      animes.appendChild(li);

      //ADD EVENT
      li.addEventListener("click",handleOnClick)
    });
  });
};

//METHOD TO GET ANIMES ORDERED BY POPULARITY
const displayAnimeListByStatus = (title, offset = 20,  status) => {

    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const animeSections = document.querySelectorAll(".flex-gallery");

  const animes = animeSections[animeSections.length-1]
  if (offset === 0) {
    animes.innerHTML = ''; // clean content
  }
  const animeListPromise = fetchAnimeListByStatus(offset, status);
  animeListPromise.then((animeList) => {
    animeList.data.forEach((anime) => {
      const li = document.createElement('li');
      li.id = anime.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${anime.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = anime.title;
      //div.appendChild(h3);
      //li.appendChild(h3);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = anime.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      animes.appendChild(li);

      //ADD EVENT
      li.addEventListener("click",handleOnClick)
    });
  });
};


export { displayAnimeList, displayAnimeListByPopularity, displayAnimeListByStatus};