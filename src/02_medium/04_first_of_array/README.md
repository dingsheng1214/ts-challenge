# 条件类型
```ts
type isString<T> = T extends string ? true : false

type A = isString<string> // true
type B = isString<number> // false
```
1. 声明一个条件类型 `isString` ,它有一个泛型 `T`, 这个条件类型中的条件是`T extends string`, 即`T`是不是`string`的子类型
2. 如果`T`是`string`的子类型, 得到的类型为 `true`
3. 如果`T`不是`string`的子类型, 得到的类型为 `false`

## 条件分配
> 条件类型符合分配率

| 这个类型                      |           等价于 |
| ----------- | ----------- |
| `(string \| number) extends T ? A : B`       |    `(string extends T ? A : B) \| (number extends T ? A : B)`    |

## infer关键字
> infer 推断

条件类型的另一个特性是可以在条件中声明泛型。

```ts
type ElementType<T> = T extends (infer U)[] ? U : T
// 由泛型T 推断出 U 即  number[] 推断出 number
type B = ElementType<number[]> // number
```

```ts
type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never
```