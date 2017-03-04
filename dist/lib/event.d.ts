export declare type HandlerFunc<T> = (arg?: T) => void;
export declare class Handler<T> {
    func: HandlerFunc<T>;
    once: boolean;
    constructor(func: HandlerFunc<T>, once?: boolean);
}
export declare class Event<T> {
    private arrOfHandlers;
    private counter;
    on(handler: HandlerFunc<T>): number;
    trigger(arg?: T): void;
    once(handler: HandlerFunc<T>): number;
    off(id: HandlerFunc<T> | number): void;
}
