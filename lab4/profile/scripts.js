let count = 0
const showInfo =() => {
    count += 1
    let check = count%2
    console.log("This is Check =" + check)
    if (check == 1) {
        document.getElementById('info').style.display = 'block';
    }
    else {
        document.getElementById('info').style.display = 'none';
    }
}


const showcon =(i) => {
    console.log(i)
    let page1 = document.getElementById("page1")
    let page2 = document.getElementById("page2")
    let page3 = document.getElementById("page3")
    if (i == 1) {
        page1.classList.add("showCon")
        page2.classList.remove("showCon")
        page3.classList.remove("showCon")
    }
    else if (i == 2) {
        page1.classList.remove("showCon")
        page2.classList.add("showCon")
        page3.classList.remove("showCon")
    }
    else if (i == 3) {
        page1.classList.remove("showCon")
        page2.classList.remove("showCon")
        page3.classList.add("showCon")
    }
}