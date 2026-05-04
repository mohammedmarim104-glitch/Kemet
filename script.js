function changeTheme() {
    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}
function changeLayout() {
    document.body.classList.toggle("vertical-layout");
    if (document.body.classList.contains("vertical-layout")) {
        localStorage.setItem("layout", "vertical");
    }
    else {
        localStorage.setItem("layout", "horizontal");
    }
}
window.onload = function () {
    let theme = localStorage.getItem("theme");
    let layout = localStorage.getItem("layout");

    if (theme === "dark") {
        document.body.classList.add("dark-theme");
    }
    if (layout === "vertical") {
        document.body.classList.add("vertical-layout");
    }
};