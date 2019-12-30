var orderText = document.getElementById("order");

var menu = {
    "fries":19,
    "shakes":23,
    "burgers":45
};

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
    parseOrder(customerOrder);
}

function parseOrder(custOrder){
    custOrderArr = custOrder.split(",");
    let trimedArr = custOrderArr.map(x => x.trim());
    let numberArr = trimedArr.map(y => y.split(":"));
    let processArr = numberArr.map(z => z.trim());
    console.log(processArr);
}