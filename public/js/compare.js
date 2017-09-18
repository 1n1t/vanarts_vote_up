$(function () {
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
});
