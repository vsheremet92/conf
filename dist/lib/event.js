"use strict";
class Handler {
    constructor(func, once) {
        this.func = func;
        this.once = once;
    }
}
exports.Handler = Handler;
;
class Event {
    constructor() {
        this.arrOfHandlers = new Map();
        this.counter = 0;
    }
    on(handler) {
        this.arrOfHandlers.set(this.counter, new Handler(handler));
        return this.counter++;
    }
    trigger(arg) {
        this.arrOfHandlers.forEach((handler, key) => {
            handler.func(arg);
            if (handler.once) {
                this.arrOfHandlers.delete(key);
            }
        });
    }
    once(handler) {
        this.arrOfHandlers.set(this.counter, new Handler(handler, true));
        return this.counter++;
    }
    off(id) {
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
}
exports.Event = Event;
;
var test = new Event();
var num = test.on(() => {
    console.log('ON');
});
test.once(() => {
    console.log('ONCE');
});
test.trigger();
test.off(num);
test.trigger();
;
test.on((point) => {
    console.log(point);
});
test.trigger({ x: 2, y: 3 });
//# sourceMappingURL=event.js.map