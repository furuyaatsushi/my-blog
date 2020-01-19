$(document).on('turbolinks:load', function(){
  
  $(document).ready(function(){
    if(
      document.getElementById("previewed0") != null
      && document.getElementById("previewed1") == null){
      $('#upload-box2').css({'display':'block'});
    }else if(
      document.getElementById("previewed0") != null
      && document.getElementById("previewed1") != null
      && document.getElementById("previewed2") == null){
      $('#upload-box3').css({'display':'block'});
    }else if(
      document.getElementById("previewed0") != null
      && document.getElementById("previewed1") != null
      && document.getElementById("previewed2") != null
      && document.getElementById("previewed3") == null){
      $('#upload-box4').css({'display':'block'});
    }else if(
      document.getElementById("previewed0") != null
      && document.getElementById("previewed1") != null
      && document.getElementById("previewed2") != null
      && document.getElementById("previewed3") != null
      && document.getElementById("previewed4") == null){
      $('#upload-box5').css({'display':'block'});
    };
  })

  $('#image-delete0').on('click', function(){

  })
});