class MangaUtil {
    static toggleLoader(){
        document.getElementById("loader").classList.toggle("is-hidden");
    }

     static handleError(error) {
        const mangaHTMLString =
        `<div class="flex-item">
            <p class="flex-item-error">Error: Hubo un problema con la petición Fetch: ${error.message}</p>
          </div>`;
        //document.getElementById('main').innerHTML = mangaHTMLString;
    }
}

export { MangaUtil };