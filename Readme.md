# rss-api
A series of useful APIs for xml(specially for RSS) and json.

Version : 1.0.2

Author : [Shaffer John](http://www.shaffer.cn)

## Installation

```bash
$ npm install rss-api
```

## Usage
```js
var rss = require('rss-api');
```


## Example
```js
var rss = require('rss-api');

var xml = 
'<?xml version="1.0" encoding="UTF-8" ?>'+
'<a test="123">'+
    '<b>456</b>'+
    '<c>789</c>'+
'</a>';
```

### xml2json
**Prototype : **
    xml2json = function(`xml`,`callback`)
    
* `callback` is NOT necessary

```js
var json = rss.xml2json(xml);
//output
/*
{
  "a": {
    "-test": "123", //"-" is a sign of attribution
    "b": "456",
    "c": "789"
  }
}
*/

//You can also use callback, for example:
rss.xml2json(xml, function(json){
    console.log(json);
});
```

### json2xml
**Prototype : **
    json2xml = function(`json`,`isRSS`,`callback`)
    
* `isRSS` and `callback` is NOT necessary
* Default for `isRSS` is false

```js
var json = {a:{'-test':"123",b:"456",c:"789"}};
var xml = rss.json2xml(json);
//output
/*
<?xml version="1.0" encoding="UTF-8" ?>
<a test="123">
    <b>456</b>
    <c>789</c>
</a>
*/

//If you want to generate RSS:
var xml = rss.json2xml(json,true);
//output
/*
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <a test="123">
    <b>456</b>
    <c>789</c>
    </a>
</rss>
*/

//You can also use callback, for example:
rss.json2xml(json, false, function(xml){
    console.log(xml);
});
```
### requestHTTP
**Prototype : **
    requestHTTP = function(`url`, `callback`)
    
* `callback` is necessary
    
This function is convenient for debug.

However it is NOT recommended for production environment.

## Features

  * High performance
  * Simple
  * Openness

## More information

  * [Homepage](http://www.shaffer.cn)
  * [npmjs](https://www.npmjs.com/package/rss-api)
  * [issue](https://github.com/shafferjohn/rss-api/issues)
  * [Stable version on Github](https://github.com/shafferjohn/rss-api)
  * [Dev version on Github](https://github.com/shafferjohn/rss-api/tree/dev)
