type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [p in T[number]]: p
} 

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// const t: 'tesla'
const t = tuple[0]

// js
function TupleToObject(arr) {
    const obj = {}
    arr.forEach(e => {
        obj[e] = e
    });
    return obj
}
console.log(TupleToObject(tuple));
