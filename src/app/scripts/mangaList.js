import { displayMangaList, displayMangaListByPopularity, displayMangaListByStatus, displaySearch } from '../views/view-list-manga';

const onLoadMangaPage = () => {
    onLoadSearch()
    onLoadMangaListByPopularity("Popular mangas",20);
    onLoadMangaListByStatus("Top airing mangas",20,"airing");
    onLoadMangaList("Shounen",30,3);
}

var onLoadSearch = function() {
  displaySearch();
}

var onLoadMangaList = function(title,limit,genre) {
  displayMangaList(title,limit, genre);
}

var onLoadMangaListByPopularity = function(title,limit) {
  displayMangaListByPopularity(title,limit);
}

var onLoadMangaListByStatus= function(title,limit, status) {
  displayMangaListByStatus(title,limit,status);
}

/* var onLoadMangaListFilter= function(genre) {
  displayMangaListByStatus(title,limit,status);
} */


export {onLoadMangaPage, onLoadMangaList, onLoadMangaListByPopularity,onLoadMangaListByStatus };
