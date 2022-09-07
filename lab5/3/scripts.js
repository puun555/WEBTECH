let requestURL = 'country.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();


function ExtractData(data) {
    for (let i = 0; i < data.country.length ; i++) {
        document.write(`
        <div style="display:flex;">
        <div style="width:40%; margin: 10px;">
        Name : ${data.country[i].name} <br> 
        Capital : ${data.country[i].capital} <br>
        Population : ${data.country[i].population} <br>
        Region : ${data.country[i].region} <br>
        Location : ${data.country[i].lacation} <br>
        Border : ${data.country[i].borders} <br>
        </div>
        <div><img src='${data.country[i].flag}' width="180px" height="120px" style="object-fit: cover; margin:10px;"></div>
        </div>`)
    }

}