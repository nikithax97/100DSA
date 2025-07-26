//DAY-5
//1.Write a function to separate them into two different arrays.
const phoneNumberss = [
  "+919876543210",
  "+14085551234",
  "+918888777666",
  "+12345678901",
  "+917654321098"
];
function seperatePhoneNumbers(phonenumberss){
    const indianNumbers = phoneNumberss.filter(num => num.startsWith("+91"));
    const usNumbers = phoneNumberss.filter(num => num.startsWith("+1"));

    return {indianNumbers, usNumbers};
};
console.log(seperatePhoneNumbers(phoneNumberss));

//2.Insert Product in Cart
let Cart = [101, 102, 104];
let newProduct = 103;
function insertProduct(Cart, newProduct){
    Cart.splice(1, 0, newProduct);
    return Cart;
}
let updatedCart = insertProduct(Cart, newProduct);
console.log(updatedCart);

//3.Insert Student in Waiting List
let waitingList = ["Ali", "John", "Sara"];
let newStudent = "Aarav";
function addStudent(waitingList, newStudent){
    waitingList.push(newStudent);
    return waitingList;
};
let updatedList = addStudent(waitingList, newStudent);
console.log(updatedList);

