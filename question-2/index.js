let obj = {a:5, b:6, c:3, '1':4,'2':2, '3':7,'8':8};
let keys = [] , values = [];
Object.entries(obj).forEach(([key,value])=> {
    if(key != value){
        keys.push(key);
        values.push(value)
    }
});

console.log('keys:',keys);
console.log('values:', values);