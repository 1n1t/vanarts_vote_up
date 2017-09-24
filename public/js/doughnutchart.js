
$(function(){
	//get parties from votes global object
	const partiesArray = Object.keys(votes);
    //get votes from votes global object
	var votesArray = [];
	for (var key in votes) {
		if (votes.hasOwnProperty(key)) {
			//add length of each votes key array to votesArray
			votesArray.push(votes[key].length);
		}
	}

//populate doughnut chart with data
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			labels: partiesArray,
			datasets: [{
				label: "Number of Votes",
				data: votesArray,
				backgroundColor: [
					"rgb(0, 102, 255)",
					"#F7464A",
					"#00BFA5",
					"rgb(255, 102, 0)"
				],
				hoverBackgroundColor: [
					"rgb(0, 102, 255)",
					"#FF5A5E",
					"#5AD3D1",
					"rgb(255, 153, 51)"
				]
			}]
		},
		options: {
			maintainAspectRatio: false,
			legend: {
				position: 'bottom'
			}
		}
	});
});
