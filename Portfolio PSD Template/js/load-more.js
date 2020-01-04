$(".block").slice(6, 9).hide();
$(".btn").on('click', function(){
    $(".block").slice(6, 9).show();
    if (!$(this).hasClass('clicked')) {
    $(this).addClass('clicked')
    console.log('One Click')
    $(".btn").click(function(e){ 
        e.preventDefault();
        $(".block").slice(6, 9).hide(); 
    });
    } else { 
        $(this).removeClass('clicked'); 
        console.log('Second click');
    $(".btn").click(function(e){ 
        e.preventDefault();
        $(".block").slice(6, 9).show(); 
    });
    }
        })