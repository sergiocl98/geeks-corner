import { fetchRecentEpisodes } from "../api/anime/anime"
import { onLoadAnimePage } from "../scripts/animeList"
import { onLoadMangaPage } from "../scripts/mangaList"

const IconsColored = ["assets/icons8-itachi-uchiha-144.png",
"assets/icons8-naruto-144.png","assets/icons8-tanjiro-kamado-144.png",
"assets/icons8-boruto-uzumaki-144.png","assets/icons8-dragon-ball-128.png","assets/icons8-dragon-ball-legends-200.png",
"assets/icons8-hinata-144.png","assets/icons8-kakashi-hatake-144.png","assets/icons8-marinero-de-la-luna-144.png","assets/icons8-obito-uchiha-144.png","assets/icons8-sarada-uchiha-144.png",
"assets/icons8-son-goku-128.png",
"assets/icons8-tobio-kageyama-144.png",
"assets/icons8-sasuke-uchiha-144.png",
"assets/icons8-shoyo-hinata-144.png",
"assets/icons8-tsunade-144.png"]
const IconsBW = ["assets/icons8-naruto-128.png","assets/icons8-boruto-uzumaki-144 (1).png","assets/icons8-dragon-ball-128.png",
"assets/icons8-hinata-144 (1).png","assets/icons8-itachi-uchiha-144 (1).png","assets/icons8-kakashi-hatake-144 (1).png",
"assets/icons8-marinero-de-la-luna-150.png","assets/icons8-obito-uchiha-144 (1).png","assets/icons8-sarada-uchiha-144 (1).png",
"assets/icons8-son-goku-128 (1).png",
"assets/icons8-tobio-kageyama-144 (1).png",
"assets/icons8-sasuke-uchiha-144 (1).png",
"assets/icons8-tanjiro-kamado-144 (1).png",
"assets/icons8-shoyo-hinata-144 (1).png",
"assets/icons8-tsunade-144 (1).png",
"assets/icons8-itachi-uchiha-144 (1).png"]

const randomColoredIcon = () => {
    return IconsColored[Math.floor(Math.random() * IconsColored.length)]
}
const randomBWIcon = () => {
    return IconsBW[Math.floor(Math.random() * IconsBW.length)]
}

const displayHome = () => {
    let main = document.getElementById("main");
    let section = document.createElement("section")
    section.setAttribute("class","home-section")
    let divAnime = document.createElement("div")
    let divManga = document.createElement("div")

    let h2Anime = document.createElement("h2")
    h2Anime.innerText="Anime"
    let h2Manga = document.createElement("h2")
    h2Manga.innerText="Manga"

    let iconAnime = document.createElement("img")
    let iconManga = document.createElement("img")
    iconAnime.src= randomColoredIcon();
    iconManga.src= randomBWIcon();

    //ANIME
    divAnime.appendChild(h2Anime)
    divAnime.appendChild(iconAnime)
    divAnime.addEventListener("click",handleOnClickAnime);


    //MANGA
    divManga.appendChild(h2Manga)
    divManga.appendChild(iconManga)
    divManga.addEventListener("click",handleOnClickManga);

    //COMBINE DIVS ON SECTION
    section.appendChild(divManga)
    section.appendChild(divAnime)
    //APPEND TO MAIN
    main.appendChild(section);
}


const displayRecentEpisodes = (title) => {
    // GET MAIN SECTION AND CREATE HTML TO INSERT
  const main = document.getElementById('main');
  const section = document.createElement("section");
  section.setAttribute("class", "flex-gallery");
  const sectionTitle = document.createElement("h2");
  sectionTitle.setAttribute("class", "section-title");
  sectionTitle.innerText=title;
  main.appendChild(sectionTitle);
  main.appendChild(section);
  const episodeSections = document.querySelectorAll(".flex-gallery");

  const episodes = episodeSections[episodeSections.length-1]
  const episodeListPromise = fetchRecentEpisodes();
  episodeListPromise.then((episodeList) => {
    episodeList.data.filter(anime => !anime.region_locked)
    .forEach((episode) => {
      const li = document.createElement('li');
      li.id = episode.entry.mal_id;
      li.classList.add('flex-item');
      /* const p = document.createElement('p');
      p.innerHTML = `Nº ${episode.mal_id}`;
      li.appendChild(p); */
      const div = document.createElement('div');
      div.setAttribute('class', 'flex-item-image');
      const span = document.createElement('span');
      span.setAttribute('class', 'flex-item-title');
      span.innerText = episode.entry.title;
      //div.appendChild(span);
      //li.appendChild(span);
      const img = document.createElement('img');
      img.setAttribute('class', 'flex-item-img');
      img.src = episode.entry.images.jpg.image_url;
      div.appendChild(img);
      //li.appendChild(img);
      li.appendChild(div);
      episodes.appendChild(li);

      //LINKS
      const divLinks = document.createElement("div");
      divLinks.setAttribute('class', 'flex-item__episode-info');
      divLinks.appendChild(span)

      let recentEpisodes = episode.episodes;
      recentEpisodes.forEach(ep =>{
        const episodeTitle = document.createElement("a");
        episodeTitle.innerText=ep.title;
        episodeTitle.setAttribute("href",ep.url)
        episodeTitle.setAttribute("Target","_blank")
        divLinks.appendChild(episodeTitle);
      });
      li.appendChild(divLinks);
      //ADD EVENT
      //li.addEventListener("click",handleOnClick)
    });
  });
};

const handleOnClickAnime = () =>{
    let main = document.getElementById("main");
    main.innerHTML=""
    onLoadAnimePage();
}

const handleOnClickManga = () =>{
    let main = document.getElementById("main");
    main.innerHTML=""
    onLoadMangaPage();
}

export {displayHome, displayRecentEpisodes}