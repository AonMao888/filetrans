const menubtn = document.querySelector(".menubtn");
const menu = document.querySelector(".menu");
const menuclose = document.querySelector(".drawerclose");
const banner = document.querySelector(".banner");

menubtn.addEventListener("click",()=>{
    menu.style.left = "0";
    menubtn.classList.add("show");
})
menuclose.addEventListener("click",()=>{
    menu.style.left = "-369px";
    menubtn.classList.remove("show");
})
window.addEventListener("scroll",()=>{
    if(menubtn.classList.contains("show")){
        menu.style.left = "-369px";
        menubtn.classList.remove("show");
    }
})