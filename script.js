
const close =  document.querySelector(".close");
const open =  document.querySelector("#nav-part3");
var main = document.querySelector(".main")
var crsr = document.querySelector(".cursor")



const navigation = document.querySelector("#main-navigation")
//defining media query
const mediaQuery = window.matchMedia('(max-width:768px')


function loader(){

    document.addEventListener("readystatechange",function(){
        function scrollbarhide(){
            document.body.style.overflow = 'hidden';
        }
        scrollbarhide();
    
    
        function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      
            // if any scroll is attempted, set this to the previous value
            window.onscroll = function() {
                window.scrollTo(scrollLeft, scrollTop);
            };
        }
    disableScroll();
        if(document.readyState === "complete"){
            setTimeout(loaderHide,300);
            setTimeout(loaderdisplaynone,400);
            function loaderHide(){ 
                document.querySelector(".loader").style.opacity = "0"
            }
            function loaderdisplaynone(){ 
                document.querySelector(".loader").style.display = "none"
            }


            function scrollbarvisible(){
                document.body.style.overflow = 'visible';
            }
            scrollbarvisible();
    
            function enableScroll() {
                window.onscroll = function() {};
            }
            enableScroll();
        }
        
    })
}
loader();

function exit(){
    const close =  document.querySelector(".close");
const open =  document.querySelector("#nav-part3");
    open.addEventListener("click", function(){
        navigation.style.display = "flex"

    });
    close.addEventListener("click", function(){
        navigation.style.display = "none"

    });
}
exit();





function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init()

// cursor code

const trackerSize = crsr.offsetWidth
let trackerX = 0
let trackerY = 0
let mouseX = 0
let mouseY = 0
const speed = .15
let isVisible = false
document.addEventListener("mousemove",function(e){
    if(!isVisible){
        isVisible = true
        crsr.style.opacity = 1
        updatePosition()
    }
        // updatePosition()

    mouseX = e.clientX
    mouseY = e.clientY
})
// document.addEventListener("mousemove",function(dets){
//     crsr.style.left = dets.x + 0+"px"
//     crsr.style.top = dets.y + 0+"px"
// })

const updatePosition = () =>{
    const distanceX = mouseX - (trackerX + trackerSize / 2)
    const distanceY = mouseY - (trackerY + trackerSize / 2)

    trackerX += distanceX * speed
    trackerY += distanceY * speed

    crsr.style.transform = `translate(${trackerX}px, ${trackerY}px)`

    requestAnimationFrame(updatePosition)
}


// cursor code


// page one h1 gsap code

gsap.from(".page1 h1,.page1 h2", {
    y: 200,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7,
})
gsap.from(".page1 p", {
    y: 250,
    rotate: 10,
    opacity: 0,
    delay: 0.3,
    duration: 0.7
})


var tl;

if (mediaQuery.matches){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 .page1-inner1 h1",
            scroller: ".main",
            start: "top 17%",
            end: "top 0%",
            scrub: 2,
            // markers:true,
        }
    })

}else{
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 .page1-inner1 h1 ",
            scroller: ".main",
            start: "+=95 37%",
            end: "+=95 0%",
            scrub: 2,
            // markers:true,
        }
    })


}
tl.to(".page1 h1", {
    x: -100,
}, "anim")
tl.to(".page1 h2", {
    x: 100
}, "anim")
tl.to(".page1-inner2", {
    height:"80vmin",
    width: "80%"
}, "anim")

// page one h1 gsap code


// black to white

if(mediaQuery.matches){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -25%",
            end: "top -30%",
            scrub: 3
        }
    })

}else{
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            start: "top -135%",
            end: "top -120%",
            scrub: 3,
            // markers:true,

        }
    })

}


tl2.to(".main", {
    backgroundColor: "#fff",
})



if(mediaQuery.matches){
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -150%",
            end: "top -200%",
            scrub: 3
        }
    })

}else{
    var tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".page1 h1",
            scroller: ".main",
            // markers:true,
            start: "top -280%",
            end: "top -300%",
            scrub: 3
        }
    })

}


tl3.to(".main",{
    backgroundColor:"#0F0D0D"
})


var boxes = document.querySelectorAll(".box")
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "470px"
        crsr.style.height = "370px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        crsr.style.width = "50px"
        crsr.style.height = "50px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})

// var h4 = document.querySelectorAll("#nav h4")
// var purple = document.querySelector("#purple")
// h4.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         purple.style.display = "block"   
//         purple.style.opacity = "1"
//     })
//     elem.addEventListener("mouseleave",function(){
//         purple.style.display = "none"   
//         purple.style.opacity = "0"
//     })
// })
