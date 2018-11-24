var sessionStorageMock = (function() {
    var store = {};

    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };

})();

var localStorageMock = (function() {
    var store = {};

    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };

})();

Object.defineProperty(window, 'sessionStorage', {
    value: sessionStorageMock
});

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock
});

window.matchMedia = window.matchMedia || function() {
return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
    };
};