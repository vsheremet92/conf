"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Field;
(function (Field_1) {
    var Field = (function () {
        function Field() {
        }
        return Field;
    }());
    Field_1.Field = Field;
    var String = (function (_super) {
        __extends(String, _super);
        function String() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return String;
    }(Field));
    Field_1.String = String;
    var Number = (function (_super) {
        __extends(Number, _super);
        function Number() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Number;
    }(Field));
    Field_1.Number = Number;
})(Field = exports.Field || (exports.Field = {}));
