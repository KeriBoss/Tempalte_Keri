//Create slider for item Project 1
var splide = new Splide(".splide", {
    type: "loop",//loop infinite
    autoplay: "play",//auto translate current slider
    gap: 50,//create space between slides
});

var bar = splide.root.querySelector(".my-carousel-progress-bar");
// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
});
//Render slider on screen
splide.mount();

//Create slider for item Project 2
var splide2 = new Splide(".splideItem2", {
    type: "loop",//loop infinite
    autoplay: "play",//auto translate current slider
    gap: 50,//create space between slides
});
// Updates the bar width whenever the carousel moves:
var bar2 = splide2.root.querySelector(".my-carousel-progress-bar-2");
splide2.on("mounted move", function () {
    var end = splide2.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide2.index + 1) / end, 1);
    bar2.style.width = String(100 * rate) + "%";
});
splide2.mount();//Render slider on screen


//Create tab toggle
let content = document.querySelectorAll('#pills-tab .nav-link');
let content2 = document.querySelectorAll('#pills-tab-2 .nav-link');

content.forEach(data => {
    data.addEventListener('click', function(e){
        let allContent = document.querySelectorAll('#pills-tabContent.tab-content .tab-pane');
        let id = data.getAttribute('id');
        allContent.forEach(item => {
            if(item.getAttribute('aria-labelledby') == id){
                item.classList.add('show')
                item.classList.add('active')
            }
            else{
                item.classList.remove('show')
                item.classList.remove('active')
            }
        })
    })
})
content2.forEach(data => {
    data.addEventListener('click', function(e){
        let allContent = document.querySelectorAll('#pills-tabContent-2.tab-content .tab-pane');
        let id = data.getAttribute('id');
        allContent.forEach(item => {
            if(item.getAttribute('aria-labelledby') == id){
                item.classList.add('show')
                item.classList.add('active')
            }
            else{
                item.classList.remove('show')
                item.classList.remove('active')
            }
        })
    })
})

//-----------------------------------------------------------------------
//Show tab slider
const getlengthId = document.querySelectorAll(".btn-nmhp-parent");
// const showTab1 = document.getElementById('#content--nmhp-card-faq-accordion--1');
const getContentTab = document.querySelectorAll(".default-ltr-cache-n5fvzt");

for (let i = 0; i < getlengthId.length; i++) {
    let getId = document.querySelector(`#button--nmhp-card-faq-accordion--${i}`);

    getId.addEventListener("click", function (event) {
        getContentTab.forEach((element) => {
            if (element.getAttribute("aria-labelledby") == getId.getAttribute("id")) {
                element.classList.toggle("active");
            }
        });
    });
}
//--------------------------------------------------------------//
//--------------------------Video show--------------------------//
$(document).ready(function() {
    $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});
