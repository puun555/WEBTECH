function addList(clicked_id) {
    let list = document.getElementById("list");
    let addOrder = document.createElement("li");
    let orderAtt = document.createAttribute("class");
    orderAtt.value = "list-group-item";
    addOrder.setAttributeNode(orderAtt);
    if (clicked_id == "food1") {
        let orderText = document.createTextNode("ซุปหน่อไม้");
        addOrder.appendChild(orderText);
    } else if (clicked_id == "food2") {
        let orderText = document.createTextNode("ลาบหมูสับ");
        addOrder.appendChild(orderText);
    } else if (clicked_id == "food3") {
        let orderText = document.createTextNode("ส้มตำปูปลาร้า");
        addOrder.appendChild(orderText);
    }
    let addOne = document.createElement("div");
    let oneAtt = document.createAttribute("class");
    oneAtt.value = "float-right";
    addOne.setAttributeNode(oneAtt);
    addOne.innerHTML = "x1";
    addOrder.appendChild(addOne);
    list.appendChild(addOrder);
}