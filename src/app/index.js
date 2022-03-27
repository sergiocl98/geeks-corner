import { onLoadAnimeList, onLoadAnimeListByPopularity, onLoadAnimeListByStatus } from './scripts/animeList';
import {onLoadHome} from "./scripts/home"


// Styles SCSS (don't remove)
import './styles/styles.scss';
import './styles/header.scss';
import './styles/flexGallery.scss';
import './styles/paginator.scss';
import './styles/detail.scss';
import './styles/characterSection.scss';
import './styles/homeSection.scss';

var addListeners = function() {
    document.getElementById("main-logo").addEventListener("click", ()=> window.location.reload());
}

window.onload = function() {
    onLoadHome();
    addListeners();
};