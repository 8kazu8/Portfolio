$(function () {
    const pageTop = $("#page-top");
    pageTop.hide(); // 最初はボタンを非表示にする
    $(window).scroll(function () {
      if ($(this).scrollTop() > 1000) { // 1000pxスクロールしたら表示
        pageTop.fadeIn(); // 1000px以上スクロールしたらボタンをフェードイン
      } else {
        pageTop.fadeOut(); // 1000px以下になったらボタンをフェードアウト
      }
    });
    pageTop.click(function () {
      $("body,html").animate(
        {
          scrollTop: 0, // 上から0pxの位置に戻る
        },
        500 // 500ミリ秒かけて戻る
      );
      return false;
    });
  });
  $(function(){
	$(window).scroll(function (){
		$('.js-fade').each(function(){
			var pos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > pos - windowHeight + 100){
				$(this).addClass('scroll');
			}
		});
	});
});