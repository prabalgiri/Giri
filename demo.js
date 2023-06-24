let itemList=document.querySelector('#items');
console.log(itemList.parentNode);
console.log(itemList.lastElementChild);
console.log(itemList.lastChild);
console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
let newDiv =document.createElement("div");
newDiv.className="hello";
newDiv.id="hi";
console.log(newDiv.className);

itemList.appendChild(newDiv);

