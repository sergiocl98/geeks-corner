import { displaySearch,displayAnimeList, displayAnimeListByPopularity, displayAnimeListByStatus } from '../views/view-list-anime';

const onLoadAnimePage = () => {
    onLoadSearch();
    onLoadAnimeListByPopularity("Popular animes",20);
    onLoadAnimeListByStatus("Top airing animes",20,"airing");
    onLoadAnimeList("Shounen",30,3);
}

var onLoadSearch = function() {
  displaySearch();
}

var onLoadAnimeList = function(title,limit,genre) {
  displayAnimeList(title,limit, genre);
}

var onLoadAnimeListByPopularity = function(title,limit) {
  displayAnimeListByPopularity(title,limit);
}

var onLoadAnimeListByStatus= function(title,limit, status) {
  displayAnimeListByStatus(title,limit,status);
}

/* var onLoadAnimeListFilter= function(genre) {
  displayAnimeListByStatus(title,limit,status);
} */


export {onLoadSearch, onLoadAnimePage, onLoadAnimeList, onLoadAnimeListByPopularity,onLoadAnimeListByStatus };
