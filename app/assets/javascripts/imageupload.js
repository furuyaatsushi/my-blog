$(function() {
  var input_area = $('.upload-box');

  $(document).on('change', '#post-image', function(){
    var new_input = $(`<input name="article[images_attributes][][content]", type="file", id="post-image">`);
    input_area.append(new_input);
  })
})