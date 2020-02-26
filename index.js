(function () {
    'use strict';

    let crypto = require("crypto");

    module.exports = function (data, digest) {
        return crypto.createHash("sha256").update(data).digest(digest || 'base64');
    };

})();