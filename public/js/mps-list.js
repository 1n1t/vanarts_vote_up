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

		//	add province name element to the province section
		provinceEl.append(provinceNameEl);

		//	get the object with all MPs in this province
		var mpsObj = {};

		mps["MemberOfParliament"].forEach(function (mp) {
			if (mp.ConstituencyProvinceTerritoryName === province) {

				if(!mpsObj.hasOwnProperty(mp.CaucusShortName)){
					mpsObj[mp.CaucusShortName] = [];
				}

				mpsObj[mp.CaucusShortName].push({
					fullName: mp.PersonOfficialFirstName + ' ' + mp.PersonOfficialLastName,
					district: mp.ConstituencyName
				});
			}
		});
		
		parties.forEach(function (party) {
			
			//	check if there is at least one MP from the party in that province
			if (mpsObj.hasOwnProperty(party)) {
				
				//	create party sections with name of the party
				var partyEl = $("<article class='party'></article>");
				var partyNameEl = $("<h3></h3>").text(party);

				partyEl.append(partyNameEl);

				var mpContainerEl = $("<div class='mp-container'></div>");
				
				mpsObj[party].forEach(function (mp) {
					var mpEl = $("<div class='mp'></div>");
					mpEl.append($("<p class='mp-name'></p>").text(mp.fullName));
					mpEl.append($("<p class='mp-district'></p>").text(mp.district));
					
					mpContainerEl.append(mpEl);
				});

				partyEl.append(mpContainerEl);
				provinceEl.append(partyEl);
			}
		});
		
		container.append(provinceEl);
	});
});
