/**
 * Autocomplete Image Tags
 *
 * author: Macrura
 */

$(function(){
	$(".Inputfield_images input[name^='tags_images_']").each(function() {
		$(this).tagit({
		    availableTags: ["kenburns", "test"],
                    singleFieldDelimiter: ' '
		});
	});
});
