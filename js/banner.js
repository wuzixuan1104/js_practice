$(function () {
  $('button').click(function() {
    var l = 5;
    var $banner = $(this).closest('.container').find('.banner');
    var r = parseInt($banner.attr('data-i')) + parseInt($(this).data('active'));
    $banner.attr('data-i', r <= 0 ? l : (l >= r ? r : 1) );
  });
});