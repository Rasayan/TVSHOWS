const form = document.querySelector('#searchForm');
// const addResults =document.getElementById("keepResults");

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    deleteImgs()
    const searchCode = document.getElementById("searchCode").value;
    console.log(searchCode);
    const searchDate = document.getElementById("searchDate").value;
    console.log(searchDate);
    // const config = {params: { q: searchTerm} };
    const res = await axios.get(` https://api.tvmaze.com/schedule?country=${searchCode}&date=${searchDate}`);
    console.log(res.data);
    makeImages(res.data);
})


const makeImages = (shows) => {
    for(let numb of shows) {
        if(numb.show.image) {
            const image = document.createElement('img');
            const name = document.createElement('h4');
            const gender = document.createElement('p');
            const country = document.createElement('p');
            const div = document.createElement('div');
            //Title text
            name.textContent = numb.show.name;
            name.style.textAlign = "center";
            name.style.margin = "0";
            name.style.fontFamily = "'Merriweather', serif";
            name.style.letterSpacing = "1px";
            //Gnere text
            gender.textContent = numb.name;
            gender.style.textAlign = "center";
            gender.style.margin = "3px";
            gender.style.marginBottom = "0.4em"
            gender.style.fontFamily = "'Noto Sans Display', sans-serif";

            
            //Image file
            image.src = numb.show.image.medium;
            image.style.margin = "5px"
            image.style.marginBottom = "4px"
            image.style.alignItems = "center";
            image.style.objectFit = "cover";
            //div container
            div.className = "myStyle";
            div.style.backgroundColor = "#d6eadf"
            div.style.padding = "10px"
            div.style.width = "220px";
            div.style.height = "388px";
            div.style.marginBottom = "10px"
            div.style.borderRadius = "10px"
            document.getElementById("keepResults").appendChild(div).appendChild(image);
            document.getElementById("keepResults").appendChild(div).appendChild(name);
            document.getElementById("keepResults").appendChild(div).appendChild(gender);
            
            if(numb.show.genre) {
                country.textContent = numb.show.genre;
                country.style.textAlign = "center";
                country.style.margin = "3px";
                country.style.marginBottom = "1.2em"
                country.style.fontFamily = "'Noto Sans Display', sans-serif";
                document.getElementById("keepResults").appendChild(div).appendChild(country);
            }
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