const path = require("path");

// module.exports = path.dirname(process.mainModule.filename); this is deprecated

module.exports = path.dirname(require.main.filename);
