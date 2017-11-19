$(function(){
	// スムーススクロール
	$('a[href^=#]').click(function() {

		var print_check = $(this).attr('href');
		//console.log(menu_check);
		if(print_check != '#print'){

			var speed = 400;
			var href= $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, speed, 'swing');
			return false;
		}

	});
});

//ラジオボタン
var checkbox = 'input[name^="Z"]';

$(function() {

$(checkbox).prop('checked', false);//リロードした時にすべてのチェックをオフにする

  $(checkbox).change(function() {
 
	if ($(this).prop('checked')) {
	  $(this).parents().addClass('current');
	}else{
	  $(this).parents().removeClass('current');				
	}
	
  });

});

//比較送信後
$(function(){
	$('.bt_comparison a').click(function () {
		
		$('.comparison_answer h5').show();//クリックするとアンサーリストのタイトルが表示される
		$('.bt_comparison .print_bt').show();//クリックすると印刷ボタンが表示される
		$('.function_icons').show();//クリックするとアイコンが表示される
		
		$('.comparison_answer ul').empty();//クリックするたびに「比較商品」欄を空にする
		$('.info_box li').removeClass('current');//クリックするたびにインフォメーションリストをdisplay:noneにする
		$('.info_box li.info_guide').addClass('current');
		$(checkbox).each(function(){
			if ($(this).prop('checked')) {
				var answer = $(this).val();
				
				//alert (answer);
				$('.comparison_answer ul').append('<li>' +answer+ '</li>');//クリックするたびに「比較商品」欄にチェック商品一覧を表示する
				
				if($('.info_box li').hasClass(answer)){
			    	$('.info_box li.' + answer).addClass('current');
    			}
			}
		});
	});	
});