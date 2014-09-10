Admin Custom Files
================

Admin Custom Files is a simple module that can add custom javascript plug-ins,
scripts and styles to the Processwire admin area.

#### Include scripts and styles everywhere.

If you want to include scripts or/and styles on every admin page, just type an url
of file relative to the templates folder in the dependenties textarea of the
module configuration.

#### Using javascript plug-ins?.

Say you want to use the jquery.validate plug-in to validate the field values
of the pages you edit.

1. Type in the dependencies textarea **ProcessPageEdit** (process) followed by
the url to the jquery validate plug-in.

    ```
    ProcessPageEdit scripts/plug-ins/jquery.validate/jquery.validate.js
    // note the space between the admin process name and the url
    ```
2. Select at “Enable for process” ProcessPageEdit. required to load the process
dependencies.



(separated by a space) These files should be placed
somewhere in your templates folder. So if you use this plug-in already on the
front-end, you could link to that one.

Every dependency should go on it’s own line. Urls relative to the processwire
templates folder.
