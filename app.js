const tl = gsap.timeline({defaults: {ease: "power1.out"}})

tl.staggerFromTo(".text", 1.5, {opacity: 0}, {opacity: 1}, 0.5)
tl.to(".slider", 1, {y: "-100%"})
tl.to(".intro", 1, {y: "-100%"}, "-=1")
tl.fromTo('nav', 1, {opacity: 0}, {opacity:1})
tl.fromTo('.big-text', 1, {opacity: 0}, {opacity:1}, "-=0.5")