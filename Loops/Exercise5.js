//While Loop
//Example 2:
var arr = [5, 105, 10, 110, 15, 115, 20, 120, 25, 125, 30, 130, 35, 135, 40, 140, 45, 145, 50, 150]; 
var sum = 0; 
var g = 0;

while(sum <= 100){ 
    sum += arr[g];
    g++; 
} 
console.log(g, sum);