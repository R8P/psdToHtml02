$(function(){
  $('#nav').slicknav();
  $("#header").sticky({topSpacing:0});
  $('.bxslider').bxSlider({
    auto: true,
    pager: true
  });


$('.owl-one').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})
$('.owl-two').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
$('.owl-three').owlCarousel({
  loop:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
$('.owl-four').owlCarousel({
  loop:true,
  nav:true,
  margin:10,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
})

});