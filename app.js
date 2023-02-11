let btn = document.querySelector(".btntop")
let projects = document.querySelectorAll(".sect4 div div")
let projectsChild = document.querySelectorAll(".sect4 div div span")
let alertDiv = document.querySelector(".alertDiv")
let alertDivH1 = document.querySelector(".alertDiv div h1")
let alertDivP = document.querySelector(".alertDiv div p")
let alertDivDiv = document.querySelector(".alertDiv div")
let alertDivx = document.querySelector(".alertDiv #x")
function btnDisplay(){
    addEventListener("scroll",function(){
        if(window.scrollY > 200){
            btn.style.display = "flex"
        }else{
            btn.style.display = "none"
        }
    })
    setTimeout(() => {
        
        alertDiv.style.top = "250px"
        alertDiv.style.transform = "rotate(0deg) rotateX(0deg)"
        
    }, 5000);
    setTimeout(() => {
        alertDiv.style.opacity = 1
        alertDiv.style.boxShadow = "0 0 20px white"
        alertDivH1.innerHTML = "Hello!"
        alertDivP.innerHTML = "Welcome to Gevorg's CV site"
        alertDivDiv.style.opacity = 1
        alertDivx.style.opacity = 1
        
    }, 2000);
    alertDivx.addEventListener("click",function(){
        alertDiv.style.marginTop = "-700px"
       
        setTimeout(() => {
            alertDiv.style.display = "none"

        }, 2000);
    })
}

btnDisplay()

function proj(){

    for (let i = 0; i < projectsChild.length; i++) {
        let elem = projectsChild[i];
        elem.addEventListener("mouseover",function(){
            elem.style.opacity = 1
        })
        elem.addEventListener("mouseout",function(){
            elem.style.opacity = 0 
        })
    }
    for (let i = 0; i < projects.length; i++) {
        let elem = projects[i];
        elem.style.opacity = 0
        
        elem.addEventListener("mouseover",function(){
            projectsChild[i].style.opacity = 1
            elem.style.zIndex = "1" 
            elem.style.transform = "rotate(0deg)"
        })
        elem.addEventListener("mouseout",function(){
            projectsChild[i].style.opacity = 0
            elem.style.zIndex = "0"
            elem.style.transform = "rotate(15deg)"
        })
    }
}
function projFunc(){
    if(location.reload){
         projects[0].style.display = "flex"
        projects[1].style.display = "flex"
        setTimeout(() => {
           
            projects[1].style.transform = "rotate(15deg)"
            projects[0].style.transform = "rotate(15deg)"
            projects[0].style.opacity = "1"
            projects[1].style.opacity = "1"
           
        }, 200);
    }

    window.onscroll = function () {
        if(Math.round(window.scrollY) >= 2400 ){
            projects[0].style.display = "flex"
            projects[1].style.display = "flex"

           
            setTimeout(() => {
                projects[0].style.transform = "rotate(15deg)"
                projects[1].style.transform = "rotate(15deg)"
                projects[0].style.opacity = "1"
                projects[1].style.opacity = "1"
            }, 100);
        }
    if(Math.round(window.scrollY) >= 2700  ){
             projects[2].style.display = "flex"
             projects[3].style.display = "flex"
             setTimeout(() => {
                projects[2].style.transform = "rotate(15deg)"
                projects[3].style.transform = "rotate(15deg)"
                projects[2].style.opacity = "1"
                projects[3].style.opacity = "1"
             }, 100);
         }
         if(Math.round(window.scrollY) >= 3000 ){
            projects[4].style.display = "flex"
            projects[5].style.display = "flex"

            setTimeout(() => {
                projects[4].style.transform = "rotate(15deg)"
                projects[5].style.transform = "rotate(15deg)"
                projects[4].style.opacity = "1"
                projects[5].style.opacity = "1"
            }, 100);
        }
        if(Math.round(window.scrollY) >= 3300 ){
            projects[6].style.display = "flex"
            projects[7].style.display = "flex"

           
            setTimeout(() => {
                projects[6].style.transform = "rotate(15deg)"
                projects[7].style.transform = "rotate(15deg)"
                projects[6].style.opacity = "1"
                projects[7].style.opacity = "1"
            }, 100);
        }
 };
}
projFunc()
proj()

// burger

let burger = document.querySelector(".burger") ;
let medianavdiv = document.querySelectorAll(".mediaNav ul li") ;
let nav = document.querySelector(".mediaNav") ;
console.log(medianavdiv);
function burgerfunc(){
    
    burger.addEventListener("click", function(){
        burger.classList.toggle("clicked")
        nav.classList.toggle("mediaNavflex")
    })
    for (let i = 0; i < medianavdiv.length; i++) {
        const elem = medianavdiv[i];
        elem.addEventListener("click",function(){
            setTimeout(() => {
                nav.classList.toggle("mediaNavflex") ;
                burger.classList.toggle("clicked")
            }, 500);
        })
    }
    
}
burgerfunc()