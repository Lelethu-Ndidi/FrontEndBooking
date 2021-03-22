const foodItem = document.querySelectorAll('.food');

const tl = new TimelineMax();

tl.from('.hero-desc',1.25, {
    x: "-1000px",
    ease: Expo.easeOut
})
.from('.hero-desc p', 0.33,{
    opacity:0,
})
.from('.hero-desc button', 0.33,{
    opacity:0,
})
.from('.food-grid-wrapper button', 0.33,{
    opacity:0,
})

foodItem.forEach(food => {
    tl.from(food,0.55, {
        y:"5000px",
        ease: Expo.easeOut,
    })
})
tl.play();

// Hover effect for hero image
new hoverEffect({
    parent: document.querySelector('.hero-img'),
    intensity: 0.3,
    image1: '../scripts/food1.jpg',
    image3: '../scripts/food1.jpg',
    displacementImage:  '../scripts/food8.jpg',
})