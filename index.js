var dumper = require('./jkl-dumper');
var xotree = require('./ObjTree');

module.exports.xml2json = function(xml,callback) {
	var tree = xotree.parseXML(xml);
	var result = dumper.dump(tree);
	if(!callback) return result;
	else callback(result);
}

module.exports.json2xml = function(json,isRSS,callback) {
	if(typeof(json) == "string") var json = JSON.parse(json);
	if(isRSS) var result = xotree.writeRSS(json);
	else var result = xotree.writeXML(json);
	if(!callback) return result;
	else callback(result);
}

module.exports.requestHTTP = function(url, callback) {
	var http = require('http');
    http.get(url, function(res) {
    	var result = "";
    	res.on('error', function (e) {
           //error handler
    	});
        res.on('data', function(chunk) {
        	result += chunk;
        });
        res.on('end', function(){
          callback(result);
    	});
    });
};

