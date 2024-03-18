
  $(function(){
    $('.hero_area').slick({
        arrows:false,
        autoplay:true,
        autoplaySpeed:5000,
        dots:true,
        dotsClass:'hero_slider_dots',
    });
  })
  
  $(function(){
    $('.arrivals_slider').slick({
      slidesToShow:4,
      slideToScroll:1,
      prevArrow:`<i class="slider_arrow fa-solid fa-chevron-left"></i>`,
      nextArrow:`<i class="slider_arrow fa-solid fa-chevron-right"></i>`,
    });
  })
  $(function(){
    $('.offer_slider').slick({
      slidesToShow:2,
      arrows:false,
      autoplay:true,
      autoplaySpeed:5000,
      dots:true,
      dotsClass:'offer_slider_dots'
    });
  })
  $(function(){

    $('.latest_new_product_slider').slick({
      slidesToShow:4,
      arrows:false,
      autoplay:true,
      autoplaySpeed:5000,
      dots:true,
      dotsClass:'latest_new_product_dots'
    });
  })
  $(function(){
    
    $('[data-countdown]').each(function() {
      var $this = $(this), finalDate = $(this).data('countdown');
      $this.countdown(finalDate, function(event) {
        $this.html(event.strftime(''
        + '<div><h3>%D</h3> <p>days </P></div>'
        +'<span>:</span>'
        + '<div><h3>%H</h3> <p>hour</P></div> '
        +'<span>:</span>'
        + '<div><h3>%M</h3> <p>min</P></div>  '
        +'<span>:</span>'
        + '<div><h3>%S</h3> <p>sec</P></div> '));
      });
    });
  })
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

new VenoBox({
  selector: ".venobox"
});


new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});