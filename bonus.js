var createCounter = function (init) {
    let i = init;

    return {
        increment: function () {
            return ++i;
        },
        decrement: function () {
            return --i;
        },
        reset: function () {
            i = init;
            return i;
        }
    };
};