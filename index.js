var dumper = require('./jkl-dumper');
// var dumper = new JKL.Dumper();
var xotree = require('./ObjTree');

module.exports.xml2json = function(xml,callback) {
	var tree = xotree.parseXML(xml);
	var result = dumper.dump(tree);
	if(!callback) return result;
	else callback(result);
}

module.exports.json2xml = function(json,callback) {
	var json = JSON.parse(json);
	var result = xotree.writeXML(json);
	if(!callback) return result;
	else callback(result);
}