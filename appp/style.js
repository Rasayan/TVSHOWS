const form = document.querySelector('#searchForm');
// const addResults =document.getElementById("keepResults");

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    deleteImgs()
    const searchTerm = form.elements.searchOptions.value;
    const config = {params: { q: searchTerm} };
    const res = await axios.get(` https://api.tvmaze.com/search/shows`, config);
    console.log(res.data);
    makeImages(res.data);
})

const makeImages = (shows) => {
    for(let numb of shows) {
        if(numb.show.image) {
            const image = document.createElement('img');
            const Title = document.createElement('h4');
            const genre = document.createElement('p');
            const div = document.createElement('div');
            //Title text
            Title.textContent = numb.show.name;
            Title.style.textAlign = "center";
            Title.style.margin = "0";
            Title.style.fontFamily = "'Merriweather', serif";
            Title.style.letterSpacing = "1px";
            //Gnere text
            genre.textContent = numb.show.genres;
            genre.style.textAlign = "center";
            genre.style.margin = "3px";
            genre.style.marginBottom = "1.2em"
            genre.style.fontFamily = "'Noto Sans Display', sans-serif";
            //Image file
            image.src = numb.show.image.medium;
            image.style.margin = "5px"
            image.style.marginBottom = "4px"
            image.style.alignItems = "center";
            image.style.objectFit = "cover";
            //div container
            div.className = "myStyle";
            div.style.backgroundColor = "#fed9b7"
            div.style.padding = "10px"
            div.style.width = "220px";
            div.style.height = "378px";
            div.style.marginBottom = "10px"
            div.style.borderRadius = "10px"
            document.getElementById("keepResults").appendChild(div).appendChild(image);
            document.getElementById("keepResults").appendChild(div).appendChild(Title);
            document.getElementById("keepResults").appendChild(div).appendChild(genre);
        }
    }
}

const deleteImgs = function () {
    const startHead = document.querySelector('#gettingStarted');
    if(startHead) {
        startHead.remove();
    }
    
    const imgs = document.querySelectorAll('img');
     for(let img of imgs){
        img.remove();
    }
    const heading = document.querySelectorAll('h4');
     for(let head of heading){
        head.remove();
    }
    const para = document.querySelectorAll('p');
     for(let par of para){
        par.remove();
    }
    const di = document.querySelectorAll('.myStyle');
     for(let d of di){
        d.remove();
    }
}

