$(document).ready(function(){
    $('.next').on('click', function(){
      var currentImg = $('.current');
      var nextImg = currentImg.next();
  
      if(nextImg.length){
        currentImg.removeClass('current').css('z-index', -10);
        nextImg.addClass('current').css('z-index', 10);
      }
    });
  
    $('.prev').on('click', function(){
      var currentImg = $('.current');
      var prevImg = currentImg.prev();
  
      if(prevImg.length){
        currentImg.removeClass('current').css('z-index', -10);
        prevImg.addClass('current').css('z-index', 10);
      }
    });
  });
  