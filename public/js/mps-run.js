//	***************************
//	MAP INITIALIZATION & EVENTS
//	***************************
var MAP_WIDTH  = 620;
var MAP_HEIGHT = 600;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);
var group = map.set();

var style = {
	fill: "#ffffff",
	stroke: "#D0021B",
	"stroke-width": 1,
	"stroke-linejoin": "round",
	cursor: "pointer"
};

var hoverStyle = {
	fill: "#D0021B"
};

var animationSpeed = 300;

regions.forEach(function(region){
	group.push(
		map.path(region.path).attr('title', region.title)
	);
});

group.attr(style);
group.click(function(){
	var slug = this.attr('title');
	var title;
	var fill = '#D0021B';

	// format the title
	title = slug.split('-')
		.map(function(subString){
			return subString[0].toUpperCase() + subString.substr(1);
		})
		.join(' ')
		.trim();

	console.log(this.attr('title'));
	
	// add some color
	this.attr('fill', fill);

	// do something useful
	// document.getElementById('title').textContent = title;
});

group.mouseover(function () {
	this.animate(hoverStyle, animationSpeed);
});

group.mouseout(function () {
	this.animate(style, animationSpeed);
});
