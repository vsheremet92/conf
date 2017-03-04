"use strict";
const settings_field_1 = require("./settings.field");
class Settings {
    constructor() {
        this.fieldByName = {};
        this.fields = [];
    }
    printHelp() {
        this.fields.forEach((field) => console.log(`-${field.key()},\t--${field.name()}\t\t${field.description()}`));
    }
    init() {
        for (let name in this) {
            let field = this[name];
            if (field instanceof settings_field_1.Field.Field) {
                this.fieldByName[name] = field;
                this.fields.push(field);
                if (field.default())
                    field.val(field.default());
                if (!field.name())
                    field.name(name);
            }
        }
    }
}
exports.Settings = Settings;
//# sourceMappingURL=settings.js.map