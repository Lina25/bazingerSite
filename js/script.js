//preloader

$(window).load(function () {
	$(".loaded").fadeOut();
	$(".preloader").delay(1000).fadeOut("slow");
});


//scroll

$('body').scrollspy({
	target: '.navbar',
	offset: 160
});


//google map 

var map = new GMaps({
	el: '#map',
	lat: 49.831103,
	lng: 23.969860,
	scrollwheel: false
});

map.addMarker({
	lat: 49.831103,
	lng: 23.969860
});

//scroll up

$(window).scroll(function () {
	if ($(this).scrollTop() > 600) {
		$('.scrollup').fadeIn('slow');
	} else {
		$('.scrollup').fadeOut('slow');
	}
});

$('.scrollup').click(function () {
	$("html, body").animate({
		scrollTop: 0
	}, 1000);
	return false;
});