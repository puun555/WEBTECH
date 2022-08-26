function Check() {
    let pnum = document.getElementById('pNum').value;
    // alert(pnum)
    if (pnum.toString().length != 13) {
        alert("หมายเลขบัตรประชาชนของคุณไม่ถูกต้อง")
        return false
    }
    let prefig = document.getElementById('prefig').value;
    if (prefig == "") {
        alert("โปรดใส่คำนำหน้า")
        return false
    }

    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    if (fname.length < 2 || fname.length > 20) {
        alert("Name Incorrect")
        return false
    }
    if (lname.length < 2 || lname.length > 30) {
        alert("Surname Incorrect")
        return  false
    }

    let add = document.getElementById('address').value;
    let tbon = document.getElementById('tumbon').value;
    let region = document.getElementById('region').value;
    if (add.length < 5) {
        alert("Address Incorrect")
        return false
    }
    if (tbon.length < 2) {
        alert("Town Incorrect")
        return false
    }
    if (region.length < 2) {
        alert("Region Inccorect")
        return false
    }
    let city = document.getElementById('city').value;
    if (city == "") {
        alert('โปรดเลือกจังหวัด')
        return false;
    }

    let postnum = document.getElementById('postPass').value;
    if (postnum.toString().length != 5) {
        alert("Post Number Incorrect")
        return false
    }

    
}