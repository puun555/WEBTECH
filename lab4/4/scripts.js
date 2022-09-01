function submitTable() {
    reset();
    let all = document.getElementById("table");
    for (let k = 1; k <= 8; k++) {
        let newCol = document.createElement("div");
        let newColAtt = document.createAttribute("id");
        newColAtt.value = "col" + k;
        newCol.setAttributeNode(newColAtt);
        all.appendChild(newCol);
    }
    console.log(all);
    createTable();
}

function reset() {
    let table = document.getElementById("table");
    table.innerHTML = ' ';
}

function createTable(){
    let check = 1;
    let j = 1;
    let newRow = true;
    let number = parseInt(document.getElementById("number").value);
    for (let i = 1; i <= number; i++) {
        if (j > 8) {
            j = 1;
            newRow = true;
        }
        let box = document.createElement("div");
        let boxClass = document.createAttribute("class");
        boxClass.value = "box";
        box.setAttributeNode(boxClass);
        let boxID = document.createAttribute("id");
        boxID.value = "box" + i;
        box.setAttributeNode(boxID);
        let col = document.getElementById("col" + j);
        col.appendChild(box);
        let getBox = document.getElementById("box" + i);
        if (newRow) {
            check++;
            newRow = false
        }
        if (check % 2 == 1) { getBox.style.backgroundColor = "black"; }
        else { getBox.style.backgroundColor = "white"; }
        j++;
        check++;
    }
}