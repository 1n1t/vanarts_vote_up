//	object with user's votes (global variable)
var votes = {
	"Liberal": [],
	"Conservative": [],
	"New Democratic": [],
	"Green": []
};

//	jQuery function
$(function () {
	
	// -------------------
	//	*** FILTERING ***
	// -------------------
	
	var activeParties;
	var activePolicies = $('#select-policies').val();

	//	fill array of active parties
	getActivePartyList();
	
	//	initialize multiselect element
	$('#select-policies').multiselect({
		
		includeSelectAllOption: true,
		
		//	on change event
		onChange: function (option) {
			var policy = $(option).val();
			
			//	toggle the hidden class for policy row header
			$('.compare-table__row-header[data-policy="' + policy + '"]').toggleClass('hidden');

			//	toggle the hidden class for policy cell of currently filtered parties
			for (var i = 0; i < activeParties.length; i++) {
				$('.compare-table__cell[data-party="' + activeParties[i] + '"][data-policy="' + policy + '"]').toggleClass('hidden');
			}
			
			//	refresh list of active policies
			activePolicies = $('#select-policies').val();
		},
		
		//	on selectAll event
		onSelectAll: function () {
			
			//	remove the hidden class for policy row header
			$('.compare-table__row-header').removeClass('hidden');

			//	remove the hidden class for policy cell of currently filtered parties
			for (var i = 0; i < activeParties.length; i++) {
				$('.compare-table__cell[data-party="' + activeParties[i] + '"]').removeClass('hidden');
			}

			//	refresh list of active policies
			activePolicies = $('#select-policies').val();
		},

		//	on deselectAll event
		onDeselectAll: function () {
			//	add the hidden class for policy row header
			$('.compare-table__row-header').addClass('hidden');

			//	add the hidden class for policy cell of currently filtered parties
			for (var i = 0; i < activeParties.length; i++) {
				$('.compare-table__cell[data-party="' + activeParties[i] + '"]').addClass('hidden');
			}

			//	refresh list of active policies
			activePolicies = $('#select-policies').val();
		}
	});
	
	$('.filters__toggle').click(function () {
		var $this = $(this);
		var party = $this.data('party');

		//	toggle active class for party filter element and refresh array with active parties
		$this.toggleClass('active');
		getActivePartyList();

		//	toggle hidden class for party's column header and all party's policies that are currently filtered
		$('.compare-table__col-header[data-party="' + party + '"]').toggleClass('hidden');
		for (var i = 0; i < activePolicies.length; i++) {
			$('.compare-table__cell[data-party="' + party + '"][data-policy="' + activePolicies[i] + '"]').toggleClass('hidden');
		}

		//	calculate how many columns should be displayed
		var colNum = $('.filters__toggle.active').length;
		
		//	adjust css-grid property
		var gridTemplateColumns = (colNum > 0) ? '120px repeat(' + colNum + ', 1fr)' : 'none';
		$('.policies').css('grid-template-columns', gridTemplateColumns);
	});
	
	
	function getActivePartyList() {
		//	get an array with names of currently filtered parties
		activeParties = [];
		$('.filters__toggle.active').each(function () {
			activeParties.push($(this).text())
		});
	}

	
	// -------------------
	//	*** VOTING ***
	// -------------------

	if (checkCookie('voting')) {
		
		//	read votes object from cookies if it exists
		votes = JSON.parse(readCookie('voting'));
		
		//	add active class for buttons of policies that has been voted for and change its text to 'unvote'
		for (var property in votes) {
			if (votes.hasOwnProperty(property)) {
				for (var i = 0; i < votes[property].length; i++) {
					$('.compare-table__cell[data-party="' + property + '"][data-policy="' + votes[property][i] + '"] .btn-vote').addClass('active').text('Unvote');
				}
			}
		}
	}
	
	//	trigger button 'vote' click event
	$('.btn-vote').click(function () {
		var $this = $(this);
		var voteData = $this.parent().data();

		//	toggle active class of the button
		$this.toggleClass('active');
		
		if ($this.hasClass('active')) {
			//	if user vote for the policy:
			//		change button text
			$this.text('Unvote');
			//		add element to votes object
			votes[voteData.party].push(voteData.policy);
		} else {
			//	if user unvote for the policy:
			//		change button text
			$this.text('Vote');
			//		remove element to votes object
			var index = votes[voteData.party].indexOf(voteData.policy);
			votes[voteData.party].splice(index, 1);
		}

		//	update cookie
		createCookie('voting', JSON.stringify(votes), 14);
	});


	//	=== Helping functions to deal with cookies 
	function makeDate(days) {
		var now = new Date();
		now.setTime(now.getTime() + (days * 24 * 60 * 60 * 1000));
		return now.toUTCString();
	}

	function readCookie(name) {
		var nameEquals = name + "=";
		var cookieArray = document.cookie.split(";");

		for(var i = 0; i < cookieArray.length; i += 1){
			var cookie = cookieArray[i];
			while(cookie.charAt(0) === ' '){
				cookie = cookie.substring(1, cookie.length);
			}
			if(cookie.indexOf(nameEquals) === 0){
				return cookie.substring(nameEquals.length, cookie.length);
			}
		}
		return null;
	}

	function checkCookie(cookie) {
		return readCookie(cookie) !== null;
	}

	function createCookie(name, value, days) {
		document.cookie = name + '=' + value + '; expires=' + makeDate(days);
	}
});


