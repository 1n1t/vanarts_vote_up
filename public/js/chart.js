//will have an object
var votes = {
	"Liberal": [],
	"Conservative": [],
	"New Democratic": [],
	"Green": []
};

const votesArray = votes.map((vote) => {
	return vote.value;
});

const partyNamesArray = votes.map((vote) => {
	return vote.name;
});

{/* <canvas id="myChart" width="400" height="400"></canvas> */ }
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data : {
		labels: partyNamesArray,
		datasets: [{
				label: "Number of Votes",
				data: votesArray,
				backgroundColor: [
					"rgb(244, 10, 122)",
					"#F7464A",
					"#00BFA5",
					"rgb(246, 224, 76)",
					"rgb(246, 138, 50)",
					"#00B8D4",
					"rgb(73, 101, 185)",
					"rgb(161, 87, 196)",
					"#C51162",
					"rgb(158, 4, 18)",
					"rgb(149, 59, 9)",
					"rgb(75, 227, 175)",
					"rgb(249, 123, 7)"
				],
				hoverBackgroundColor: [
					"rgb(249, 81, 151)",
					"#FF5A5E",
					"#5AD3D1",
					"rgb(246, 240, 92)",
					"rgb(242, 118, 57)",
					"rgb(97, 190, 214)",
					"rgb(105, 123, 213)",
					"rgb(184, 73, 212)",
					"rgb(195, 63, 119)",
					"rgb(171, 44, 48)",
					"rgb(176, 94, 48)",
					"rgb(134, 244, 178)",
					"rgb(246, 143, 85)"
				]
		}]
	},
	options : {
		maintainAspectRatio: false,
		legend: {
			position: 'bottom'
		}
	}
});
