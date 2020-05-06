"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lrucache_1 = require("./memstorage/lrucache");
exports.LRUCache = lrucache_1.LRUCache;
var timercache_1 = require("./memstorage/timercache");
exports.TimerCache = timercache_1.TimerCache;
var memstorage_1 = require("./memstorage");
exports.MemStorage = memstorage_1.MemStorage;
var Storage = /** @class */ (function () {
    function Storage(opts) {
        this.storage =
            opts.storage ||
                new memstorage_1.MemStorage({
                    shortlife: { limit: 100 },
                    longlife: { limit: 10 }
                });
    }
    Storage.prototype.store = function (key, value, opts) {
        this.storage.put(key, value, opts);
    };
    Storage.prototype.get = function (key, opts) {
        return this.storage.get(key, opts);
    };
    Storage.prototype.purge = function (key) {
        this.storage.delete(key);
    };
    Storage.prototype.purgeAll = function () {
        this.storage.clearAll();
    };
    return Storage;
}());
exports.Storage = Storage;
