//  Function for passing json-file

function parseJSON(file) {
    var request = new XMLHttpRequest();
    request.open("GET", file, false);
    request.send(null);
    return JSON.parse(request.responseText);
};

//      same with jQuery

//        $.getJSON('../../data/file.json', function(data) {
//            alert(data);
//        });

// Function for toggle (nav bar)+-
$(function(){
	$(".navbar-mobile-toggle").click(function(){
		//This code is called when navbar-mobile-toggle is clicked
		$(this).toggleClass("is-open");
		$(".navbar-mobile-container").toggleClass("is-open");
	});
});


// ------------------------------
//	*** BACK TO TOP SCROLLING ***
// ------------------------------

$('.back-to-top').click(function () {
	smoothScrollToTarget($('body'));
});

$(window).scroll(function () {
	//  scrolling function
	var $this = $(this);
	var wScroll = $this.scrollTop();

	if (wScroll > 500) {
		$('.back-to-top').removeClass('hidden');
	} else {
		$('.back-to-top').addClass('hidden');
	}
});

function smoothScrollToTarget(target, adj = 0) {
	let startY = $(window).scrollTop();
	let stopY = target.offset().top - adj;
	let distance = stopY > startY ? stopY - startY : startY - stopY;

	if (distance < 100) {
		scrollTo(0, stopY);
		return;
	}

	let speed = Math.round(distance / 100);

	if (speed >= 20) speed = 20;
	let step = Math.round(distance / 25);
	let leapY = stopY > startY ? startY + step : startY - step;
	let timer = 0;


	if (stopY > startY) {
		for ( let i=startY; i<stopY; i+=step ) {
			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
			leapY += step; if (leapY > stopY) leapY = stopY; timer++;
		}
		return;
	}
	for ( let i=startY; i>stopY; i-=step ) {
		setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
		leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
	}

	return false;
}


