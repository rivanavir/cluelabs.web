$(document).ready(function(){
  
  $('.custom-form input.form-control, .custom-form textarea.form-control').focusout(function(e){
    if($(this).val() != ''){
      $(this).parent('.form-group').addClass('notEmpty')
    } else{
      $(this).parent('.form-group').removeClass('notEmpty')
    }
  });

  $(window).enllax();

});
