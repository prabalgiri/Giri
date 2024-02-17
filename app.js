function login(event){
    event.preventDefault();
    console.log(event.target.name);

    const loginData={
        email: event.target.value,
        password:event.target.password.value
    }
    
     console.log(loginData);
     axios.post('http://localhost:3000/user/login',loginData).then(response=>{
     }).catch(err=>{
        console.log(JSON.stringify(err));
        document.body.innerHTML+=`<div>${err.message}</div>`
     })


}
