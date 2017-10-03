$(document).ready(function(){
	function randomizeVideo(){
		var videosArray = ["GADdPGkVuss", "wD5FAzvltpI", "yLshbuVJH5Q", "uVhPlcy7GDs"];
		//Pick a random index number from the array
		var randomIndex = videosArray[Math.floor(Math.random() * videosArray.length)];
		var videoUrl = "http://www.youtube.com/embed/" + randomIndex + "?autoplay=0&amp;frameborder=0&amp;controls=0&amp;modestbranding=1&amp;showinfo=0&amp;rel=0&amp;disablekb=1&amp;start=0&amp;iv_load_policy=3";
		//Use jQuery to use the class ytplaer and change the attribute src to the one I just made
		$(".ytplayer").attr("src", videoUrl);
	}

	randomizeVideo();


	if (checkCookie('msg')) {
		$('.flash-message').toggleClass('hidden');
		setTimeout(function () {
			$('.flash-message').toggleClass('hidden');
		}, 4000);
		createCookie('msg', '', -1);
	}


	//	=== Helping functions to deal with cookies 
	function makeDate(days) {
		var now = new Date();
		now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
		return now.toUTCString();
	}

	function readCookie(name) {
		var nameEquals = name + "=";
		var cookieArray = document.cookie.split(";");

		for(var i = 0; i < cookieArray.length; i += 1){
			var cookie = cookieArray[i];
			while(cookie.charAt(0) === ' '){
				cookie = cookie.substring(1, cookie.length);
			}
			if(cookie.indexOf(nameEquals) === 0){
				return cookie.substring(nameEquals.length, cookie.length);
			}
		}
		return null;
	}

	function checkCookie(cookie) {
		return readCookie(cookie) !== null;
	}

	function createCookie(name, value, days) {
		document.cookie = name + '=' + value + '; expires=' + makeDate(days);
	}
});


