$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});

window.onscroll = function() { scrollFunction() }

function scrollFunction() {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $('.navbar').removeClass('sticky-top').addClass('fixed-top')
    } else {
        $('.navbar').removeClass('fixed-top').addClass('sticky-top')
    }
}


$('.nav-link').on('click', function (e) {
    $('.nav-item').removeClass('active')
    $(this).parent().addClass('active')
})