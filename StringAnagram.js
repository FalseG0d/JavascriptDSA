/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var map1 = new Map();

    for(let ch of s) {
        if(map1.has(ch)) map1.set(ch, map1.get(ch) + 1);
        else map1.set(ch, 1);
    }
    
    for(let ch of t) {
        if(map1.has(ch)) map1.set(ch, map1.get(ch) - 1);
        else return false;
    }

    var keys = map1.keys();

    for(let key of keys) {
        if(map1.get(key) != 0) return false;
    }
    
    return true;
};