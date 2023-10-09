# 1. B: ReferenceError: greetign is not defined
### Explanation: There is a type error in the variable name. The variable was declared as 'greeting'. But the an emply object was assigned as value to 'greetign'. So, the answer is 'greetign is not defined'.

# 2. A: NaN
### Explanation: Here a function is declared with two parameters 'a' and 'b'. When the function is called two arguments were sent, but one of them is 'string'. So, the answer is "NaN (Not a Number)". Because, number + string = NaN

# 3. A
### Explanation: 'info.favoriteFood' only modify the value within the 'info' object. It doesn't change the original array. So, the 'food' array remains the same as before.

# 4. B: Hi there, undefined
### Explanation: 'sayHi(name)' function needs a parameter to operate. But when the function was called "console.log(sayHi());" no arguments was passed. So, the 'name' parameter remains undefined.

# 5. C: 3
### The 'forEach' loop through every elements of the 'nums' array. But it the 'nums' array the first element is 0, which is a falsy one. So, the forEach loop increments the count value by 1, whenever it finds a truty value. And there are 3 truthy values (1 , 2, 3). So, the answer is 3.