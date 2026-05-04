document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    function removeActiveClass() {
        cards.forEach(card => card.classList.remove('active-card'));
    }
    
    cards.forEach(card => {
        card.addEventListener('click', () => {
            removeActiveClass();
            card.classList.add('active-card');
        });
    });

    // قائمة الهامبرغر للشاشات الصغيرة
    window.togglemenu = function() {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) navMenu.classList.toggle('active');
    };

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('navMenu');
        const menuIcon = document.getElementById('menuIcon');
        if (navMenu && menuIcon && navMenu.classList.contains('active')) {
            if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });
});
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