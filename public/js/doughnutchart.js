
// const votesArray = votes.map((vote) => {
// 	return vote.value;
// });

// const partyNamesArray = votes.map((vote) => {
// 	return vote.name;
// });
// const votesArray = [votes[]]
const votesArray = [1, 5, 7, 3];

var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data : {
		labels: ["Conservative", "Liberal", "Green", "New Democratic"],
		datasets: [{
				label: "Number of Votes",
				data: votesArray,
				backgroundColor: [
					"rgb(0, 102, 255)",
					"#F7464A",
					"#00BFA5",
					"rgb(255, 102, 0)",
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
					"rgb(0, 102, 255)",
					"#FF5A5E",
					"#5AD3D1",
					"rgb(255, 153, 51)",
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
