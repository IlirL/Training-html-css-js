console.log("start")

const openMenuIcon = document.querySelectorAll('.menu-icons')
console.log("menu icons", openMenuIcon)
const navlist = document.querySelector(".nav-list")
console.log(navlist)

// document.addEventListener.openMenuIcon.forEach(element => {
//     console.log("in")
//     if(navlist.classList.contains("active"))
//         navlist.classList.remove("active")
//     else
//     navlist.classList.add("active")
// });

openMenuIcon.forEach(element =>{
    element.addEventListener('click', function(){
            if(navlist.classList.contains("active"))
        navlist.classList.remove("active")
    else
    navlist.classList.add("active")
    })
} )