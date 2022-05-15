# 知识点
## const 断言
> [as const](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-4.html#const-assertions)
```js
// Type '"hello"'
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;
```

## T[number] 索引访问类型
> [Indexed Access Types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)

```js
type Person = { age: number; name: string; alive: boolean };
// type Age = number
type Age = Person["age"];

// 使用 number 作为索引 去获取数组元素的类型
// type Person = { name: string; age: number; }
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
type Person = typeof MyArray[number];

```

## // @ts-expect-error
> [// @ts-expect-error](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments)

被 `// @ts-expect-error` 注释的语句如果抛出异常，TS将禁止报告该错误。但是如果没有抛出异常，TS将报告异常
```ts
// @ts-expect-error
console.log(47 * "octopus");
```