import { fetchMangaList, fetchMangaListByPopularity, fetchMangaListByStatus, fetchMangaById } from '../api/manga/manga';
import { displayDetailManga } from './view-detail-manga';

const handleOnClick = (e) =>{
    console.log("EVENTO",e)
    console.log("TARGET",e.currentTarget)
    let id = e.currentTarget.id;
    const detailData = fetchMangaById(e.currentTarget.id);
    detailData.then((data)=> displayDetailManga(data.data,id))
    //displayDetail(detailData)
}
const displayMangaList = (title, offset = 20,  genre) => {
    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const mangaSections = document.querySelectorAll(".flex-gallery");

  const mangas = mangaSections[mangaSections.length-1]
  const mangaListPromise = fetchMangaList(offset, genre);
  mangaListPromise.then((mangaList) => {
    mangaList.data.forEach((manga) => {
      const li = document.createElement('li');
      li.id = manga.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${manga.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      div.setAttribute('class', 'flex-item-image');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = manga.title;
      //div.appendChild(h3);
      //li.appendChild(h3);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = manga.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      mangas.appendChild(li);

      //ADD EVENT
      li.addEventListener("click",handleOnClick)
    });
  });
};


//METHOD TO GET ANIMES ORDERED BY POPULARITY
const displayMangaListByPopularity = (title, offset = 20,  genre) => {

    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const mangaSections = document.querySelectorAll(".flex-gallery");

  const mangas = mangaSections[mangaSections.length-1]
  if (offset === 0) {
    mangas.innerHTML = ''; // clean content
  }
  const mangaListPromise = fetchMangaListByPopularity(offset, genre);
  mangaListPromise.then((mangaList) => {
    mangaList.data.forEach((manga) => {
      const li = document.createElement('li');
      li.id = manga.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${manga.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      div.setAttribute('class', 'flex-item-image');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = manga.title;
      //div.appendChild(h3);
      //li.appendChild(h3);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = manga.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      mangas.appendChild(li);

      //ADD EVENT
      li.addEventListener("click",handleOnClick)
    });
  });
};

//METHOD TO GET ANIMES ORDERED BY POPULARITY
const displayMangaListByStatus = (title, offset = 20,  status) => {

    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const mangaSections = document.querySelectorAll(".flex-gallery");

  const mangas = mangaSections[mangaSections.length-1]
  if (offset === 0) {
    mangas.innerHTML = ''; // clean content
  }
  const mangaListPromise = fetchMangaListByStatus(offset, status);
  mangaListPromise.then((mangaList) => {
    mangaList.data.forEach((manga) => {
      const li = document.createElement('li');
      li.id = manga.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${manga.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      div.setAttribute('class', 'flex-item-image');
      const h3 = document.createElement('h3');
      h3.setAttribute('class', 'flex-item-title');
      h3.innerText = manga.title;
      //div.appendChild(h3);
      //li.appendChild(h3);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = manga.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      mangas.appendChild(li);

      //ADD EVENT
      li.addEventListener("click",handleOnClick)
    });
  });
};


export { displayMangaList, displayMangaListByPopularity, displayMangaListByStatus};