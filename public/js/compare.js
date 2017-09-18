$(function () {
	
	//	initialize multiselect element
	$('#select-policies').multiselect({
		includeSelectAllOption: true,
		onChange: function (option) {
			var policy = $(option).val();
			$('.policies [data-policy="' + policy + '"]').toggleClass('hidden');
		},
		onSelectAll: function () {
			$('.compare-table__row-header, .compare-table__cell').removeClass('hidden');
		},
		onDeselectAll: function () {
			$('.compare-table__row-header, .compare-table__cell').addClass('hidden');
		}
	});
	
	$('.filters__toggle').click(function () {
		var $this = $(this);
		var party = $this.data('party');

		//	toggle active class for party filter element
		$this.toggleClass('active');
		$('.policies [data-party="' + party + '"]').toggleClass('hidden');

		//	calculate how many columns should be displayed
		var colNum = $('.filters__toggle.active').length;
		var gridTemplateColumns = (colNum > 0) ? '120px repeat(' + colNum + ', 1fr)' : 'none';
		$('.policies').css('grid-template-columns', gridTemplateColumns);

		console.log($this.data('party'));
	});
});
