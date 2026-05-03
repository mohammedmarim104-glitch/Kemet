
const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", function() {
    navMenu.classList.toggle("active")
});

function goToPage(page) {  window.location.href = page;
}



function toggleTheme() {
    document.body.classList.toggle("theme2");

    if (document.body.classList.contains("theme2")) {
        localStorage.setItem("theme", "theme2");
    } else {
        localStorage.setItem("theme", "theme1");
    }
};


window.onload = function () {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "theme2") {
        document.body.classList.add("theme2");
    }
};