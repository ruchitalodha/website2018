$(document).ready(function () {

(function() {
  $('.btn').click(function() {
    $(this).toggleClass('active');
    return $('.box').toggleClass('open');
  });

}).call(this);

});
