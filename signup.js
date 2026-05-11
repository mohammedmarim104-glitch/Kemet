function registerUser() {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    let error = document.getElementById("error");

    // username
    if (username.length < 3) {
        error.innerText = "Username must be at least 3 characters!";
        return false;
    }

    // email
    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Enter a valid email!";
        return false;
    }

    // password
    if (pass.length < 6) {
        error.innerText = "Password must be at least 6 characters!";
        return false;
    }

    // confirm
    if (pass !== confirm) {
        error.innerText = "Passwords do not match!";
        return false;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", pass);

    alert("Account created successfully!");
    window.location.href = "login.html";
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