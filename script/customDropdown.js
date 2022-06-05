$(document).ready(function(){
	$('.dropdown__select').on('click',function(){
		$(this).siblings('.dropdown__options-wrap').toggleClass('active');
		if($(this).hasClass("active")){
			$(this).removeClass("active");
		}else{
			$(this).addClass("active");
		}
	});
	$('.dropdown .dropdown__option').on('click',function(){
		var html = $(this).html();
		var value = $(this).find('span').data('value');
		console.log(value);
		$(this).closest('.dropdown__options-wrap').siblings('.dropdown__select').find('.dropdown__select-wrap').html(html);
		$(this).closest('.dropdown__options-wrap').removeClass('active');
		$(this).closest('.dropdown__options-wrap').prev().removeClass('active');
		$(this).closest('.dropdown').data('value',value);
		console.log($(this).closest('.dropdown').data('value'));
	});
});