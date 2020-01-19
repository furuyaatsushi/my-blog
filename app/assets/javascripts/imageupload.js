$(document).on('turbolinks:load', function(){
  
  var filefield = $('#article_images_attributes_0_content')
  var filefield1 = $('#article_images_attributes_1_content')
  var filefield2 = $('#article_images_attributes_2_content')
  var filefield3 = $('#article_images_attributes_3_content')
  var filefield4 = $('#article_images_attributes_4_content')

  $(filefield).on('change', filefield, function(e) {
    $('#upload-box2').css({'display':'block'});
    $(this.parentNode).css({'display':'none'});
    $('#uploaded-box0').css({'display':'block'});
    $('#preview-box0').css({'display':'none'});

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

  $(filefield3).on('change', filefield3, function(e) {
    $('#upload-box5').css({'display':'block'});
    $(this.parentNode).css({'display':'none'});
    $('#uploaded-box3').css({'display':'block'});

    file = e.target.files[0]
    reader = new FileReader(),
    preview = $('#preview3');
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

  $(filefield4).on('change', filefield4, function(e) {
    $(this.parentNode).css({'display':'none'});
    $('#uploaded-box4').css({'display':'block'});

    file = e.target.files[0]
    reader = new FileReader(),
    preview = $('#preview4');
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