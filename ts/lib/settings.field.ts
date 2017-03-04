export module Field {
/*    export interface FieldOpts {
        description?: string
        key?: string
        name?: string
    } */

    export abstract class Field<TVal> {
        constructor(defaultValue?: TVal) {
            this.default(defaultValue);
        }

        abstract validate(val: any): Error[];

        private data = {
            key: '',
            description: '',
            name: '',
            val: <TVal>undefined,
            default: <TVal>undefined
        }

        key(): string;
        key(val: string): this;
        key(val?: string): string|this {
            if (val === undefined) return this.data.key;
            this.data.key = val;
            return this;
        }

        description(): string;
        description(val: string): this;
        description(val?: string): string|this {
            if (val === undefined) return this.data.description;
            this.data.description = val;
            return this;
        }

        name(): string;
        name(val: string): this;
        name(val?: string): string|this {
            if (val === undefined) return this.data.name;
            this.data.name = val;
            return this;
        }

        val(): TVal;
        val(val: TVal): this;
        val(val?: TVal): TVal|this {
            if (val === undefined) return this.data.val;
            if (this.validate(val)) this.data.val = val;
            else {
                console.warn(`Config field '${ this.name() }' has invalid value '${ val }'`)
            }
            return this;
        }

// deprecated
        default(): TVal;
        default(val: TVal): this;
        default(val?: TVal): TVal|this {
            if (val === undefined) return this.data.default;
            this.data.default = val;
            return this;
        }
    }

    export class String extends Field<string> {
        validate(val: any): Error[] {
            return val !== undefined && val !== null && val.constructor === global.String ?
                [] : [new Error(`Value '${ val }' of field ${ this.name() } is not a string`)];
        }
    }

    export class Number extends Field<number> {
        private numData = {
            min: NaN,
            max: NaN
        }
        validate(val: any): Error[] {
            let v = global.Number(val);// NaN
            if (val === null || isNaN(v))
                return [new Error(`Value '${ val }' of field ${ this.name() } is not a number`)];
            if ((!isNaN(this.min()) && v < this.min()) || (!isNaN(this.max()) && v > this.max()))
                return [new Error(`Value '${ val }' of field ${ this.name() } is out of range ${ [this.min(), this.max()] }`)];
            //if () return [new Error()];
            return [];
        }
        min(): number;
        min(val: number): this;
        min(val?: number): number|this {
            if (val === undefined) return this.numData.min;
            this.numData.min = val;
            return this;
        }
        max(): number;
        max(val: number): this;
        max(val?: number): number|this {
            if (val === undefined) return this.numData.max;
            this.numData.max = val;
            return this;
        }
        minMax(min: number, max: number): this {
            this.min(min);
            this.max(max);
            return this;
        }
    }
}
