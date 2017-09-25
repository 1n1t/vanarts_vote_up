// $(function () {
	//populate doughnut chart with data
	var ctx = document.getElementById("seatsChart").getContext('2d');

	var seatsChart = new Chart(ctx, {
		type: 'doughnut',
		data: {
			datasets: [
				/* Outer doughnut data: Number of seats*/
				{
					data: [181,97,44,1],
					backgroundColor: [
						"#F7464A",
						"rgb(0, 102, 255)",
						"rgb(255, 102, 0)",
						"#00BFA5"
					],
					label: 'Number of Seats'
				},
				/* Outer doughnut data ends*/
				/* Inner doughnut data: Number of senators*/
				{
					data: [16,36,0,0],
					backgroundColor: [
						"#F7464A",
						"rgb(0, 102, 255)",
						"rgb(255, 102, 0)",
						"#00BFA5"
					],
					label: 'Number of Senators'
				}
				/* Inner doughnut data ends*/
			],
			labels: ["Liberal", "Conservative", "New Democratic", "Green"]
		},
		options: {
			responsive: true,
			legend: {
				position: 'bottom',
			},
			title: {
				display: true,
				text: 'Number of Seats and Senators per party'
			},
			animation: {
				animateScale: false,
				animateRotate: true
			}
		}
		
	});
// });
