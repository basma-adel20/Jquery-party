$("#menu li a").not($('.closeBtn')).click(function(){
    
    var sectionHref= $(this).attr("href");
    var SectionOffset = $(sectionHref).offset().top;
    $("html , body").animate({scrollTop:SectionOffset},1500);
    
})


/*********    header section *************** */
$('.menu-icon').click(function () {
    $('.menu-icon').animate({left:270})
    $('#menu').animate({width:250},100)
});


$('.closeBtn').click(function () {
    $('#menu').animate({width:0},100);
    $('.menu-icon').animate({left:10})
});


/***********   details section   ******************** */

$('#details .singer-content').hide(0);
$('.singer h3').click(function () {
    $('#details .singer-content').not($(this).next()).slideUp(600);
    $(this).next().slideToggle(600);
    
})

/************* count down section ******************* */

var countDownDate = new Date("OCT 25, 2024 12:0:0").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;
      
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    $('.days').html(days+' D');
    $('.hours').html(hours + ' h');
    $('.minutes').html(minutes+' m');
    $('.seconds').html(seconds +' s');
      
  }, 1000);

/***************** contact section **************************** */

$('textarea').keyup(function () {
    let remain = 100 - $(this).val().length;
    if(remain > 0 )
    {
        $('.remain-chars').text(remain);
    }
    else
    {
        $('.remain-chars').text('your available character finished');
    }
});