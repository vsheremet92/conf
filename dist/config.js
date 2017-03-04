"use strict";
const settings_field_1 = require("./lib/settings.field");
const settings_json_1 = require("./lib/settings.json");
const settings_1 = require("./lib/settings");
class Config extends settings_1.Settings {
    constructor() {
        super(...arguments);
        this.db = new settings_field_1.Field.String('default connection').key('d').description('Database connection string');
        this.port = new settings_field_1.Field.Number().key('p').description('Listen port').val(5000).minMax(1, 65535);
    }
}
exports.Config = Config;
exports.config = new Config();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.config;
exports.config.init();
settings_json_1.JSONProvider.load(`{
    "db": "driver=mysql",
    "port": 1
}`, exports.config);
//# sourceMappingURL=config.js.map