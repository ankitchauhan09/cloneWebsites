gsap.to("#nav", {
    backgroundColor: "black",
    height: "100px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to("#main", {
    backgroundColor: "black",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -40%",
        end: "top -80%",
        scrub: 2,
    }
})

var smallcursor = document.querySelector("#smallcursor");
var largecursor = document.querySelector("#largecursor");
document.addEventListener("mousemove", (dets) => {
    smallcursor.style.left = dets.x + "px";
    smallcursor.style.top = dets.y + "px";
    largecursor.style.left = dets.x + - 150 + "px";
    largecursor.style.top = dets.y + - 150 + "px";
})

var overlays = document.querySelectorAll(".overlays");
overlays.forEach(overlay => {
    overlay.addEventListener("mouseover", () => {
        smallcursor.style.opacity = 0;
        overlay.style.cursor = "pointer";
    })
})
overlays.forEach(overlay => {
    overlay.addEventListener("mouseout", () => {
        smallcursor.style.opacity = 1;
    })
})


var h4s = document.querySelectorAll("#nav h4");
h4s.forEach((elements) => {
    elements.addEventListener("mouseenter", enterMouse)
    elements.addEventListener("mouseleave", leaveMouse)
})

gsap.from("#about-us, #about-us-in", {
    y: 50,
    opacity: 0,
    // duration : 0.7,
    sagger: true,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 130%",
        end: "top  58%",
        scrub: 1,
        // markers : true,

    }
})

gsap.to("#colon1", {
    y: "50px",
    x: "29px",
    scale: 1.4,
    scrollTrigger: {
        trigger: "#colon1",
        sroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
    }
})
gsap.to("#colon2", {
    y: "-50px",
    x: "-25px",
    scale: 1.4,
    scrollTrigger: {
        trigger: "#colon2",
        sroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
    }
})

gsap.to("#page3 p", {
    fontSize: "40px",
    duration: 1,
    scrollTrigger: {
        trigger: "#page3 p",
        sroller: "body",
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
    }

})

gsap.from("#page4 h1", {
    y: 100,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "bottom bottom", // The animation starts when the bottom of the element is at the bottom of the viewport
        end: "+=50px", // The animation ends when the element is 200 pixels below its original position
        scrub: 2,
        // markers: true,
    }
});

function enterMouse() {
    smallcursor.style.scale = 3;
    smallcursor.style.border = "1px solid #ffffff";
    smallcursor.style.backgroundColor = "transparent";
}

function leaveMouse() {
    smallcursor.style.scale = 1;
    smallcursor.style.border = "1px solid #9fc70f";
    smallcursor.style.backgroundColor = "#9fc70f";
}

var firstTagElements = document.querySelectorAll("#firstTag h3");
var secondTagElements = document.querySelectorAll("#secondTag h3")
var thirdTagElements = document.querySelectorAll("#thirdTag p");

firstTagElements.forEach((elements) => {
    elements.addEventListener("mouseenter", () => {
        smallcursor.style.scale = 3;
        smallcursor.style.border = "1px solid #ffffff";
        smallcursor.style.backgroundColor = "transparent";
        elements.style.color = "white";
    })
    elements.addEventListener("mouseleave", () => {
        smallcursor.style.scale = 1;
        smallcursor.style.border = "1px solid #9fc70f";
        smallcursor.style.backgroundColor = "#9fc70f";
        elements.style.color = "black";
    })
})

console.log(firstTagElements);

secondTagElements.forEach((elements) => {
    elements.addEventListener("mouseenter", () => {
        smallcursor.style.scale = 3;
        smallcursor.style.border = "1px solid #ffffff";
        smallcursor.style.backgroundColor = "transparent";
        elements.style.color = "white";
    })
    elements.addEventListener("mouseleave", () => {
        smallcursor.style.scale = 1;
        smallcursor.style.border = "1px solid #9fc70f";
        smallcursor.style.backgroundColor = "#9fc70f";
        elements.style.color = "black";
    })
})

thirdTagElements.forEach((elements) => {
    elements.addEventListener("mouseenter", () => {
        smallcursor.style.scale = 3;
        smallcursor.style.border = "1px solid #ffffff";
        smallcursor.style.backgroundColor = "transparent";
        elements.style.color = "white";
    })
    elements.addEventListener("mouseleave", () => {
        smallcursor.style.scale = 1;
        smallcursor.style.border = "1px solid #9fc70f";
        smallcursor.style.backgroundColor = "#9fc70f";
        elements.style.color = "black";
    })
})


document.querySelectorAll("#iconDiv i").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        element.style.color = "black";
        element.style.cursor = "pointer";
    })
    element.addEventListener("mouseleave", () => {
        element.style.color = "white";
        element.style.cursor = "default";
    })
})