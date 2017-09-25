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




