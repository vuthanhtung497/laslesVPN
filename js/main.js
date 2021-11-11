$('.customer-list').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:"<button type='button' class='slick-prev slick-arrow pull-left'><i class='fas fa-arrow-left'></i></button>",
    nextArrow:"<button type='button' class='slick-next slick-arrow pull-right'><i class='fas fa-arrow-right'></i></i></button>",
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1
      //   }
      // }
    ]
  });
  var planItems = document.querySelectorAll('.plan-item')
  var planList = document.querySelector('.plan-list')
  planItems.forEach(function(planItem){
    planItems.forEach(function(e){
        e.addEventListener('mouseover', function(){
            planList.querySelector('.active').classList.remove('active');
            e.classList.add('active')
            planList.querySelector('.button--primary').classList.remove('button--primary','button--shadow')
            // e.querySelector('.button').classList.remove('button--outline')
            e.querySelector('.button').classList.add('button--primary','button--shadow')
            // planList.querySelector('.button').closest('.active)').classList.add('button--outline')
            // console.log(e.querySelector('.button'))

        })
    })
  })