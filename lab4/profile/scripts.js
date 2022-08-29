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