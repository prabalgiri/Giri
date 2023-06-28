let button =document.createElement(<button type="button">Delete</button>);
divset.appendChild(button);
button.addEventListener("click",(e)=>{
  divSet.deleteChild(li);
})

let editButton =document.createChild(<button type="button">Edit</button>);
divset.appendChild(editButton);
editButton.addEventListener("click",(e)=>{
  emailId.innerText=localStorege.get(id);
  password.innerText=localStorage.get(pas);
  name.innerText=localStorege.get(name);
})
