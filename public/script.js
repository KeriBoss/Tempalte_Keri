var splide = new Splide(".splide", {
    type: "loop",
    autoplay: "play",
});
var bar = splide.root.querySelector(".my-carousel-progress-bar");


let content = document.querySelectorAll('.nav-link');

content.forEach(data => {
    data.addEventListener('click', function(e){
        let allContent = document.querySelectorAll('.tab-content .tab-pane');
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


// Updates the bar width whenever the carousel moves:
splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + "%";
});

splide.mount();
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
