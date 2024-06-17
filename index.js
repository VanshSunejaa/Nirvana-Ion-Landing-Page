gsap.registerPlugin(ScrollTrigger);

// Log to ensure the script is loaded
console.log("GSAP and ScrollTrigger loaded");

// Animation for the .two section
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".two",
        start: "0% 95%", // Adjusted start point to trigger animation when 95% of the trigger element is in view
        end: "50% 50%", // Adjusted end point to complete animation when trigger element is centered in viewport
        scrub: true,
        onUpdate: () => console.log("Scrubbing .two section") // Debugging
    }
});

// Ensure the .nion element has the right initial position to animate from


tl.to(".nion", {
    
    top: "140%",
    left:"-25%",
    width:"34%",
    opacity:1,
    
    

},"anim");
tl.to(".blue", {
    
    top: "140%",
    left:"-25%",
    width:"34%",
    opacity:0,
    

},"anim");
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".three",
        start: "0% 95%", // Adjusted start point to trigger animation when 95% of the trigger element is in view
        end: "50% 50%", // Adjusted end point to complete animation when trigger element is centered in viewport
        scrub: true,
        onUpdate: () => console.log("Scrubbing .two section") // Debugging
    }
});
tl2.to(".nion", {
    top: "240%", // Move .fanta to the desired position in .three section
    left: "15%",
    width:"23%"
     // Adjust left position as needed
    
}, "anim2");
