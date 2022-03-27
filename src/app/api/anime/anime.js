import {AnimeUtil} from "../../utils/AnimeUtil"
import {EpisodeUtil} from "../../utils/EpisodeUtil"

const URL = "https://api.jikan.moe/v4/"

const fetchAnimeList = async (limit, genre) => {

    //BUILD CALL TO API
    let url = limit ? URL + "anime?type=tv&limit="+limit : URL + "anime?type=tv";
    if(genre!== undefined) {
        url = url + "&genres=" + genre;
    }


    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => AnimeUtil.handleError(error))
    console.log("Objeto respuesta",response)
    if(response.status !== 200) {
        AnimeUtil.handleError({message: 'Error'});
        AnimeUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}

const fetchAnimeListByPopularity = async (limit) => {

    //BUILD CALL TO API
    let url = limit ? URL + "anime?order_by=popularity&sort=desc&type=tv&limit="+limit : URL + "anime";


    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => AnimeUtil.handleError(error))
    console.log("Objeto respuesta",response)
    if(response.status !== 200) {
        AnimeUtil.handleError({message: 'Error'});
        AnimeUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}


//STATUS: "airing" "complete" "upcoming"
const fetchAnimeListByStatus = async (limit, status) => {

    let url = URL + "anime?order_by=score&sort=desc&type=tv";
    //BUILD CALL TO API

    if(limit){
        url = url + "&limit="+limit;
    }
    if(status) {
        url = url + "&status="+status;
    }


    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => AnimeUtil.handleError(error))
    if(response.status !== 200) {
        AnimeUtil.handleError({message: 'Error'});
        AnimeUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}

const fetchAnimeById = async (id) => {

    //BUILD CALL TO API
    let url =  URL + "anime/"+id ;

    console.log(url)
    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => AnimeUtil.handleError(error))

    if(response.status !== 200) {
        AnimeUtil.handleError({message: 'Error'});
        AnimeUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    console.log("retorno respuesta",data)
    return data;
}

const fetchAnimeCharacters = async (id) => {

    //BUILD CALL TO API
    let url =  URL + "anime/"+id+"/characters" ;

    console.log(url)
    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => AnimeUtil.handleError(error))

    if(response.status !== 200) {
        AnimeUtil.handleError({message: 'Error'});
        AnimeUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    return data;
}

const fetchRecentEpisodes = async () => {

    //BUILD CALL TO API
    let url =  URL + "watch/episodes" ;

    console.log(url)
    const response = await fetch(url)
    //.then ( res => res.json())
    .catch((error) => EpisodeUtil.handleError(error))

    if(response.status !== 200) {
        EpisodeUtil.handleError({message: 'Error'});
        EpisodeUtil.toggleLoader();
        return Promise.reject;
    }
    const data = await response.json();
    return data;
}

export {fetchAnimeList,fetchAnimeListByPopularity, fetchAnimeListByStatus, fetchAnimeById,fetchAnimeCharacters, fetchRecentEpisodes};