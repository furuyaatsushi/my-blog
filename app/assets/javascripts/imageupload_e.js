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
    };
  })
});