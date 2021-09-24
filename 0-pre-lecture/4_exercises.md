# Fundamentals: Exercises

_We will correct these exercises in class._

## Exercise 1

```js
// Look at these expressions below and determine whether they evaluate to true or false

1. true || false  // true
2. false && false  // false
3. 1 < 2 && 2 > 1  // true
4. 31 < 13 || 1 < 2 && 3 > 1  // true
5. 400 <= 400 && 399 < 400 && (30 > 31 || 400 > 31)  // true
6. true && false && false || false && true  // false
7. true && false || true || false  // true
8. true && false && false || false && true ? true && false && false || false && true : 1 < 2 && 2 > 1  // true
```

---

## Exercise 2

Given this data structure:

```js
let data = [0, [], [], [1, 2, 3, [4]]];
```

1. How would you access the value `0`? // data[0]
2. How would you access the value `3`? // data[3][2]
3. How would you access the value `4`? // data[3][3][0]

---

## Exercise 3

- List the number of properties for each object. // 2 and 3
- For each property, indicate its key and its value. // key label, value corn; key price, 5.3 value; key ISBN, value 53532; key isAvailable, value true; key author, value Nakamoto
- For each property value, indicate its type. // string, number, number, boolean, string

```js
{ label: 'corn', price: 5.3 + '$' };
{ ISBN: 53532, isAvailable: true, author: 'Nakamoto' };
```

---

## Exercise 4

```js
// Given
let person = { name: "Bob", age: 23 };
```

What is the value of the following expressions?

1. person.name // Bob
2. person['name'] // Bob
3. person[name] // undefined