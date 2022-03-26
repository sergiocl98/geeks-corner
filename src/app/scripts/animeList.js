import { displayAnimeList, displayAnimeListByPopularity, displayAnimeListByStatus } from '../views/view-list';

var onLoadAnimeList = function(title,limit,genre) {
  displayAnimeList(title,limit, genre);
}

var onLoadAnimeListByPopularity = function(title,limit) {
  displayAnimeListByPopularity(title,limit);
}

var onLoadAnimeListByStatus= function(title,limit, status) {
  displayAnimeListByStatus(title,limit,status);
}

export { onLoadAnimeList, onLoadAnimeListByPopularity,onLoadAnimeListByStatus };
