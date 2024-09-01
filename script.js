function homePageAnimation() {
    gsap.set(".slidesm", { scale: 5 })

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            bottom: "bottom top",
            // markers: true,
            scrub: 1,
            pin: true
        }
    })


    tl.to("#vdodiv", {
        "--clip": "0%",
        ease: Power2,
    }, "a")

    tl.to(".slidesm", {

        scale: 0.8,
        ease: Power2
    }, "a")

    tl.to(".lft", {

        xPercent: 5,
        ease: Power4
    }, "b")

    tl.to(".rgt", {

        xPercent: -5,
        ease: Power4
    }, "b")
}

function slidesPageAnimation() {
    gsap.to("#slide", {
        scrollTrigger: {
            trigger: "#real",
            start: "top 0%",
            end: "bottom 100%",
            // markers: true,
            scrub: true,
        },
        xPercent: -300,
        ease: Power4,

    })
}

function teamAnimation() {
    document.querySelectorAll(".listelem").forEach(function (el) {
        el.addEventListener("mousemove", function (dets) {
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                ease: Power1.easeOut,
                duration: 0.5
            });
        });
    
        el.addEventListener("mouseenter", function () {
            // Get all elements with the class 'naam' inside the hovered 'listelem'
            this.querySelectorAll(".naam").forEach(function(naamEl) {
                naamEl.style.color = "white"; // Change their color to white
            });
        });
    
        el.addEventListener("mouseleave", function () {
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                ease: "linear",
                duration: 0.5
            });
    
            // Reset the color of all 'naam' elements to black when hover is removed
            this.querySelectorAll(".naam").forEach(function(naamEl) {
                naamEl.style.color = "black";
            });
        });
    });
    


    
}

function blueLayerAnimation(){
    document.querySelectorAll('.listelem').forEach(function(elem, index, list) {
        elem.addEventListener('mouseenter', function() {
            gsap.to(elem.querySelector('.bluelayer'), {
                duration: 0.2,   
                height: "100%",  
               ease: "none"     
    
            });
        });
    
        elem.addEventListener('mouseleave', function(event) {
          
                gsap.to(elem.querySelector('.bluelayer'), {
                    height: "0%",   
                    duration: 0.2,  
                    ease: "none",  
                    transformOrigin: "top"  
                });
        });
    });
}

function splitAnimation() {

    var clutter = ""
    document.querySelector(".textpara").textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara").innerHTML = clutter

    gsap.set(".textpara span", { opacity: .2 })
    gsap.to(".textpara span", {
        scrollTrigger: {
            trigger: ".para",
            start: "top 65%",
            end: "bottom 80%",
            // markers: true,
            scrub: 2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })


    var clutter = ""
    document.querySelector(".textpara2").textContent.split("")
        .forEach(function (e) {
            if (e === " ") clutter += `<span>&nbsp;</span>`
            clutter += `<span>${e}</span>`
        })
    document.querySelector(".textpara2").innerHTML = clutter

    gsap.set(".textpara2 span", { opacity: .2 })
    gsap.to(".textpara2 span", {
        scrollTrigger: {
            trigger: ".para2",
            start: "top 70%",
            end: "bottom 80%",
            // markers: true,
            scrub: 2
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
    })
}

function loco() {
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsuleAnimation() {
    gsap.to(".capsule:nth-child(2)", {
        scrollTrigger: {
            trigger: ".capsules",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 2,
        },
        y: -20,
        ease: Power4
    })
}

function changeBackgroundColor() {
    document.querySelectorAll(".section").forEach(function (e) {
        ScrollTrigger.create({
            trigger: e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: function () {
                const newTheme = e.dataset.color;
                document.body.setAttribute("theme", newTheme);
                updateNavColors(newTheme); // Nav color ko update karega
            },
            onEnterBack: function () {
                const newTheme = e.dataset.color;
                document.body.setAttribute("theme", newTheme);
                updateNavColors(newTheme); // Nav color ko update karega
            }
        });

        gsap.to("body", {
            duration: 2,
            ease: Power4
        });
    });

    // ScrollTrigger for nav with scrub effect
    ScrollTrigger.create({
        trigger: ".nav",
        start: "top 2%",
        end: "+=200", // Distance after which nav becomes fully visible
        scrub: 1, // Smooth transition with scrub
        onUpdate: (self) => {
            if (self.progress > 0) {
                document.querySelector(".nav").classList.add("scrolled");
            } else {
                document.querySelector(".nav").classList.remove("scrolled");
            }
        }
    });
}

function updateNavColors(theme) {
    let bgColor, textColor;

    switch (theme) {
        case "black":
            bgColor = "transparent";
            textColor = "var(--white)";
            break;
        case "cyan":
            bgColor = "var(--cyan)";
            textColor = "var(--dcyan)";
            break;
        case "salmon":
            bgColor = "var(--salmon)";
            textColor = "var(--dsalmon)";
            break;
        case "white":
            bgColor = "var(--white)";
            textColor = "var(--black)";
            break;
        default:
            bgColor = "var(--white)";
            textColor = "var(--black)";
    }

    gsap.to(".nav", {
        backgroundColor: bgColor,
        color: textColor,
        duration: 0.1,
        ease: "power2"
    });
}






function slideLastPage() {
    gsap.to(".lastImage", {
        scrollTrigger: {
            trigger: ".lastImage",
            start: "top -260%",
            end: "bottom -300%",
            scrub: true,
            // markers: true

        },
        opacity: 0,
        ease: Power4

    })
}

function slideSecondPage() {
    gsap.to(".secondImage", {
        scrollTrigger: {
            trigger: ".secondImage",
            start: "top 30%",
            end: "bottom -20%",
            scrub: true,
            // markers: true
        },
        xPercent: -70,
        ease: Power4
    })
}

function slideThirdPage() {
    gsap.to(".thirdImage", {
        scrollTrigger: {
            trigger: ".thirdImage",
            start: "top -100%",
            end: "bottom -150%",
            scrub: true,
            // markers: true
        },
        xPercent: -70,
        ease: Power4
    })
}

function digitIncreasing() {
    var twenty = document.querySelector(".twenty span")

    gsap.to(twenty, {
        scrollTrigger: {
            trigger: ".twenty",
            start: "top -4%",
            end: "top -50%",
            //   markers: true, 
        },
        innerText: 20.4,
        snap: { innerText: 0.1 },
        ease: Power4,
        duration: 1.5,
        onUpdate: function () {
            twenty.innerText = parseFloat(twenty.innerText).toFixed(1);
        }
    });


    var forty = document.querySelector(".forty span")

    gsap.to(forty, {
        scrollTrigger: {
            trigger: ".forty",
            start: "top -50%",
            end: "top -170%",
            //   markers: true, 
        },
        innerText: 49,
        snap: { innerText: 1 },
        ease: Power2,
        duration: 1,
        onUpdate: function () {
            forty.innerText = parseFloat(forty.innerText);
        }
    });

    var thirteen = document.querySelector(".thirteen")

    gsap.to(thirteen, {
        scrollTrigger: {
            trigger: ".thirteen",
            start: "top -155%",
            end: "top -260%",
            //   markers: true, 
        },
        innerText: 13,
        snap: { innerText: 1 },
        ease: Power2,
        duration: 1.5,
        onUpdate: function () {
            thirteen.innerText = parseFloat(thirteen.innerText);
        }
    });
}

function cyanPageAnimation() {
    var cards = document.querySelectorAll(".card1")

    var tl3 = gsap.timeline()

    tl3.to(cards, {
        scrollTrigger: {
            trigger: cards,
            start: "top 50%",
            end: "bottom 0%",
            scrub: 1,
            // markers: true,
        },
        width: "80%",
        backgroundColor: "black",
        color: "#ABDBDD",
        stagger: 0.8,
        ease: "Power3.easeOut"
    })

    tl3.to("#cards", {
        yPercent: -30,
        ease: Power4
    })
}

function humanSplitAnimation() {
    var clutter = "";
    document.querySelector(".human").textContent.split("").forEach(function (elem) {
        clutter += `<span class="inline-block opacity-0 font-['Neue_Machina'] font-[400] ">${elem}</span>`;
    });

    document.querySelector(".human").innerHTML = clutter;

    gsap.to(".human span", {
        scrollTrigger: {
            trigger: "#ltext",
            start: "top 50%",
            end: "bottom -50%",
            // markers: true


        },
        y: "-50px",
        opacity: 1,  // Ensure the letters become visible
        stagger: 0.03,
        ease: Power3,
        duration: 0.4,
        onStart: function () {
            document.querySelector(".human").style.opacity = 1;  // Make the entire container visible before animation starts
        }
    });
}

function realSplitAnimation() {
    var clutter = "";
    document.querySelector(".real").textContent.split("").forEach(function (elem) {
        if (elem === " ") clutter += `<span>&nbsp;</span>`

        clutter += `<span class="inline-block opacity-0  ">${elem}</span>`;
    });

    document.querySelector(".real").innerHTML = clutter;

    gsap.to(".real span", {
        scrollTrigger: {
            trigger: ".realParent h1",
            start: "top 50%",
            end: "bottom 20%",
            // markers: true,
            // scrub: true


        },
        y: "-80px",
        opacity: 1,  // Ensure the letters become visible
        stagger: 0.04,
        ease: Power3,
        duration: 0.5,
        onStart: function () {
            document.querySelector(".real").style.opacity = 1;  // Make the entire container visible before animation starts
        }
    });
}

function impactSplitAnimtion() {

    var clutter = "";
  document.querySelector(".real2").textContent.split("")
    .forEach(function (elem) {
        if (elem === " ") clutter += `<span>&nbsp;</span>`

        clutter += `<span class="inline-block opacity-0  ">${elem}</span>`;
    });

    document.querySelector(".real2").innerHTML = clutter;

    gsap.to(".real2 span", {
        scrollTrigger: {
            trigger: ".realParent h1",
            start: "top 50%",
            end: "bottom 20%",
            // markers: true,
            // scrub: true


        },
        y: "-80px",
        opacity: 1,  // Ensure the letters become visible
        stagger: 0.04,
        ease: Power3,
        duration: 0.5,
        onStart: function () {
            document.querySelector(".real2").style.opacity = 1;  // Make the entire container visible before animation starts
        }
    });
}

function exploreSplitAnimation() {
    var clutter = "";
    document.querySelector(".explore").textContent.split("").forEach(function (elem) {
        if (elem === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span class="inline-block opacity-0 ">${elem}</span>`;
    });

    document.querySelector(".explore").innerHTML = clutter;

    gsap.to(".explore span", {
        scrollTrigger: {
            trigger: ".heading",
            start: "top 90%",
            end: "bottom 90%",
            // markers: true,
            // scrub: true


        },
        y: "-80px",
        opacity: 1,  // Ensure the letters become visible
        stagger: 0.03,
        ease: Power3,
        duration: 0.4,
        onStart: function () {
            document.querySelector(".explore").style.opacity = 1;  // Make the entire container visible before animation starts
        }
    });
}

function sightsSplitAnimation() {
    var clutter = "";
    document.querySelector(".sights").textContent.split("").forEach(function (elem) {
        if (elem === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span class="inline-block opacity-0 font-['Neue_Machina_Light']">${elem}</span>`;
    });

    document.querySelector(".sights").innerHTML = clutter;

    gsap.to(".sights span", {
        scrollTrigger: {
            trigger: ".heading",
            start: "top 90%",
            end: "bottom 90%",
            // markers: true,
            // scrub: true


        },
        y: "-80px",
        opacity: 1,  // Ensure the letters become visible
        stagger: 0.03,
        ease: Power3,
        duration: 0.4,
        onStart: function () {
            document.querySelector(".sights").style.opacity = 1;  // Make the entire container visible before animation starts
        }
    });
}

function buildSplitAnimation() {
    var clutter = "";
    document.querySelector(".build").textContent.split("").forEach(function (elem) {
        if (elem === " ") clutter += `<span>&nbsp;</span>`


        clutter += `<span class="inline-block opacity-0   ">${elem}</span>`;
    });

    document.querySelector(".build").innerHTML = clutter;

    gsap.to(".build span", {
        scrollTrigger: {
            trigger: ".fleft",
            start: "top 90%",
            end: "bottom 90%",
            // markers: true,
            // scrub: true


        },
        y: "-80px",
        opacity: 1,  // Ensure the letters become visible
        stagger: 0.03,
        ease: Power3,
        duration: 0.4,
        onStart: function () {
            document.querySelector(".build").style.opacity = 1;  // Make the entire container visible before animation starts
        }
    });
}

function signSplitAnimation() {
    var clutter = "";
    document.querySelector(".sign").textContent.split("").forEach(function (elem) {
        if (elem === " ") clutter += `<span>&nbsp;</span>`
        clutter += `<span class="inline-block opacity-0 ">${elem}</span>`;
    });

    document.querySelector(".sign").innerHTML = clutter;

    gsap.to(".sign span", {
        scrollTrigger: {
            trigger: ".bigSignifico",
            start: "top 90%",
            end: "bottom 90%",
            // markers: true,
            // scrub: true
           


        },
        y: "-80px",
        opacity: 1,  
        stagger: 0.1,
        ease: Power3,
        duration: 0.7,
        onStart: function () {
            document.querySelector(".sign").style.opacity = 1;  
        }
    });
}


document.querySelector(".backToTop").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


gsap.to(".img-contain", {
    rotation: 360,    
    duration: 10,     
    repeat: -1,       
    ease: "none"    
});



let elements = document.querySelectorAll(".btn")

elements.forEach(function(element){
    let innerText = element.innerText
    element.innerText = ""

    let textContainer = document.createElement("div")


    for(let letter of innerText){
        let span = document.createElement("span")
        span.innerText = letter.trim() === "" ? "\xa0" : letter
        span.classList.add("letter")
        textContainer.appendChild(span)
    }

    element.appendChild(textContainer)
    element.appendChild(textContainer.cloneNode(true))
})

elements.forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.classList.remove("play")
    })
})








homePageAnimation()

slidesPageAnimation()

teamAnimation()

blueLayerAnimation()

splitAnimation()

loco()

capsuleAnimation()

changeBackgroundColor()

slideLastPage()

slideSecondPage()

slideThirdPage()

digitIncreasing()

cyanPageAnimation()

humanSplitAnimation()

realSplitAnimation()

impactSplitAnimtion()

exploreSplitAnimation()

buildSplitAnimation()

sightsSplitAnimation()

signSplitAnimation()