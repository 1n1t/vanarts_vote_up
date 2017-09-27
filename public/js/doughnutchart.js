
// $(function(){
	function renderDoughnut(){
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
						"#f50a0e",
						"#003d99",
						"#ff6600",
						"#33cc33",
					],
					hoverBackgroundColor: [
						"#F7464A",
						"#0052cc",
						"#ff8533",
						"#5cd65c",
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

	}

// });
