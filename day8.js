//DAY-8

//1. Count Pairs with Given Sum

let array1 = [1, 2, 3, 4, 5, 6, 7]  
let target = 8;

 function uniquePairs(array1, target) {
    let left = 0;
    let right = array1.length - 1;
    count = 0;

    while(left < right) {
        sum = array1[left] + array1[right];

        if(sum === target) {
            count ++;
            left ++;
            right --;
        } else if(sum < target) {
            left ++;
        } else {
            right --;
        }
    }
    return count;
}
console.log(uniquePairs(array1, target));



//2. Move Zeroes to End

let arr = [0, 1, 0, 3, 12];

function moveZeros(arr) {
    let left = 0;
    
    for(let i = 0; i < arr.length; i++) {

        if(arr[i] !== 0) {
            let temp = arr[i];
            arr[i] = arr[left];
            arr[left] = temp;
            left ++;
        }
    }

   return arr;
}
console.log(moveZeros(arr));

