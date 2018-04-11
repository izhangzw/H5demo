prototype 是 函数的一个属性, 它指向的是一个对象. 对象中有constructor属性, 该属性又指向构造函数
__proto__ 是 对象的一个属性, 它指向实例原型prototype


构造函数function person(){}

函数原型person.prototype

实例对象new person()


原型链, 是通过__proto__链接起来的, 最终顶层指向null
null 表示“没有对象”，即该处不应该有值

原型链示例
new person().__proto__ === person.prototype
new person().__proto__.__proto__ === Object.prototype
new person().__proto__.__proto__.__proto__ === null