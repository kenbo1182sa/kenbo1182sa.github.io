//スライドショー//

//$(function(){
//	var interval = 5000;
//	$('#slide').each(function(){
//		var container = $(this);
//		function switchImg(){
//			var imgs = container.find('img');
//			var first = imgs.eq(0);
//			var second = imgs.eq(1);
		//	first.appendTo(container).fadeOut();
//			first.appendTo(container).hide();
//			second.fadeIn();
//		}
//		setInterval(switchImg, interval);
//	})
//})

//$(function(){
//	$('.accordion').each(function(){
//		var dl = $(this);
//		var allDt = dl.find('dt');
//		var allDd = dl.find('dd');
//		allDd.hide();
//		allDt.css('cursor','pointer');
//
//		allDt.click(function(){
//		var dt = $(this);
//		var dd = dt.next();
//		allDd.hide();
//		dd.show();
//		allDt.css('cursor','pointer');
//		dt.css('cursor','default');
//		});
//	});
//});

//ここまで//

//アコーディオン//

//$(function()
//{
//	// [.syncer-acdn]にクリックイベントを設定する
//	$( '.syncer-acdn' ).click( function()
//	{
//		// [data-target]の属性値を代入する
//		var target = $( this ).data( 'target' ) ;
//
//		// [target]と同じ名前のIDを持つ要素に[slideToggle()]を実行する
//		$( '#' + target ).slideToggle() ;
//
//		// 終了
//		return false ;
//	} ) ;
//}) ;



$(function(){
        $("#acMenu dt").on("click", function() {
            $(this).next().slideToggle(1200);
            // $(this).toggleClass("active");//追加部分
        });
});

//ここまで//

//$(function(){
//        $('.honbun').hide();
//        $('TheFG').click(function(){
//                $('img').removeClass('rotate');
//                $('dd.honbun').slideUp();
//                if($('+dd.honbun',this).css('display') == 'none'){
//                        $('img',this).addClass('rotate');
//                        $('+dd.honbun',this).slideDown();
//                }
//        });
//});