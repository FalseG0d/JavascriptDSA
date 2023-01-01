/**
 * @param {string[]} words
 * @return {string[]}
 */

var set = 0;
let map = new Map();

function setVar() {
    if(set == 1) return;

    set = 1;
    
    let row1 = "qwertyuiop";
    let row2 = "asdfghjkl";
    let row3 = "zxcvbnm";

    for(let ch of row1) {
        map.set(ch, 1);
    }

    for(let ch of row2) {
        map.set(ch, 2);
    }
    
    for(let ch of row3) {
        map.set(ch, 3);
    }
}

var findWords = function(words) {
    setVar();

    let res = [];

    for(let word of words) {
        let check1 = 0;
        let check2 = 0;
        let check3 = 0;

        for(let ch of word) {
            // console.log(map.get(ch));
            if(map.get(ch) == 1) check1++;
            else if(map.get(ch) == 2) check2++;
            else if(map.get(ch) == 3) check3++;
        }

        // console.log(check1 + " " + check2 + " " + check3);

        if((check1 == 0 && check2 == 0) || (check2 == 0 && check3 == 0) || (check1 == 0 && check3 == 0)) res.push(word);
    }

    return res;
};