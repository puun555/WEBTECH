let requestURL = 'movie.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();


function ExtractData(data) {
    document.write(`<body><div style="display:flex;justify-content:center;margin-top:11%">`)
    for (let i = 0 ; i < data.movies.showing.length ; i++) {
        document.write(`
        <div class="card" style="text-align: center; margin: 10px; border: 1px solid black; width:230px; border-radius:10px;">
            <img src="${data.movies.showing[i].poster}" width="200px"> <br>
            <div>
                ${data.movies.showing[i].title_en} <br>
                Release Date : ${data.movies.showing[i].releasedate} <br>
            </div>
            <button class="bn" type="button"> เช็ครอบฉาย </button>
        </div>
        
        `)
    }
    document.write(`</div></boby>`)

}