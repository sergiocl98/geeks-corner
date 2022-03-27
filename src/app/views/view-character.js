
const displayCharactersByAnime = (data) =>{
    let characterSection = document.getElementById("characters-section")
    let cardDiv = document.createElement("div")
    cardDiv.setAttribute("class","characters-section__images")
    data.forEach(character => {
        let characterCard = document.createElement("div");
        characterCard.setAttribute("class","character-card")
        //characterCard.setAttribute("style","width: 18rem;")

        let characterImg = document.createElement("img")
        characterImg.src=character.character.images.jpg.image_url;
        characterImg.alt=`${character.character.name} image`
        characterImg.setAttribute("class","character-image")
        characterCard.appendChild(characterImg)

        let card = document.createElement("div")
        card.setAttribute("class","character-image-body")

        let pName = document.createElement("p")
        pName.setAttribute("class","character-image__name")
        pName.innerText=character.character.name

        let pRole = document.createElement("p")
        pRole.setAttribute("class","character-image__role")
        pRole.innerText="Role: " + character.role

        card.appendChild(pName);
        card.appendChild(pRole);
        characterCard.appendChild(card);
        cardDiv.appendChild(characterCard);
    });



    const handleHideSection = () => {
        let characterSection = document.getElementById("characters-section")
        characterSection.innerHTML=""

        let button = document.getElementById("toggle-characters");
        button.removeAttribute("disabled")
    }

    let button = document.createElement("div");
    button.innerHTML=`<button type="button" class="btn btn-primary " id="hide-characters">
                        Hide characters info
                    </button>`
    button.addEventListener("click",handleHideSection)
    characterSection.appendChild(button);
    characterSection.appendChild(cardDiv)
}

const displayCharactersByManga = (data) =>{
    let characterSection = document.getElementById("characters-section")
    let cardDiv = document.createElement("div")
    cardDiv.setAttribute("class","characters-section__images")
    data.forEach(character => {
        let characterCard = document.createElement("div");
        characterCard.setAttribute("class","character-card")
        //characterCard.setAttribute("style","width: 18rem;")

        let characterImg = document.createElement("img")
        characterImg.src=character.character.images.jpg.image_url;
        characterImg.alt=`${character.character.name} image`
        characterImg.setAttribute("class","character-image")
        characterCard.appendChild(characterImg)

        let card = document.createElement("div")
        card.setAttribute("class","character-image-body")

        let pName = document.createElement("p")
        pName.setAttribute("class","character-image__name")
        pName.innerText=character.character.name

        let pRole = document.createElement("p")
        pRole.setAttribute("class","character-image__role")
        pRole.innerText="Role: " + character.role

        card.appendChild(pName);
        card.appendChild(pRole);
        characterCard.appendChild(card);
        cardDiv.appendChild(characterCard);
    });



    const handleHideSection = () => {
        let characterSection = document.getElementById("characters-section")
        characterSection.innerHTML=""

        let button = document.getElementById("toggle-characters");
        button.removeAttribute("disabled")
    }

    let button = document.createElement("div");
    button.innerHTML=`<button type="button" class="btn btn-primary " id="hide-characters">
                        Hide characters info
                    </button>`
    button.addEventListener("click",handleHideSection)
    characterSection.appendChild(button);
    characterSection.appendChild(cardDiv)
}

export {displayCharactersByAnime, displayCharactersByManga};