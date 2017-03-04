export declare module Field {
    abstract class Field<TVal> {
        constructor(defaultValue?: TVal);
        abstract validate(val: any): Error[];
        private data;
        key(): string;
        key(val: string): this;
        description(): string;
        description(val: string): this;
        name(): string;
        name(val: string): this;
        val(): TVal;
        val(val: TVal): this;
        default(): TVal;
        default(val: TVal): this;
    }
    class String extends Field<string> {
        validate(val: any): Error[];
    }
    class Number extends Field<number> {
        private numData;
        validate(val: any): Error[];
        min(): number;
        min(val: number): this;
        max(): number;
        max(val: number): this;
        minMax(min: number, max: number): this;
    }
}
