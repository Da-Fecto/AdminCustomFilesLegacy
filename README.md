Admin Custom Files
================

Admin Custom Files is a simple module that can add custom javascript plug-ins,
scripts and styles to the Processwire admin area.

### 5 ways to get your files in the admin.

1. Type the url to the javascript(s) or and style(s) in the dependencies textarea. ➊
2. Type the processname followed by an URL seperated by a space in the dependencies textarea. ➋
3. Start the file names accordingly to the “running admin process name” and use .css or .js as extension. ➌
4. For the ProcessPageEdit process starts the filename with the template-name ending with .js and/or .css. ➌
5. Start the file names accordingly to the adming theme name. ➍

➊ Loads on every admin page, multiple files possible, relative to the templates folder. <br>
➋ Loads only on process, multiple files possible, relative to the templates folder. **Process needs to be enabled!**<br>
➌ Place the files in the admin custom files folder inside your templates folder. **Process needs to be enabled!**
➍ Check the theme based files checkbox.

### When what to use

**\#1** Enable plugins and/or other dependencies for every admin page.<br>
**\#2** Enable plugins & dependencies for a specific admin process. (e.g. load jquery.validate on ProcessPageEdit)<br>
**\#3** Write your own scripts & styles, could be depending on previous loaded plug-ins.<br>
**\#4** Write your own scripts & styles, filtered on template name.

### Additional javascript config data

You could enable additinal javascript config data. Here's an example:

```javascript
var config = {
    "AdminCustomFiles": {
        "adminTheme": "AdminThemeReno"
        "process": "ProcessPageEdit",
        "host": "domain.net",
        "user": {
          "id": 41,
          "name": "admin",
          "email": "user@domain.net",
          "roles": [
            "guest",
            "superuser"
          ]
        },
        "page": {
          "id": 1,
          "name": "",
          "path": "/",
          "parentID": 0,
          "numChildren": 7,
          "created": -62169985172,
          "modified": 1410695857,
          "createdUser": "processwire",
          "modifiedUser": "admin"
        },
        "fields": [
          "title",
          "body",
          "images"
        ]
    }
};
```

Example of loaded files

![loaded files](https://github.com/Da-Fecto/AdminCustomFiles/blob/master/console.png)
