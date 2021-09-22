//Adaptive functions
$(window).resize(function(event) {
	adaptive_function();
});
function adaptive_header(w,h) {
		var headerMenu=$('.header__menu');
		var headerMenuBody=$('.menu__body');
		var headerIconMenu=$('.icon-menu__body');
	if(w<767){
		if(!headerMenuBody.hasClass('done1')){
			headerMenuBody.addClass('done1').appendTo(headerIconMenu);
		}
	}else{
		if(headerMenuBody.hasClass('done1')){
			headerMenuBody.removeClass('done1').appendTo(headerMenu);
		}
	}

	var headerLogo=$('.header__logo');
	var headerColumn1=$('.header__column_1');
	var headerColumn2=$('.header__column_2');
	if(w<767){
		if(!headerLogo.hasClass('done2')){
			headerLogo.addClass('done2').prependTo(headerColumn2);
		}
	}else{
		if(headerLogo.hasClass('done2')){
			headerLogo.removeClass('done2').appendTo(headerColumn1);
		}
	}

	var footeText=$('.footer__text');
	var footerColumn1=$('.footer__column_1');
	var footerColumn3=$('.footer__column_3');
		if(w<650){
		if(!footeText.hasClass('done3')){
			footeText.addClass('done3').appendTo(footerColumn3);
		}
	}else{
		if(footeText.hasClass('done3')){
			footeText.removeClass('done3').appendTo(footerColumn1);
		}
	}
}
function adaptive_function() {
		var w=$(window).outerWidth();
		var h=$(window).outerHeight();
	adaptive_header(w,h);
}
	adaptive_function();