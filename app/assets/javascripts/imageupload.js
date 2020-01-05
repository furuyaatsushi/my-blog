$(document).on('turbolinks:load', function(){
  var input_area = $('.upload-box');

  $(document).on('change', '#article_images_attributes_0_content', function(){
    var new_input = $(`<input name="article[images_attributes][1][content]", type="file", id="article_images_attributes_1_content">`);
    input_area.prepend(new_input);
  })

  $(document).on('change', '#article_images_attributes_1_content', function(){
    var new_input1 = $(`<input name="article[images_attributes][2][content]", type="file", id="article_images_attributes_2_content">`);
    input_area.prepend(new_input1);
  })
})