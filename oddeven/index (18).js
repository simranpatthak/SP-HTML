
let arr=[1,2,3,4,5];
let odd=0;
let even=0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }

    if (odd > even) {
        console.log("Odd");
    } else {
        console.log("Even");
    }





