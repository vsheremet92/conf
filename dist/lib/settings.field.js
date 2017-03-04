"use strict";
var Field;
(function (Field_1) {
    class Field {
        constructor(defaultValue) {
            this.data = {
                key: '',
                description: '',
                name: '',
                val: undefined,
                default: undefined
            };
            this.default(defaultValue);
        }
        key(val) {
            if (val === undefined)
                return this.data.key;
            this.data.key = val;
            return this;
        }
        description(val) {
            if (val === undefined)
                return this.data.description;
            this.data.description = val;
            return this;
        }
        name(val) {
            if (val === undefined)
                return this.data.name;
            this.data.name = val;
            return this;
        }
        val(val) {
            if (val === undefined)
                return this.data.val;
            if (this.validate(val))
                this.data.val = val;
            else {
                console.warn(`Config field '${this.name()}' has invalid value '${val}'`);
            }
            return this;
        }
        default(val) {
            if (val === undefined)
                return this.data.default;
            this.data.default = val;
            return this;
        }
    }
    Field_1.Field = Field;
    class String extends Field {
        validate(val) {
            return val !== undefined && val !== null && val.constructor === global.String ?
                [] : [new Error(`Value '${val}' of field ${this.name()} is not a string`)];
        }
    }
    Field_1.String = String;
    class Number extends Field {
        constructor() {
            super(...arguments);
            this.numData = {
                min: NaN,
                max: NaN
            };
        }
        validate(val) {
            let v = global.Number(val);
            if (val === null || isNaN(v))
                return [new Error(`Value '${val}' of field ${this.name()} is not a number`)];
            if ((!isNaN(this.min()) && v < this.min()) || (!isNaN(this.max()) && v > this.max()))
                return [new Error(`Value '${val}' of field ${this.name()} is out of range ${[this.min(), this.max()]}`)];
            return [];
        }
        min(val) {
            if (val === undefined)
                return this.numData.min;
            this.numData.min = val;
            return this;
        }
        max(val) {
            if (val === undefined)
                return this.numData.max;
            this.numData.max = val;
            return this;
        }
        minMax(min, max) {
            this.min(min);
            this.max(max);
            return this;
        }
    }
    Field_1.Number = Number;
})(Field = exports.Field || (exports.Field = {}));
//# sourceMappingURL=settings.field.js.map