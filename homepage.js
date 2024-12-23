/*var selected_for_animation = document.querySelectorAll('.animate-on-scroll');

console.log(selected_for_animation)
var observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.classList.add('finished-animation');
        }
    })
}, {
	threshold: 0.5
});

for (var i = 0; i < selected_for_animation.length; i++) {
    var elements = selected_for_animation[i];

    console.log(i);
    console.log("Hello")
    observer.observe(elements);
}*/

function Destination1Animation(){
    var animate = document.getElementById("Destination1");
    if (animate.classList.contains("show")) {
        animate.classList.remove("show");
    } 
    else {
        animate.classList.add("show");
    }
}

function Destination2Animation(){
    var animate = document.getElementById("Destination2");
    if (animate.classList.contains("show")) {
        animate.classList.remove("show");
    } 
    else {
        animate.classList.add("show");
    }
}

function Destination3Animation(){
    var animate = document.getElementById("Destination3");
    if (animate.classList.contains("show")) {
        animate.classList.remove("show");
    } 
    else {
        animate.classList.add("show");
    }
}

function Destination4Animation(){
    var animate = document.getElementById("Destination4");
    if (animate.classList.contains("show")) {
        animate.classList.remove("show");
    } 
    else {
        animate.classList.add("show");
    }
}