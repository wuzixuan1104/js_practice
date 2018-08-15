$(function () {
  // $('button').click(function() {
  //   var l = 5;
  //   var $banner = $(this).closest('.container').find('.banner');
  //   var r = parseInt($banner.attr('data-i')) + parseInt($(this).data('active'));
  //   $banner.attr('data-i', r <= 0 ? l : (l >= r ? r : 1) );
  // });
  
	$('button').click(function() {
		var l = 5;
		var $banner = $(this).closest('.container').find('.banner');
		var r = parseInt($banner.attr('data-i')) + parseInt($(this).data('active'));
    var i = r <= 0 ? l : (l >= r ? r : 1);
 
    //5->1 右
    //5<-1 左
    var index = $banner.find('.show').index();
    if(index == 4) {
      var a = $banner.find('a');
      $banner.empty().append([a.eq(4), a.eq(0)]);
      $banner.attr('data-i', 1 );
      $banner.empty().append(a);

      // $( "#book" ).animate({

      //   opacity: 0.25,
      //   left: "+=50",
      //   height: "toggle"
      // }, 5000, function() {
      //   // Animation complete.
      // });
    } else if(index == 0){

    }

    $banner.attr('data-i', i );
    $banner.find('a').eq(i-1).addClass('show').siblings().removeClass('show');







    // if (r <= 0) { //1 將最後一個搬到第一個 5 1 2 3 4 / data-i = 1
    //   var $last = $banner.find('a').last();
    //   $banner.prepend($last);

    // } else if(l >= r) {
    //   $banner.attr('data-i', r);

    // } else { //5 將第一個搬到最後一個 2 3 4 5 1 / data-i = 5
    //   var $first = $banner.find('a').first();
    //   $banner.append($first);
    // }




	});
});