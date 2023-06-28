let button =document.createElement(<button type="button">Delete</button>);
divset.appendChild(button);
button.addEventListener("click",(e)=>{
  divSet.deleteChild(li);
})
