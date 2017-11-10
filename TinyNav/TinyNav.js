$(document).ready(function() {
	if( window.location.pathname != "/") {
		$('#tinynav2 option').each(function() {
			var pageSlug = new RegExp(window.location.pathname, 'i');
			if( pageSlug.test( $(this).attr('value') ) == true) {
				$(this).attr('selected', 'selected');
			}
		});
	}
});
