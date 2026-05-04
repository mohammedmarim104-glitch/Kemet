    function changeTheme() {
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        localStorage.setItem("theme","dark");
    }
    else{
        localStorage.setItem("theme","light");
    }
}

function changeLayout() {
   document.body.classList.toggle("vertical-layout");
    if(document.body.classList.contains("vertical-layout")){
        localStorage.setItem("layout","vertical");
    }
    else{
        localStorage.setItem("layout","horizontal");
    }
 }

window.onload = function(){
    let theme = localStorage.getItem("theme");
    let layout = localStorage.getItem("layout");

    if(theme === "dark"){
        document.body.classList.add("dark-theme");
    } else {
        document.body.classList.remove("dark-theme");
    }

    if(layout === "vertical"){
        document.body.classList.add("vertical-layout");
    } else {
        document.body.classList.remove("vertical-layout");
    }
};

function check() {
    var n = document.getElementById("c_name").value;
    var m = document.getElementById("c_mail").value;
    var res = true;

    document.getElementById("err_name").innerHTML = "";
    document.getElementById("err_mail").innerHTML = "";

    if (n.length < 5) {
        document.getElementById("err_name").innerHTML = "Short name!";
        res = false;
    }

    if (m.indexOf("@") == -1) {
        document.getElementById("err_mail").innerHTML = "Error in email";
        res = false;
    }

    if (res == true) {
        alert("Done " + n);
        localStorage.setItem("user", n);
    }
    return res;
}
