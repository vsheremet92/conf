import { Field } from "./lib/settings.field";
import { Settings } from "./lib/settings";
export declare class Config extends Settings {
    db: Field.String;
    port: Field.Number;
}
export declare var config: Config;
export default config;
