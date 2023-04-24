function login(){
    var pass1=document.getElementById("pass1-input")
    var pass2=document.getElementById("pass2-input")
    var mail=document.getElementById("mail-input")
    var name=document.getElementById("name-input")
    if (pass1!==pass2){
        alert("Please Check your inputs")
    }
    else if(mail===""||name===""||pass2===""||pass1===""){
        alert("Required Fields")
    }
}

asfunction res(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const error= document.getElementById("error");
    // error.innerHTML="";

    if(email===""||pass===""){
        error.innerHTML="email pass is required.<br>";
        return false;
    }
    return true;
}