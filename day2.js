//DAY-2
//1.Generate Invoice Report 
let items =[
    {name:'pen', qty:3, price:10},
    {name:'notebook', qty:2, price:50},
    {name:'bag', qty:1, price:400}
];
let invoiceReport = items.map(item => ({
    name: item.name,
    total: item.qty * item.price
}));
console.log(invoiceReport)

//2.Detect Duplicate Entries 
let userss = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let duplicates = userss.filter( (user, index) => {
    if(userss.indexOf(user)!= userss.lastIndexOf(user) && (userss.indexOf(user)===index)) {
        return user;
    }
}) 
console.log(duplicates);

//3.Find Most Sold Product
let orders =[
    {product:'pen', qty:10},
    {product:'notebook', qty:5},
    {product:'pen', qty:15},
    {product:'bag', qty:1},
    {product:'notebook', qty:10},
];
let FrequencyMap = orders.reduce( (acc, curr) => {
    acc[curr.product] = (acc[curr.product] || 0) + curr.qty;
    return acc;
}, {});
let maxProduct = '';
let maxQty = 0;

for(let product in FrequencyMap) {
    if(FrequencyMap[product] > maxQty) {
        maxQty = FrequencyMap[product];
        maxProduct = product;
    }
}
console.log(maxProduct);
