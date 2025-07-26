//DAY-1
//1.Remove Discontinued Products
let products =['laptop', 'mobile', 'tablet', 'camera', 'watch'];
products.splice(2,2);
console.log(products);  //output: ['Laptop', 'Mobile', 'Watch']

//2.Add New Students in Between
let students =['Ali', 'Sara', 'Zoya'];
students.splice(1,0, 'Nina', 'Omar');
console.log(students);  //output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']

//3. Extract Top Performers
let scores =['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
console.log(scores.slice(0,3));  //output: ['Zainab', 'Ali', 'Farhan']

//4. Show Last 2 Days’ Sales
let sales =[220, 300, 280, 150, 400, 390, 310];
console.log(sales.slice(5));  //Output: [390, 310]

//5. Get All Users Who Are Active
let users =[
    {name:'Ahmed', active:true},
    {name:'Mira', active:false},
    {name:'John', active:true}
];
let activeUsers = users.filter(users => users.active === true);
console.log(activeUsers); //Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]

//6. Block Short Phone Numbers
let phoneNumbers =['1234567890', '12345', '9876543210', '678901234'];
let validPhoneNO = phoneNumbers.filter(numbers => numbers.length == 10);
console.log(validPhoneNO);     //output: ['1234567890', '9876543210']

//7. Convert Price to With Tax
let prices =[100, 200,300];
let gstPrices = prices.map(price => price+(price*18/100));
console.log(gstPrices);     //output: [118, 236, 354]

//8. Append “.com” to Website Names
let sites =['google', 'amazon', 'microsoft'];
let website = sites.map(site => site+'.com');
console.log(website);     //output:['google.com', 'amazon.com', 'microsoft.com']

//9. Calculate Total Cart Price
let cart =[499,1299,299,799];
let sum = cart.reduce((acc, curr) => acc + curr, 0);
console.log(sum);      //output: 2896

//10. Count Frequency of Votes
let votes =['A', 'B', 'A', 'C', 'B', 'A'];
let count = votes.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
}, {});;
console.log(count);     //OUTPUT: { A: 3, B: 2, C: 1 }
