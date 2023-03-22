const allLinks = document.querySelectorAll(".nav--list a:link");
allLinks.forEach(function (link) {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href");
        console.log(href);
        if (href !== "#" && href.startsWith("#")) {
            const section = document.querySelector(href);
            section.scrollIntoView({ behavior: "smooth" });
        }

    })
})

const menuIcon = document.querySelector(".menu-icon");
const header = document.querySelector(".header")
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open-nav");
    header.classList.toggle("openlist");
})





function myFunction() {
    if (window.pageYOffset == 0) {
        header.classList.remove("change-bg")
    }
    else {
        header.classList.add("change-bg")
    }
}



// initialize variable to detect if fun called or not 
let pause ,x=0;
const throttle = (cb,delay=250)=>{
    // if fun is called ,pause throttle fun
    if(pause) return;

    // if fun isn't called ,return throttle fun
    pause = true;
     setTimeout(()=>{
        cb();
        console.log(`throttle ${x++}`);
    //  fun is called ,pause throttle fun
        pause=false;
     },delay)
}


window.addEventListener("scroll",()=>{
    throttle(myFunction)
})



