import {MangaUtil} from "../../utils/MangaUtil"

const URL = "https://api.jikan.moe/v4/"

const fetchMangaList = async (limit, genre) => {

    //BUILD CALL TO API
    let url = limit ? URL + "manga?type=manga&limit="+limit : URL + "manga?type=manga";
    if(genre!== undefined) {
        url = url + "&genres=" + genre;
    }


    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => MangaUtil.handleError(error))
    console.log("Objeto respuesta",response)
    if(response.status !== 200) {
        MangaUtil.handleError({message: 'Error'});
        MangaUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}

const fetchMangaListByPopularity = async (limit) => {

    //BUILD CALL TO API
    let url = limit ? URL + "manga?order_by=popularity&sort=desc&type=manga&limit="+limit : URL + "manga";


    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => MangaUtil.handleError(error))
    console.log("Objeto respuesta",response)
    if(response.status !== 200) {
        MangaUtil.handleError({message: 'Error'});
        MangaUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}


//STATUS: "airing" "complete" "upcoming"
const fetchMangaListByStatus = async (limit, status) => {

    let url = URL + "manga?order_by=score&sort=desc&type=manga";
    //BUILD CALL TO API

    if(limit){
        url = url + "&limit="+limit;
    }
    if(status) {
        url = url + "&status="+status;
    }


    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => MangaUtil.handleError(error))
    if(response.status !== 200) {
        MangaUtil.handleError({message: 'Error'});
        MangaUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}

const fetchMangaById = async (id) => {

    //BUILD CALL TO API
    let url =  URL + "manga/"+id ;

    console.log(url)
    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => MangaUtil.handleError(error))

    if(response.status !== 200) {
        MangaUtil.handleError({message: 'Error'});
        MangaUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}

const fetchMangaCharacters = async (id) => {

    //BUILD CALL TO API
    let url =  URL + "manga/"+id+"/characters" ;

    console.log(url)
    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => MangaUtil.handleError(error))

    if(response.status !== 200) {
        MangaUtil.handleError({message: 'Error'});
        MangaUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    return data;
}

const fetchMangaSearch = async (value) => {

    //BUILD CALL TO API
    let url =  URL + "manga?q="+value;

    const response = await fetch(url)
    .catch((error) => MangaUtil.handleError(error))
    if(response.status !== 200) {
        MangaUtil.handleError({message: 'Error'});
        MangaUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();

    return data;
}

export {fetchMangaList,fetchMangaListByPopularity, fetchMangaListByStatus, fetchMangaById,fetchMangaCharacters, fetchMangaSearch};