//	***************************
//		MPS LIST DISPLAYING
//	***************************

$(function () {
	var mps = parseJSON('db/mps.json');
	var provinces = [];
	var parties = [];

	//	get the list of all parties and provinces
	mps["MemberOfParliament"].map(function (mp) {
		if (provinces.indexOf(mp.ConstituencyProvinceTerritoryName) < 0) {
			provinces.push(mp.ConstituencyProvinceTerritoryName);
		}
		if (parties.indexOf(mp.CaucusShortName) < 0) {
			parties.push(mp.CaucusShortName);
		}
	});

	// elements
	var container = $('.mps-list');
	
	provinces.forEach(function (province) {
		//	creating HTML elements for parties and provinces
		var provinceEl = $("<article class='province'></article>");
		var provinceNameEl = $("<h1></h1>").text(province);

		provinceEl.append(provinceNameEl);

		parties.forEach(function (party) {
			var partyEl = $("<article class='party'></article>");
			var partyNameEl = $("<h3></h3>").text(party);

			partyEl.append(partyNameEl);
			provinceEl.append(partyEl);
		});
		
		container.append(provinceEl);
	});
});
