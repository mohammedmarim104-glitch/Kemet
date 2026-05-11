function changeTheme(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
} 

function changeLayout(){
    document.body.classList.toggle("vertical-layout")
    if(document.body.classList.contains("vertical-layout")){
        document.cookie="layout=vertical";
    }
    else{
        document.cookie="layout=horizontal";
    }
}

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", function() {
    navMenu.classList.toggle("active")
});

function goToPage(page) {  
    window.location.href = page;
}

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e){
    let name = document.querySelector('input[type="text"]').value;
    let email = document.querySelector('input[type="email"]').value;

    if(name === "" || email === ""){
        e.preventDefault();
        alert("Please fill all required fields");
    }
});
