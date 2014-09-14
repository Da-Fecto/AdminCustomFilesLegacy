Admin Custom Files
================

Admin Custom Files is a simple module that can add custom javascript plug-ins,
scripts and styles to the Processwire admin area.

### 4 ways to get your files in the admin.

1. Type the url to the javascript(s) or and style(s) in the dependencies textarea. ➊
2. Type the processname followed by an URL seperated by a space in the dependencies textarea. ➋
3. Name the files accordingly to the “running admin process name” and use .css or .js as extension. ➌
4. For the ProcessPageEdit process add files with the template-name ending with .js and/or .css. ➌

➊ Loads on every admin page, multiple files possible, relative to the templates folder. <br>
➋ Loads only on process, multiple files possible, relative to the templates folder. **Process needs to be enabled!**<br>
➌ Place the files in the admin custom files folder inside your templates folder. **Process needs to be enabled!**

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
        "process": "ProcessPageEdit",
        "user": {
            "id": 41,
            "name": "admin",
            "email": "yourname@domain.net",
            "roles": [
                "guest",
                "superuser"
            ]
        },
        "page": {
            "id": 1234,
            "name": "news",
            "path": "/news/",
            "parentID": 1,
            "numChildren": 0,
            "created": 1407872923,
            "modified": 1410204684,
            "createdUser": "admin",
            "modifiedUser": "admin"
        },
        "fields": [
            "content",
            "title",
            "headline",
            "meta_description"
        ]
    }
};
```

Example of loaded files
![loaded files](https://github.com/Da-Fecto/AdminCustomFiles/blob/master/console.png)
