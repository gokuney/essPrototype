$(function(){
//set height 

window.fixHeight = function(){
var hei  = ( parseInt($(window).height() ) > 300 ) ? $(window).height() : '300px';

$('.windowHeight').css('height' , hei );
};

$(window).on('resize' , function(){
	fixHeight();
});
fixHeight();

$(document).on('submit' , '.go-form' , function(e){

	e.preventDefault();
	window.location.href="/home";

});

});