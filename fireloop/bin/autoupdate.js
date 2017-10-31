require('events').EventEmitter.prototype._maxListeners = 100;
var path = require('path');


var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mongodb;
var models = ['AccessToken', 'ACL', 'Role', 'RoleMapping', 'BigUser', 'Todo', 'Note',
'Customer', 'Category', 'Supplier', 'Default', 'Pbs', 'Return', 'Service', 'ServiceStore', 
'ServiceTmp', 'Store', 'Point', 'Repoint', 'RepointDefault', 'Log', 'House', 'Room'];
console.log('Updating...');
ds.autoupdate(models, function(err, result) {
	if (err) throw err;
	ds.disconnect();
	process.exit();
});