import {displayHome, displayRecentEpisodes} from "../views/view-home"

const onLoadHome = function() {
    displayHome();
    displayRecentEpisodes("Recent episodes");
  }

export {onLoadHome}