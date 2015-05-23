// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(document).ready(function($){
  $('#menu-icon').on('click', function(event) {
    if($('#menu').css('visibility') == 'hidden'){
      // menuを見せる
      $('#menu').css({               
        visibility: 'visible',
        animation: 'menu-in 0.5s ease'
      });
      $('#menu').animate({opacity: '0.9'}, 500);
      // コンテンツを隠す
      $('#container').css({
        animation: 'container-out 0.5s ease',
        transform: 'scale(0.8, 0.8)'
      });
      // コンテンツをスクロールできないようにする
      $('html').css({
        overflow: 'hidden'
      });
      $(window).on('touchmove.noScroll', function(event){
        event.preventDefault();
      });
    }else{
      $('#menu').css({
        animation: 'menu-out 0.5s ease'
      });
      $('#menu').animate({opacity: '0'}, 500, function(){
        $('#menu').css({visibility: 'hidden'});
      });
      $('#container').css({
        animation: 'container-in 0.5s ease',
        transform: 'scale(1, 1)'
      });
      $('html').css({
        overflow: 'scroll'
      });
      $(window).off('.noScroll');
    }
  });
  // ページ遷移時のアニメーション
  $(window).bind('beforeunload', function(event) {
    $('#menu').css({
      animation: 'menu-out 0.5s ease'
    });
    $('#menu').animate({opacity: '0'}, 500, function(){
      $('#menu').css({visibility: 'hidden'});
    });
    $('#container').css({
      animation: 'container-in 0.5s ease',
      transform: 'scale(1, 1)'
    });
  });
})(jQuery);
