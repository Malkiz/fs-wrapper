var fs = require('fs'),
	path = require('path');

var fsWrapper = {
	logger: console,
	writeFileSync: function(filepath, data) {
		try {
			var dir = path.dirname(filepath);
			if (!fs.existsSync(dir)){
				fs.mkdirSync(dir);
			}
			fs.writeFileSync(filepath, data);
		} catch(e) {
			this.logger.error(e);
		}
	}
};

module.exports = fsWrapper;