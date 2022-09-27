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
    for (let i = 0; i < data.quiz.length; i++) {
        let point1 = document.createTextNode(i+1)
        let question = document.createTextNode(data.quiz[i].question)
        let answersA = document.createTextNode(data.quiz[i].answers.a)
        let answersB = document.createTextNode(data.quiz[i].answers.b)
        let answersC = document.createTextNode(data.quiz[i].answers.c)
        let correct = document.createTextNode(data.quiz[i].answers.correct)
        // console.log(question)
        // console.log(answersA)
        // console.log(answersB)
        // console.log(answersC)
        // console.log(correct)

        let newtbl = document.createElement("tbody")
        let qbox = document.createElement("tr")
        let point = document.createElement("th")
        let q1 = document.createElement("th")
        let a1 = document.createElement("th")
        let a2 = document.createElement("th")
        let a3 = document.createElement("th")
        let coans = document.createElement("th")

        point.appendChild(point1)
        q1.appendChild(question)
        a1.appendChild(answersA)
        a2.appendChild(answersB)
        a3.appendChild(answersC)
        coans.appendChild(correct)

        qbox.appendChild(point)
        qbox.appendChild(q1)
        qbox.appendChild(a1)
        qbox.appendChild(a2)
        qbox.appendChild(a3)
        qbox.appendChild(coans)

        newtbl.appendChild(qbox)
        document.getElementById('tables').appendChild(newtbl)
    }
}
let num = 3
const insert = () => {
    num++
    let num1 =  document.createTextNode(num)
    let new_q = document.getElementById('question').value
    let new_a1 = document.getElementById('ans_a').value
    let new_a2 = document.getElementById('ans_b').value
    let new_a3 = document.getElementById('ans_c').value
    let new_correct = ""

    if (document.getElementById('correction_a').checked) {
        new_correct += document.getElementById('correction_a').value
    }
    else if (document.getElementById('correction_b').checked) {
        new_correct += document.getElementById('correction_b').value
    }
    else {
        new_correct += document.getElementById('correction_c').value
    }

    let nnew_q = document.createTextNode(new_q)
    let nnew_a1 = document.createTextNode(new_a1)
    let nnew_a2 = document.createTextNode(new_a2)
    let nnew_a3 = document.createTextNode(new_a3)
    let nnew_correct = document.createTextNode(new_correct)

    // console.log(new_q);
    // console.log(new_a1);
    // console.log(new_a2);
    // console.log(new_a3);
    // console.log(new_correct);

    let newtbl = document.createElement("tbody")
    let qbox = document.createElement("tr")
    let point = document.createElement("th")
    let q1 = document.createElement("th")
    let a1 = document.createElement("th")
    let a2 = document.createElement("th")
    let a3 = document.createElement("th")
    let coans = document.createElement("th")

    point.appendChild(num1)
    q1.appendChild(nnew_q)
    a1.appendChild(nnew_a1)
    a2.appendChild(nnew_a2)
    a3.appendChild(nnew_a3)
    coans.appendChild(nnew_correct)

    qbox.appendChild(point)
    qbox.appendChild(q1)
    qbox.appendChild(a1)
    qbox.appendChild(a2)
    qbox.appendChild(a3)
    qbox.appendChild(coans)

    newtbl.appendChild(qbox)
    document.getElementById('tables').appendChild(newtbl)
}