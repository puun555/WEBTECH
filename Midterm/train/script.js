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
    for (let i = 0 ; i < data.quiz.length ; i++) {
        let question = document.createTextNode(data.quiz[i].question)
        let ans_a = document.createTextNode(data.quiz[i].answers.a)
        let ans_b = document.createTextNode(data.quiz[i].answers.b)
        let ans_c = document.createTextNode(data.quiz[i].answers.c)
        let correct_ans = document.createTextNode(data.quiz[i].answers.correct)
        // console.log(question);
        // console.log(ans_a);
        // console.log(ans_b);
        // console.log(ans_c);
        // console.log(correct_ans);
        
        let tables = document.getElementById("tables")
        // let new_tbody = document.createElement("tbody")
        let new_tr = document.createElement("tr")
        let new_q = document.createElement("td")
        let new_a = document.createElement("td")
        let new_b = document.createElement("td")
        let new_c = document.createElement("td")
        let new_correct = document.createElement("td")
        let new_point = document.createElement("td")

        new_point.appendChild(document.createTextNode(i+1))
        new_q.appendChild(question)
        new_a.appendChild(ans_a)
        new_b.appendChild(ans_b)
        new_c.appendChild(ans_c)
        new_correct.appendChild(correct_ans)

        new_tr.appendChild(new_point)
        new_tr.appendChild(new_q)
        new_tr.appendChild(new_a)
        new_tr.appendChild(new_b)
        new_tr.appendChild(new_c)
        new_tr.appendChild(new_correct)

        tables.appendChild(new_tr);
    }
}
let i = 3;
function insert() {
    let insert_q  = document.createTextNode( document.getElementById("question").value )
    let insert_a = document.createTextNode( document.getElementById("choie_text1").value )
    let insert_b = document.createTextNode( document.getElementById("choie_text2").value )
    let insert_c = document.createTextNode( document.getElementById("choie_text3").value )

    //------------------------------------------------------------
    let insert_correct_ans = ""
    let insert_correct1 = document.getElementById("choice_1")
    let insert_correct2 = document.getElementById("choice_2")
    let insert_correct3 = document.getElementById("choice_3")

    if (insert_correct1.checked) {
        insert_correct_ans = document.createTextNode(insert_correct1.value)
    }
    else if (insert_correct2.checked) {
        insert_correct_ans = document.createTextNode(insert_correct2.value)
    }
    else {
        insert_correct_ans = document.createTextNode(insert_correct3.value)
    }
    //-----------------------------------------------------------


    // console.log(insert_q);
    // console.log(insert_a);
    // console.log(insert_b);
    // console.log(insert_c);
    // console.log(insert_correct_ans);

    let tables = document.getElementById("tables")
        // let new_tbody = document.createElement("tbody")
    let new_tr = document.createElement("tr")
    let new_q = document.createElement("td")
    let new_a = document.createElement("td")
    let new_b = document.createElement("td")
    let new_c = document.createElement("td")
    let new_correct = document.createElement("td")
    let new_point = document.createElement("td")

    new_point.appendChild(document.createTextNode(i+1))
    new_q.appendChild(insert_q)
    new_a.appendChild(insert_a)
    new_b.appendChild(insert_b)
    new_c.appendChild(insert_c)
    new_correct.appendChild(insert_correct_ans)

    new_tr.appendChild(new_point)
    new_tr.appendChild(new_q)
    new_tr.appendChild(new_a)
    new_tr.appendChild(new_b)
    new_tr.appendChild(new_c)
    new_tr.appendChild(new_correct)

    tables.appendChild(new_tr);

    i++
}
