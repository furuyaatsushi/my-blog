$(document).on('turbolinks:load', function(){
  var input_area = $('.upload-box');

  var inputFirst = document.getElementById("article_images_attributes_1_content")
  console.log(inputFirst)

  if (inputFirst == null ){
    $(document).on('change', '#article_images_attributes_0_content', function(){
      var new_input = $(`<input name="article[images_attributes][1][content]", type="file", id="article_images_attributes_1_content", class="post-img">`);
      input_area.prepend(new_input);
    })
  }

  $(document).on('change', '#article_images_attributes_1_content', function(){
    var new_input1 = $(`<input name="article[images_attributes][2][content]", type="file", id="article_images_attributes_2_content", class="post-img">`);
    input_area.prepend(new_input1);
  })

  $(document).on('change', '#article_images_attributes_2_content', function(){
    var new_input2 = $(`<input name="article[images_attributes][3][content]", type="file", id="article_images_attributes_3_content", class="post-img">`);
    input_area.prepend(new_input2);
  })

  $(document).on('change', '#article_images_attributes_3_content', function(){
    var new_input3 = $(`<input name="article[images_attributes][4][content]", type="file", id="article_images_attributes_4_content", class="post-img">`);
    input_area.prepend(new_input3);
  })


  $(document).on('change', '.post-img',function() {
    $('.upload-box').children(":first").css({'display':'block'});
    $(this).css({'display':'none'});
  })
    
})