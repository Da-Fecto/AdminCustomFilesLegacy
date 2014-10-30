/**
 * Truncate
 * Add truncate option to to text-based fields (multilanguage aware)
 *
 * author: Martijn Geerts
 */

(function ($) {
    $.fn.truncate = function(options) {

        var $fields = this,
            name = $fields.attr('name'),
            settings = $.extend({
                characters: 128,
                prefix: '',
                suffix: '',
                class: 'notes'
            }, options );


        if ($fields.parent('.LanguageSupport').length) {
            var $fields = $("#langTabs_Inputfield_" + name ).find("input, textarea");
        }

        $fields.after("<span class='" + settings.class + "'></span>");

        $fields.each(function (index, el) {
            var truncate = function () {
                var value = $(el).val(),
                    typed = typeof value != 'undefined' ? value.length : 0,
                    left = settings.characters - typed;
                if (left < 0) {
                    $(el).val(value.substr(0, settings.characters));
                    truncate();
                } else {
                    $(el).next("span").text(settings.prefix + left + settings.suffix);
                }
            }

            $(el).keyup(function() { truncate(); });
            return truncate();
        });
    };
}(jQuery));



// DOM is ready
$(function () {
    // field with the name attribute title
    $("[name='title']").truncate({
        characters: 64,
        prefix: 'To go: ',
        suffix: ' characters'
    });
});
