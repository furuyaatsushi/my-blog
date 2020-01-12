$(document).on('turbolinks:load', function(){
  var input_area = $('.upload-box');

  var inputFirst = document.getElementById("article_images_attributes_1_content")

  // if (inputFirst == null ){
  //   $(document).on('change', '#article_images_attributes_0_content', function(){
  //     var new_input = $(`<input name="article[images_attributes][1][content]", type="file", id="article_images_attributes_1_content", class="post-img">`);
  //     input_area.prepend(new_input);
  //   })
  // }

  // $(document).on('change', '#article_images_attributes_1_content', function(){
  //   var new_input1 = $(`<input name="article[images_attributes][2][content]", type="file", id="article_images_attributes_2_content", class="post-img">`);
  //   input_area.prepend(new_input1);
  // })

  // $(document).on('change', '#article_images_attributes_2_content', function(){
  //   var new_input2 = $(`<input name="article[images_attributes][3][content]", type="file", id="article_images_attributes_3_content", class="post-img">`);
  //   input_area.prepend(new_input2);
  // })

  // $(document).on('change', '#article_images_attributes_3_content', function(){
  //   var new_input3 = $(`<input name="article[images_attributes][4][content]", type="file", id="article_images_attributes_4_content", class="post-img">`);
  //   input_area.prepend(new_input3);
  // })

  var filefield = $('#article_images_attributes_0_content')
  var filefield1 = $('#article_images_attributes_1_content')
  var filefield2 = $('#article_images_attributes_2_content')

  $(filefield).on('change', filefield, function(e) {
    $('#upload-box2').css({'display':'block'});
    $(this.parentNode).css({'display':'none'});
    $('#uploaded-box0').css({'display':'block'});

    file = e.target.files[0]
    reader = new FileReader(),
    preview = $('#preview0');
    preview.empty();

    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.append($('<img>').attr({
          src: e.target.result,
          height: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
    

  $(filefield1).on('change', filefield1, function(e) {
    $('#upload-box3').css({'display':'block'});
    $(this.parentNode).css({'display':'none'});
    $('#uploaded-box1').css({'display':'block'});

    file = e.target.files[0]
    reader = new FileReader(),
    preview = $('#preview1');
    preview.empty();

    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.append($('<img>').attr({
          src: e.target.result,
          height: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });

  $(filefield2).on('change', filefield2, function(e) {
    $('#upload-box4').css({'display':'block'});
    $(this.parentNode).css({'display':'none'});
    $('#uploaded-box2').css({'display':'block'});

    file = e.target.files[0]
    reader = new FileReader(),
    preview = $('#preview2');
    preview.empty();

    reader.onload = (function(file) {
      return function(e) {
        preview.empty();
        preview.append($('<img>').attr({
          src: e.target.result,
          height: "100%",
          class: "preview",
          title: file.name
        }));
      };
    })(file);
    reader.readAsDataURL(file);
  });
})