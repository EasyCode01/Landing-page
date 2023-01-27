gsap.registerPlugin(ScrollTrigger);

gsap.from('.anime1', {
    y: 100,
    duration: 1,
    scrollTrigger:{
        trigger:'.anime1',
        toggleActions: 'restart none none none',
        // scrub: 4
    }
})