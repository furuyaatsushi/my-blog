$(function() {
  var input_area = $('.upload-box');

  $(document).on('change', '#article_images_attributes_0_content', function(){
    var new_input = $(`<input name="article[images_attributes][1][content]", type="file", id="post-image">`);
    input_area.append(new_input);
  })
})