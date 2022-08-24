function Check() {
    let pnum = document.forms.myFrom.personNum.value;
    if (pnum.length != 13) {
        alert("หมายเลขบัตรประชาชนของคุณไม่ถูกต้อง")
        return false
    }
}