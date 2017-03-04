import { Field } from "./settings.field";
export declare class Settings {
    private fieldByName;
    readonly fields: Field.Field<any>[];
    printHelp(): void;
    init(): void;
}
