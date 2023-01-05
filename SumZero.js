input = [-5, -4, -3, -2, 0, 2, 4, 6, 8, 8]
N = input.length

res = []

var map = new Map();

for(let num of input) {
    if(map.has(num)) map.set(num, map.get(num)+1);
    else map.set(num, 1);
}
for(let num of input) {
    if(num != 0 && map.has(-num)) {
        res.push([num, -num]);
        map.delete(num);
        }
}
for(let arr of res) {
    console.log(arr[0], arr[1]);
}