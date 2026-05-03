function loginUser() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    // validation بسيط
    if (username === "" || password === "") {
        document.getElementById("error").innerText = "Please fill all fields!";
        return false;
    }

    if (username === storedUser && password === storedPass) {
        alert("Login successful!");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Wrong username or password!";
    }

    return false;
}

function changeTheme(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
} 
function changeLayout(){
   document.body.classList.toggle("vertical-layout");
    if(document.body.classList.contains("vertical-layout")){
        localStorage.setItem("layout","vertical");
    }
    else{
        localStorage.setItem("layout","horizontal");
    }
 }
window.onload =function(){
    let theme = localStorage.getItem("theme");
    let layout= localStorage.getItem("layout");

    if(theme==="dark"){
        document.body.classList.add("dark-theme");
    }
   if(layout==="vertical"){
        document.body.classList.add("vertical-layout");
   }
};
