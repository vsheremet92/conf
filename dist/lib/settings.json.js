"use strict";
var JSONProvider;
(function (JSONProvider) {
    function load(json, config) {
        try {
            let rv = [];
            let obj = JSON.parse(json);
            console.log(obj);
            config.fields.forEach((field) => {
                if (field.name() in obj) {
                    let val = obj[field.name()];
                    let err = field.validate(val);
                    if (err.length)
                        rv.concat(err);
                    else
                        field.val(obj[field.name()]);
                }
                return [];
            });
            return rv;
        }
        catch (exception) {
            return [exception];
        }
    }
    JSONProvider.load = load;
})(JSONProvider = exports.JSONProvider || (exports.JSONProvider = {}));
//# sourceMappingURL=settings.json.js.map