import { onLoadAnimeList, onLoadAnimeListByPopularity, onLoadAnimeListByStatus } from './scripts/animeList';
import { onLoadExperience, toggleExperience } from './scripts/experience';

// Styles SCSS (don't remove)
import './styles/styles.scss';
import './styles/header.scss';
import './styles/flexGallery.scss';
import './styles/paginator.scss';
import './styles/detail.scss';
import './styles/characterSection.scss';

var addListeners = function() {
    //document.getElementById("btn_hide_experience").addEventListener("click", toggleExperience);
}

window.onload = function() {
    onLoadAnimeListByPopularity("Popular animes",20);
    onLoadAnimeListByStatus("Top airing animes",20,"airing");
    onLoadAnimeList("Shounen",30,3);
    onLoadExperience();

    addListeners();
};