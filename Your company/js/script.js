$(document).ready(function(){
    $('.your-class').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        centerMode: true,
        variableWidth: true,

        prevArrow: $('.button_prew'),
        nextArrow: $('.button_next')
    });
});


$(document).ready(function() {
    $('.burger-images').click(function() {
        $('.menu').toggleClass('active');
    })
})
$(document).ready(function() {
    $('.burger-images').click(function() {
        $('.main-section').toggleClass('inactive');
    })
})