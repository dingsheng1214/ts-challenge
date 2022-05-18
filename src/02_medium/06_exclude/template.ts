// 从联合类型T中排除U的类型成员，来构造一个新的类型
type MyExclude<T, U> = T extends U ? never : T

type A = MyExclude<'a' | 'b' | 'c', 'a'>

// 条件类型-条件分配
type B = ('a' extends 'a' ? never : 'a') | 
         ('b' extends 'a' ? never : 'b') | 
         ('c' extends 'a' ? never : 'c')
