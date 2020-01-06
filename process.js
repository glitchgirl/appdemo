/* eslint-disable prefer-template */
/* eslint-disable no-console */
const orderText = document.getElementById('order');

const menu = {
  fries: 19,
  shakes: 23,
  burgers: 45,
};

function parseOrder(custOrder) {
  return custOrder
    .split(',')
    .map((x) => x.trim())
    .flatMap((y) => y.split(':').map((x) => x.trim()));
}
function print(){
  // move this from check order and repeat it, reduce rep
}
function checkOrder(prettyOrder) {
  for(i =1; i < prettyOrder.length; i +=2){
    if(!(prettyOrder[i] in menu)){
      console.log(prettyOrder[i]);
      const menuError = "That item isn't on the menu"
      const node = document.createElement('LI');
      const textnode = document.createTextNode(menuError);
      node.appendChild(textnode);
      document.getElementById('listOrder').appendChild(node);
    }
  }
}
function repeatIt() {
  const customerOrder = document.getElementById('order').value;
  const input = document.getElementById('order');
  input.value = '';
  const node = document.createElement('LI');
  const textnode = document.createTextNode(customerOrder);
  node.appendChild(textnode);
  document.getElementById('listOrder').appendChild(node);
  checkOrder(parseOrder(customerOrder));
}
orderText.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) { // checks whether the pressed key is "Enter"
    repeatIt();
  }
});
