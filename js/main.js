$(document).ready(function () {

  $('.confirm').click(function () {

    $('input').each(function () {
      if (!$(this).val()) {
        //alert('Fill field '+$(this).attr('placeholder'));
        $(this).addClass('wrongValue');
      }
    })
  });

  $('input').focus(function () {
    $(this).removeClass('wrongValue');
  })

})


