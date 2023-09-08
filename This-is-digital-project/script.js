var tl = gsap.timeline();

tl
.from("#page1 h1",{
    opacity: 0.1,
    duration: 1.5,
    ease: Expo.easeInOut
})
.from("#sub1",{
    opacity: 0.1,
    duration: 1.5,
    ease: Expo.easeInOut
},'-=1.5')
.from("#page1 #img1",{
    opacity: 0,
    left: 100,
    duration: 1.5,
    ease: Expo.easeInOut
},'-=1.5')
.from("#page1 #img2",{
    opacity: 0,
    right: 100,
    duration: 1.5,
    ease: Expo.easeInOut
},'-=1.5')
.from("#page1 #img3",{
    top: 400,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
},'-=1.5')
