$(document).on('turbolinks:load', function(){

  $('.favorites-list-head').on('click', function(){
    $('.user-posted').css({'display':'none'});
    $('.user-favorites').css({'display':'block'});

    var element = document.getElementById('user-post-article');
    var element2 = document.getElementById('user-favorites');
    element.classList.remove('active');
    element2.classList.add('active');
  })

  $('.posts-list-head').on('click', function(){
    $('.user-posted').css({'display':'block'});
    $('.user-favorites').css({'display':'none'});

    var element = document.getElementById('user-post-article');
    var element2 = document.getElementById('user-favorites');
    element2.classList.remove('active');
    element.classList.add('active');
  })
})