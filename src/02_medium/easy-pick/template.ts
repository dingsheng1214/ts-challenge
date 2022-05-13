/**
 * 从类型 T 中选择出属性 K，构造成一个新的类型。
 * 
 * 关键点：
 * Mapped Types： 映射类型
 * Condition Types： 条件类型(extends 做条件类型约束)
 * [key]: value: 索引签名
 * keyof: 提取对象的keys, 输出一个由key的字面量类型组合而成的union类型
 */
type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

function myPick(todo, keys) {
    const obj = {}
    for(let key in keys) {
        obj[key] = todo[key]
    }
    return obj
}