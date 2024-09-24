let menu = document.getElementById("menu");
let sidebar = document.getElementById("sidebar");
let cross = document.getElementById("cross");
menu.addEventListener('click', () => {
    sidebar.style.transform = "translate(0%)"
    sidebar.style.display = "block"
    document.getElementById("logo").style.display = "none"
    document.getElementById("slider").style.justifyContent = "end"
})
cross.addEventListener('click', () => {
    sidebar.style.transform = "translate(-100%)"
    document.getElementById("logo").style.display = "block"
    document.getElementById("slider").style.justifyContent = "space-between"
})