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
		var provinceEl = $("<article class='province' data-province='" + province + "'></article>");
		var provinceNameEl = $("<h1></h1>").text(province);

		//	add province name element to the province section
		provinceEl.append(provinceNameEl);

		//	get the object with all MPs in this province
		var mpsObj = {};

		mps["MemberOfParliament"].forEach(function (mp) {
			if (mp.ConstituencyProvinceTerritoryName === province) {

				//	if object doesn't have party key yet, create dummy property with empty array
				if(!mpsObj.hasOwnProperty(mp.CaucusShortName)){
					mpsObj[mp.CaucusShortName] = [];
				}

				//	add to key array new element with MP's info
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

				//	create container element for MP's boxes
				var mpContainerEl = $("<div class='mp-list-container'></div>");
				
				//	for each MP in the province and the party
				mpsObj[party].forEach(function (mp) {
					//	make a wrapper element
					var mpEl = $("<div class='mp'></div>");
					
					//	add to this element MP's name and MP's district name
					mpEl.append($("<p class='mp-name'></p>").text(mp.fullName));
					mpEl.append($("<p class='mp-district'></p>").text(mp.district));
					
					//	append this element to the main party's container
					mpContainerEl.append(mpEl);
				});

				//	append container element to the party element 
				partyEl.append(mpContainerEl);
				
				//	append party element to the province element
				provinceEl.append(partyEl);
			}
		});
		
		//	add the whole province element to the main section container
		container.append(provinceEl);
	});
});
