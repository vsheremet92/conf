import { Field } from "./settings.field"

export class Settings {
    private fieldByName: { [ key: string ]: Field.Field<any> } = {};
    readonly fields: Field.Field<any>[] = [];

    printHelp() {
        this.fields.forEach((field)=> console.log(`-${ field.key() },\t--${ field.name() }\t\t${ field.description() }`) );
    }

    init() {
        for (let name in this) {
            let field = this[name];
            if (field instanceof Field.Field) {
                this.fieldByName[<string>name] = field;
                this.fields.push(field);
                if (field.default()) field.val(field.default());
                if (!field.name()) field.name(name);
            }
        }
    }
}

/*

Settings (lib) -> Config (our)

*/
