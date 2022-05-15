/**
 * 该 Readonly 会接收一个 泛型参数，并返回一个完全一样的类型，只是所有属性都会被 readonly 所修饰。
 * 也就是不可以再对该对象的属性赋值。
 */
type MyReadonly<T> = {
    readonly [k in keyof T]: T[k]
}
