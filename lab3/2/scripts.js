function Check() {
    let pnum = document.getElementById('pNum').value;
    let prefig = document.getElementById('prefig').value;
    let fname = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let add = document.getElementById('address').value;
    let tbon = document.getElementById('tumbon').value;
    let region = document.getElementById('region').value;
    let city = document.getElementById('city').value;
    let postnum = document.getElementById('postPass').value;
    // alert(pnum)
    if (pnum.toString().length != 13) {
        alert("หมายเลขบัตรประชาชนของคุณไม่ถูกต้อง")
        return false
    }
    if (prefig == "") {
        alert("โปรดใส่คำนำหน้า")
        return false
    }
    if (fname.length < 2 || fname.length > 20) {
        alert("Name Incorrect")
        return false
    }
    if (lname.length < 2 || lname.length > 30) {
        alert("Surname Incorrect")
        return  false
    }
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
    if (city == "") {
        alert('โปรดเลือกจังหวัด')
        return false;
    }
    if (postnum.toString().length != 5) {
        alert("Post Number Incorrect")
        return false
    }
}