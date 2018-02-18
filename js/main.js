$(document).ready(function () {


  $('#confirm').click(function () {
    $('input').each(function () {
      if (!$(this).val()) {
        //alert('Fill field '+$(this).attr('placeholder'));
        $(this).addClass('wrongValue');
      }
    })


    var pattern = /[0-9\-\(\)\s]{9}/
    if (!pattern.test($('#phoneNumber').val())) {
      $('#phoneNumber').val("");
      $('#phoneNumber').addClass('wrongValue');
    }
  });

  $('#signUp').click(function () {
    window.location.replace("register.html");
  });

  $('input').focus(function () {
    $(this).removeClass('wrongValue');
  })

})


function previewFile(){
  var preview = document.querySelector('img'); //selects the query named img
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
    $('.image-container').css('background-image', 'url(' + reader.result + ')');
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  } else {
    preview.src = "";
  }


}



