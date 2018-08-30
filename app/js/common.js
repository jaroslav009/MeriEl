// Scroll Function
function scrollFunc(id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset().top
	}, 1000);
}

$(function() {
	$('.custom-control-input').prop('indeterminate', true)
	$('.carousel').slick({
		centerMode: true,
		centerPadding: '60px',
		slidesToShow: 4,
		responsive: [
		  {
			breakpoint: 768,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 3
			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  arrows: false,
			  centerMode: true,
			  centerPadding: '40px',
			  slidesToShow: 1
			}
		  }
		]
	  });
	$('.slick-next, .slick-prev').css({
		"display": "none",
	})
});