1. values added: 20  
2. final result: 20   
3. values added: 20
4. Throws an error because let is not scoped outside of the if statement block therefore result no longer exists on line 13.
5. Const throws an error because when result is first assigned to 0 it is permanently assigned. Reassigning the statement is not possible and goes against the const var.
6. Throws an error because of the same reason as #5, const rules state that a variable declared with const cannot be reassigned.



1. line 12 prints i which is 3. Var is functions scoped so its available after the for loop.
2. Discounted price = 150 since it will take the value of the final computed price which is 300 * (1-.5)
3. finalPrice = 150 since it will take the value of discountedPrice on the final loop and finalPrice is also a variable assigned with var
4. The function will return an array with 3 elements filled with the discounted computed prices.
5. Line 12 will error because i is only scoped in the forloop and cannot be accessed outside of it.
6. Line 13 will error because discounted price was assigned with let and therefore cannot be accessed outside of the for loop.
7. line 14 will print 150, it was assigned a value in the for loop and since let is in the same scope as the console.log then it prints the final value computed.
8. It will return an array of the computed values in the for loop. Even though the array was defined with let, since the function needs to return something, it will retain its contents.
9. line 11 will error because i is declared with let and the variable is trying to be accessed outside of its definition scope.
10. Line 12 will print 3 because the length is assigned with the # of elements in the prices array passed into the function.
11. Function will not error, even though the array was assigned with const tag since the const applies to the reference itself only. The function will still modify the array's contents and will return the calculated values.


