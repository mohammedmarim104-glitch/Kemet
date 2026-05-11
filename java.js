function changeTheme() {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme", "dark");
        document.body.classList.add("vertical-layout");
        localStorage.setItem("layout", "vertical");
    }
    else{
        localStorage.setItem("theme", "light");
        document.body.classList.remove("vertical-layout");
        localStorage.setItem("layout", "horizontal");
    }
}

window.onload = function(){

    let theme = localStorage.getItem("theme");
    if(theme === "dark"){

        document.body.classList.add("dark-theme");
        document.body.classList.add("vertical-layout");
    }

    else{

        document.body.classList.remove("dark-theme");
        document.body.classList.remove("vertical-layout");
    }
};

const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
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
