$('.menu-icon').bind('click', function() {
  console.log("Butona Basildi")
	$(this).toggleClass('active');
	$(this).find('div').removeClass('no-animation');
});