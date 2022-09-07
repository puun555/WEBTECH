let requestURL = 'question.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        ExtractData(JSON.parse(request.responseText));
    }
};
request.open("GET", requestURL, true);
request.send();

function ExtractData(data) {
    document.write("<h1> Quiz1 </h1>")
    for (let i = 0; i < data.quiz.length; i++) {
        document.write( `${i+1} <b> ${data.quiz[i].question}` +"<br>" + "<br>")
        for (let j in data.quiz[i].answers) {
            if (j != "correct") {
                document.write("<input type='radio' name='puun" + i +"'></input>" + data.quiz[i].answers[j] + "<br>")
            }
            else {
                document.write("<br>")
            }
            // document.write(j)
        }
        // document.write( "<input type='radio' name='puun'></input>" + `${data.quiz[i].answers.a}` +"<br>")
        // document.write( "<input type='radio' name='puun'></input>" + `${data.quiz[i].answers.b}` +"<br>")
        // document.write( "<input type='radio' name='puun'></input>" + `${data.quiz[i].answers.c}` +"<br>")
        // document.write("<br>")
    }

}

