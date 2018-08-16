/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  var $a = $('.banner').children();
  $a.last().clone().prependTo('.banner') && $a.first().clone().appendTo('.banner');
  var lIndex = $('.banner').children().length-1;
  $('.box').css('width', (lIndex+1)*50 + 'px' );
  var now = 1;

  $('button').click(function() {
    switch($(this).data('active')) {
      case 1: //right
        if(now == lIndex || ++now == lIndex) {
          $( '.box' ).animate({ "left": "-=100%" }, { duration: "fast", complete: function() { $('.box').css("left", 0);}});
          now = 1;
        } else {
          $('.box').animate({"left": "-=100%"},"fast");
        }
        break;
      case -1: //left
        if(now == 1 || --now == 1) {
          $( '.box' ).animate({ "left": "+=100%" }, { duration: "fast", complete: function() { $('.box').css("left", "-500%");}});
          now = lIndex;
        } else {
          $('.box').animate({"left": "+=100%"},"fast");
        }
        break;
    }
  });
});