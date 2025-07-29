//DAY-7   
//1.Insert New Delivery Order
let ordersArray = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" } 
];

let newOrder = { orderId: 3, deliveryTime: "12:15" };

function insertOrder(ordersArray, newOrder) {
    for(let i = 0; i < ordersArray.length; i++) {
        if(newOrder.deliveryTime < ordersArray[i].deliveryTime){
           ordersArray.splice(i, 0, newOrder);
           return ordersArray; };
    }; 
    //if newOrder(delivery-time) > existing orders(delivery-time)
    ordersArray.push(newOrder);
    return ordersArray;
}
console.log(insertOrder(ordersArray, newOrder));

//2.Remove Inactive Users 

let users = [
  { username: "ali", isActive: true },
  { username: "sara", isActive: false },
  { username: "john", isActive: true }  
];

function removeInactive(users) {
    return users.filter(user => user.isActive);
};
let activeUsers = removeInactive(users);
console.log(activeUsers);

//3.Movie Pair Watch Time

let movieDurations = [90, 85, 75, 60, 120, 150, 125];  
let targetTime = 250;

movieDurations.sort((a,b) => a - b);

function findTarget(movieDurations, targetTime){
    let left = 0;
    let right = movieDurations.length - 1;

 while(left < right) {
    const sum = movieDurations[left] + movieDurations[right];

    if(sum === targetTime) {
        return [movieDurations[left], movieDurations[right]];
    } else if(sum < targetTime) {
        left ++;
    } else {
        right --;
    }
 }
 return null;
} 
console.log(findTarget(movieDurations, targetTime));

