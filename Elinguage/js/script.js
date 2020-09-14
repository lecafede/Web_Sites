$(document).ready(function() {
    $('.register-form').on("click", ".tab", function() {
        $('.register-form').find('.active').removeClass('active');
        $(this).addClass("active")
        $('.tab-form').eq($(this).index()).addClass('active')
    })
})

function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("checkbox");
    // Get the output text
    var text = document.getElementById("img1");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.background = "red";

      
    } else {
      text.style.display = "block";
    }
  }