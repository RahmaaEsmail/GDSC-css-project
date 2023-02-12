const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector(".header")
menuIcon.addEventListener("click",()=>{
    menuIcon.classList.toggle("open-nav");
    header.classList.toggle("openlist")
})


const allLinks = document.querySelectorAll(".nav--list a:link");
allLinks.forEach(function(link){
    link.addEventListener("click",(e)=>{
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);
        if(href!=="#" && href.startsWith("#")) {
            const section = document.querySelector(href);
            section.scrollIntoView({behavior:"smooth"});
        }

    })
})


window.onscroll = function () {
     myFunction() };

const navbar = document.querySelector(".header");
const sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
    if (window.pageYOffset >= 100) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
