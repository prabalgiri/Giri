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

let li=document.createElement('li');
li.className='list-group-item';
console.log(li);
li.appendChild(delete-btn);

localStorage.setItem('name','prabal');
console.log(localStorage.getItem('name'));

sessionStorage.setItem('name','prabal Giri');
console.log(sessionStorage.getItem('name'));

document.cookie='name=prabal Giri';


