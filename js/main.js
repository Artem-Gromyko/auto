$(function () {

	$('.top__slider').slick({
		arrows: false,
		dots: true,
		speed: 700,
		autoplay: true,
		fade: true,
		responsive: [{
			breakpoint: 1200,
			settings: {
				dots: false
			}
		}, ]
	});

	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1141,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 846,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active');
	});

});

// smooth scroll
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};