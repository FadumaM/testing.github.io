$(document).ready(function() {
  $(".landing-page").fadeIn(3000, function() {
    $(".loader").fadeIn(2000);
  });

  setTimeout(function() {
    $('.loader').css('display', 'none');
  }, 16500);

  var folder = "http://localhost:4000/images/";

  // $.ajax({
  //   url: folder,
  //   success: function(data) {
  //     $(data).find("a").attr("href", function(i, val) {
  //       if (val.match(/\.(jpe?g|png|gif)$/)) {
  //         console.log(val);
  //         // $("body").append("<img src='" + folder + val + "'>");
  //       }
  //     });
  //   }
  // });

});
