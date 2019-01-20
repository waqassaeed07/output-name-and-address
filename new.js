
function handle(){
    pass=document.getElementById("pass").value;
repass=document.getElementById("repass").value;

    if(pass===repass){ 
        document.getElementById("nname").innerHTML=document.getElementById("name").value;
        document.getElementById("nemail").innerHTML=document.getElementById("email").value;
        document.getElementById("ncity").innerHTML=document.getElementById("city").value;

    }
    else{
        document.getElementById("match").innerHTML="password not match"
    }
}
