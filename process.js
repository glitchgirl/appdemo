var orderText = document.getElementById("order");
orderText.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        repeatIt();
    }
});
function repeatIt(){
    var customerOrder = document.getElementById("order").value;
    var input = document.getElementById("order");
    input.value = "";
    var node = document.createElement("LI");
    var textnode = document.createTextNode(customerOrder);
    node.appendChild(textnode);
    document.getElementById("listOrder").appendChild(node);
}