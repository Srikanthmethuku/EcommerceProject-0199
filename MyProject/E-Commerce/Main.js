let signup=document.getElementById("signup")
console.log(signup);
let register_form=document.getElementById("register_form")
console.log(register_form);
signup.addEventListener("click",(e)=>{
    if(register_form.style.display==="none"){
    e.preventDefault()
    register_form.style.display="block"
    }
    else{
        register_form.style.display="none"
    }
})


let login=document.getElementById("login")
console.log(login);
let login_form=document.getElementById("login_form")
    console.log(login_form);
login.addEventListener("click",(e)=>{
    if(login_form.style.display==="none"){
        e.preventDefault()
        login_form.style.display="block"
        }
        else{
            login_form.style.display="none"
        }
    
    
   
})








//Registration 
let register_button=document.getElementById("register_button")
console.log(register_button);
register_button.addEventListener("click",(e)=>{
    e.preventDefault()
    let user_name=document.getElementById("user_name").value
    console.log(user_name);
    let email=document.getElementById("email").value
    console.log(email);
    let password=document.getElementById("password").value
    console.log(password);

    let username=localStorage.setItem("username",user_name)
    localStorage.setItem("email",email)
    localStorage.setItem("password",password)

    if(user_name==="" || email==="" || password===""){
        alert("please fill the details")
    }
    else{
        alert("Registration successfully")
        // Hide the register form
        document.getElementById("register_form").style.display = "none";
        // Show the login form
        document.getElementById("login_form").style.display = "block";
    }

    
})


//login

let user_login=document.getElementById("user_login")
console.log(user_login);
user_login.addEventListener("click",(e)=>{
    e.preventDefault()
    let username=document.getElementById("login_name").value
    let pswd=document.getElementById("login_password").value
    // console.log(inputs2);
    let luname=localStorage.getItem("username")
    console.log(luname);
    let lpswd=localStorage.getItem("password")
    console.log(lpswd);
    if(username==="" && pswd===""){
        alert("invalid details")
        
    }
    else if((username==luname) && (pswd==lpswd)){
        alert("login successfully");
        window.open("Home.html")
    }
    else{
        alert("please register")
        
    //     let username=document.getElementById("login_name").value=""
    // let pswd=document.getElementById("login_password").value=""
    }
})





