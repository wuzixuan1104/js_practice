/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  $('.left').click(function() {
    var $first = $('.items .item').first();
    var $tmp = $first.clone(true); //true複製該元件的物件，預設為複製html
    $('.items').append($tmp);
    $first.remove();
  });

  $('.right').click(function() {
    var $last = $('.items .item').last();
    var $tmp = $last.clone(true);
    $('.items').prepend($tmp);
    $last.remove();
  });
});