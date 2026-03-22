"use strict";
// [['Banana', 20]],[],[],[],[],[]]
Object.defineProperty(exports, "__esModule", { value: true });
class Map {
    buckets;
    size = 10;
    constructor() {
        this.buckets = Array.from({ length: this.size }, () => []);
    }
    hash(key) {
        const keyString = String(key);
        let hashValue = 0;
        for (let i = 0; i < keyString.length; i++) {
            hashValue += keyString.charCodeAt(i);
        }
        return hashValue % this.size;
    }
    add(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket)
            return;
        const existingPair = bucket.find(pair => pair[0] === key);
        if (existingPair) {
            existingPair[1] = value;
        }
        else {
            bucket.push([key, value]);
        }
    }
    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket || bucket.length === 0)
            return undefined;
        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
    }
    delete(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];
        if (!bucket || bucket.length === 0)
            return false;
        const foundIndex = bucket.findIndex((pair) => pair[0] === key);
        if (foundIndex !== -1) {
            bucket.splice(foundIndex, 1);
            return true;
        }
        return false;
    }
    clear() {
        this.buckets = Array.from({ length: this.size }, () => []);
    }
}
// Пример добавления данных
let weatherMap = new Map();
weatherMap.add('London', 20);
weatherMap.add('Berlin', 25);
weatherMap.add('Berlin', 30);
console.log(weatherMap.get('Berlin'));
weatherMap.delete('Berlin');
weatherMap.delete('Berlin');
weatherMap.clear();
console.log(weatherMap.buckets);
// Пример получения данных
//console.log(weatherMap.get('London')); // Выведет 20
//# sourceMappingURL=5-map.js.map