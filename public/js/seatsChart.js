var seatsArray = [181, 142];
var senatorsArray = [16, 36];
//data object
var data = {
	datasets: [
		/* Outer doughnut data: Number of seats*/
		{
			data: seatsArray,
			backgroundColor: [
				"#F7464A",
				"#f0f0f5"
			],
			label: 'Number of Seats'
		},
		/* Outer doughnut data ends*/
		/* Inner doughnut data: Number of senators*/
		{
			data: senatorsArray,
			backgroundColor: [
				"#F7464A",
				"#f0f0f5"
			],
			label: 'Number of Senators'
		}
		/* Inner doughnut data ends*/
	],
		labels: ["Liberal", "Other Parties"]
};
var conData = {
	datasets: [
		/* Outer doughnut data: Number of seats*/
		{
			data: [97,226],
			backgroundColor: [
				"rgb(0, 0, 204)",
				"#f0f0f5"
			],
			label: 'Number of Seats'
		},
		/* Outer doughnut data ends*/
		/* Inner doughnut data: Number of senators*/
		{
			data: [36,16],
			backgroundColor: [
				"rgb(0, 0, 204)",
				"#f0f0f5"
			],
			label: 'Number of Senators'
		}
		/* Inner doughnut data ends*/
	],
	labels: ["Conservative", "Other Parties"]
};
var demData = {
	datasets: [
		/* Outer doughnut data: Number of seats*/
		{
			data: [44, 279],
			backgroundColor: [
				"rgb(255, 102, 0)",
				"#f0f0f5"
			],
			label: 'Number of Seats'
		},
		/* Outer doughnut data ends*/
		/* Inner doughnut data: Number of senators*/
		{
			data: [0, 52],
			backgroundColor: [
				"rgb(255, 102, 0)",
				"#f0f0f5"
			],
			label: 'Number of Senators'
		}
		/* Inner doughnut data ends*/
	],
	labels: ["New Democratic", "Other Parties"]
};
var greenData = {
	datasets: [
		/* Outer doughnut data: Number of seats*/
		{
			data: [1, 322],
			backgroundColor: [
				"#00BFA5",
				"#f0f0f5"
			],
			label: 'Number of Seats'
		},
		/* Outer doughnut data ends*/
		/* Inner doughnut data: Number of senators*/
		{
			data: [0, 52],
			backgroundColor: [
				"#00BFA5",
				"#f0f0f5"
			],
			label: 'Number of Senators'
		}
		/* Inner doughnut data ends*/
	],
	labels: ["Green", "Other Parties"]
};
/**
 * Define universal config for all 4 charts
 */
var chartsConfig = {
	type: 'doughnut',
	data: data,
	options: {
		maintainAspectRatio: false,
		responsive: true,
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Number of Seats and Senators per party'
		}
	}

}
//populate doughnut chart 1 with data
var ctx1 = document.getElementById("seatsChart1").getContext('2d');
var seatsChart1 = new Chart(ctx1, chartsConfig);
//populate doughnut chart 2 with data
var ctx2 = document.getElementById("seatsChart2").getContext('2d');
let chartsConfig2 = {};
// copy config obj
for (let key in chartsConfig) {
	chartsConfig2[key] = chartsConfig[key];
}
//add party specific data to chartsConfig
chartsConfig2.data = conData;
var seatsChart2 = new Chart(ctx2, chartsConfig2);
//populate doughnut chart 3 with data
var ctx3 = document.getElementById("seatsChart3").getContext('2d');
let chartsConfig3 = {};
// copy config obj
for (let key in chartsConfig) {
	chartsConfig3[key] = chartsConfig[key];
}
//add party specific data to chartsConfig
chartsConfig3.data = demData;
var seatsChart3 = new Chart(ctx3, chartsConfig3);
//populate doughnut chart 4 with data
var ctx4 = document.getElementById("seatsChart4").getContext('2d');
let chartsConfig4 = {};
// let's copy all user properties into it
for (let key in chartsConfig) {
	chartsConfig4[key] = chartsConfig[key];
}
//add party specific data to chartsConfig
chartsConfig4.data = greenData;
var seatsChart4 = new Chart(ctx4, chartsConfig4);
