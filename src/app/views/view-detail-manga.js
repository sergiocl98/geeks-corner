import { fetchMangaCharacters } from "../api/manga/manga";
import { displayCharactersByManga } from "./view-character";


const displayDetailManga = (data,id) =>{

    console.log("DIsplay", data)
    const detailSection= document.getElementById("detail");
    detailSection.innerHTML=""
    let div = document.createElement("div")
    div.setAttribute("class", "detail-view")

    //TITLE
    let h2 = document.createElement("h2");
    h2.innerText= data.title;
    h2.setAttribute("class", "detail-view__title")
    div.appendChild(h2);

    //SYNOPSIS
    let p = document.createElement("p");
    p.innerText= data.synopsis;
    p.setAttribute("class", "detail-view__synopsis")
    div.appendChild(p);

    //GENRES
    let genres = data.genres.map(genre => genre.name);
    let pGenres = document.createElement("p");
    pGenres.innerText= genres.join(", ");
    pGenres.setAttribute("class", "detail-view__genres")
    div.appendChild(pGenres);

    //VOLUMES
    let volumes = document.createElement("p");
    let numEpisodes = data.volumes !== null ? data.volumes : "Unknown";
    volumes.innerText= "Episodes: " + numEpisodes;
    volumes.setAttribute("class", "detail-view__volumes")
    div.appendChild(volumes);

    //RANK
    let rank = document.createElement("p");
    rank.innerText= "Rank: " + data.rank;
    rank.setAttribute("class", "detail-view__rank")
    div.appendChild(rank);

    //SCORE
    let score = document.createElement("p");
    let scoreData = data.score !== null ? data.score : "??";
    score.innerHTML= `Score: ${scoreData} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-star-fill" viewBox="0 0 16 16">
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
  </svg> ` ;
    score.setAttribute("class", "detail-view__score")
    div.appendChild(score);

    //STATUS
    let status = document.createElement("p");
    if(data.status === "Finished Airing"){
        status.innerHTML= `Status: ${data.status} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-record-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
      </svg>`;
    }
    else if(data.status === "Currently Airing"){
        status.innerHTML= `Status: ${data.status} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-record-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
      </svg>`;
    }
    else if(data.status === "Not yet aired"){
        status.innerHTML= `Status: ${data.status} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" class="bi bi-record-fill" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10z"/>
      </svg>`;
    }
    status.setAttribute("class", "detail-view__status")
    div.appendChild(status);

    // IMAGE
    let divImage = document.createElement("div");
    divImage.setAttribute("class", "detail-view-multimedia__image-container")
    let image = document.createElement("img");
    image.src= data.images.jpg.large_image_url;
    image.setAttribute("class", "detail-view-multimedia__image")
    divImage.appendChild(image)
    

    //GET CHARACTERS
    const handleToggleCharacters = () => {
        const detailCharacters = fetchMangaCharacters(id);
        detailCharacters.then((data)=> displayCharactersByManga(data.data))

        let button = document.getElementById("toggle-characters");
        button.setAttribute("disabled",true);
    }
    let button = document.createElement("div");
    button.innerHTML=`<button id="toggle-characters" type="button" class="btn btn-primary detail-view__toggle-characters">
                        Get characters info
                    </button>`
    button.addEventListener("click",handleToggleCharacters)
    div.appendChild(button);

    //CHARACTERS SECTION
    let charactersSection = document.createElement("section")
    charactersSection.id="characters-section"
    charactersSection.setAttribute("class","characters-section")
    



    let mainDetail = document.createElement("div")
    mainDetail.setAttribute("class","detail-main")
    mainDetail.appendChild(div);
    mainDetail.appendChild(divImage);
    detailSection.appendChild(mainDetail);
    detailSection.appendChild(charactersSection);
}

export {displayDetailManga}