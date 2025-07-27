//DAY-6

//1. Add Product to Cart
let cart1 = [101, 102, 103, 104];
cart1.push(105);
console.log(cart1);

//2.Remove Sold Out Item
let cart2 = [101, 102, 103, 104];
cart2 = cart2.filter(product => product !== 103);
console.log(cart2);

//3.Insert at Specific Position
let fruits = ["apple", "orange", "grapes"];
//insert banana at index-2
fruits.splice(2,0, "banana");
console.log(fruits);

//4.Print All Students
let students = ["Ali", "Zara", "John"];
students.forEach(student => {
    console.log(`Hello, ${student}!`);
});

//5.Delete First Item from Queue
let orders = ["order1", "order2", "order3"];
orders.shift();
console.log(orders);
