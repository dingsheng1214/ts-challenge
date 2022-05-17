/**
 * 实现一个通用First<T>，它接受一个数组T并返回它的第一个元素的类型。
 */
type First1<T extends any[]> = T extends [] ? never : T[0]
// 通过‘length'属性的索引签名来检查数组的长度
type First2<T extends any[]> = T['length'] extends 0 ? never : T[0]
// extends union
type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never
// 条件类型
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never 

function firstOfArray(arr) {
    const [first, ...rest] = arr
    if(first === undefined) return 'never'
    // if(arr.length === 0) return 'never'
    return arr[0];
}




