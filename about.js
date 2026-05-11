const menuIcon = document.getElementById("menuIcon");
const navMenu = document.getElementById("navMenu");

menuIcon.addEventListener("click", function() {
    navMenu.classList.toggle("active")
});

<<<<<<< HEAD
=======

>>>>>>> 78eda16014e7ec21bd22acc0ee8779e611545a82
function toggleCards(element){
   let card = element.closest(".main-card");
   card.classList.toggle("active");
}
<<<<<<< HEAD
=======

>>>>>>> 78eda16014e7ec21bd22acc0ee8779e611545a82
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

