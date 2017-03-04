import { Settings } from "./settings"

export module JSONProvider {
    export function load(json: string, config: Settings):Error[] {
        try {
            let rv: Error[] = [];
            let obj = JSON.parse(json);
            console.log(obj);
            config.fields.forEach((field)=> {
                if (field.name() in obj) {
                    let val = obj[field.name()];
                    let err = field.validate(val);
                    if (err.length) rv.concat(err);
                    else field.val(obj[field.name()]);
                }
                return [];
            });
            return rv;
        } catch (exception) {
            return [exception];
        }
    }
}
