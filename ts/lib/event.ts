export type HandlerFunc<T> = (arg?:T) => void;

export class Handler<T> {
    constructor(public func: HandlerFunc<T>, public once?: boolean) {
    }
};

export class Event<T> {
    private arrOfHandlers: Map<number, Handler<T>> = new Map();

    private counter = 0;

    on(handler: HandlerFunc<T>): number {
        this.arrOfHandlers.set(this.counter, new Handler(handler));
        return this.counter++;
    }

    trigger(arg?: T): void {
        //console.log(arg);
        this.arrOfHandlers.forEach((handler, key) => {
            handler.func(arg);
            if (handler.once) {
                this.arrOfHandlers.delete(key);
            }
        })
    }

    once(handler: HandlerFunc<T>): number {
        this.arrOfHandlers.set(this.counter, new Handler(handler, true));
        return this.counter++;
    }

    off(id: HandlerFunc<T> | number): void {
        if (id instanceof Function) {
            this.arrOfHandlers.forEach((handler, key) => {
                if (id === handler.func) {
                    this.arrOfHandlers.delete(key);
                }
            });
        }
        else {
            this.arrOfHandlers.delete(id);
        }
    }

};

var test = new Event();

var num = test.on(() => {
    console.log('ON');
})

test.once(() => {
    console.log('ONCE');
});

test.trigger();
test.off(num);

test.trigger();

/*
HandlerFunc - с одним параметром. Event - generic type <T>, который указывает тип
параметра, передаваемого хэндлером.

Все параметры опциональные.
*/

interface Point {
    x: number,
    y: number
};

test.on((point: Point) => {
    console.log(point);
});


test.trigger({x: 2, y: 3});
