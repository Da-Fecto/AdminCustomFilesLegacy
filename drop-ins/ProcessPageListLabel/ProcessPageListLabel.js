/**
 * jQuery Page List Label
 *
 * author: Martijn Geerts
 */

(function ($) {

    var icon,
        options,
        defaults,
        templates,
        isInitialized,
        parseData = function (data) {
            // Home
            if (typeof isInitialized === 'undefined') {
                isInitialized = true;
                setIcon(data.page);
            }
            // Children
            $.each(data.children, function (i, el) {
                setIcon(el);
            });
        },
        setIcon = function (page) {

            // id based or template based
            if (templates.hasOwnProperty(page.id)) {
                icon = templates[page.id];
            } else if (templates.hasOwnProperty(page.template)) {
                icon = templates[page.template];
            } else {
                icon = defaults.icon
            }

            var $el = $(".PageListID" + page.id),
                tpl = "<span class='template-icon'><i class='fa " + icon + "'></i></span>";

            $(tpl).prependTo($el);

            if (page.numChildren) {

                // Click open and close
                $el.find('.label').on('click', function () {
                    if ($el.hasClass("PageListItemOpen")) {
                        $el.find('.folder-icon > i').addClass(defaults.open).removeClass(defaults.closed);
                    } else {
                        $el.find('.folder-icon > i').addClass(defaults.closed).removeClass(defaults.open);
                    }
                });

                if ($el.hasClass("PageListItemOpen")) {
                    icon = defaults.open;
                } else {
                    icon = defaults.closed;
                }
                tpl = "<span class='folder-icon'><i class='fa " + icon + "'></i></span>";
                $(tpl).appendTo($el);
            }
        };

    $.pageListlabel = function (inputTemplates, inputDefaults) {

        templates = $.extend({
            'home': 'fa-cog'
        }, inputTemplates);

        defaults = $.extend({
            icon: 'fa-file-text',
            closed: 'fa-folder',
            open: 'fa-folder-open'
        }, inputDefaults);

        $(document).ajaxComplete(function (i, event) {
            var JSON = $.parseJSON(event.responseText);
            if (typeof(JSON.children) == 'object') {
                parseData(JSON);
            }
        });
    };

})(jQuery);




$(function () {

    /* bind page id's or templates to icons */
    var templates = {
        'basic-page': 'fa-file-text',
        'admin'     : 'fa-cog',
        'home'      : 'fa-home',
        '7'         : 'fa-trash-o'
    /* folder icons */
    }, defaults = {
        'icon'      : 'fa-file-text',
        'closed'    : 'fa-folder',
        'open'      : 'fa-folder-open'
    };

    $.pageListlabel(templates, defaults );
});
