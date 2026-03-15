gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
})

// animações hero
gsap.from (".hero", {
  opacity: 0,
  duration: 1.5
})

gsap.from ("picture:nth-child(2)", {
  y:60,
  duration:1
})

gsap.from ("picture:nth-child(1)", {
  y:-60,
  duration:1
})

// animações cards

gsap.from (".card", {
  opacity:0,
  stagger: 0.3,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".cards",
    start: "0% 80%",
    end: "100% 70%",
    scrub: true
  }

})

// animações cidades

gsap.from (".secaoObrigado ul li", {
  opacity:0,
  x: 40,
  stagger: 0.3,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".secaoObrigado ul",
    start: "0% 80%",
    end: "100% 50%",
    scrub: true
  }
})

// animação footer

gsap.from ("footer", {
  y:-200,
  immediateRender: false,
  scrollTrigger: {
    trigger: "footer",
    scrub: true,
    invalidateOnRefresh: true,
    end: "100% 100%"
  }
})

// texto animado

const split = SplitText.create(".textoSplit", {
  type: "lines, words, chars",
  mask: "lines"
});

gsap.from(split.chars, {
  y: 40,
  opacity: 0,
  duration: 0.3,
  stagger: .03
});
