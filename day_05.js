const sortAscending = (array) => {
    return array.sort((a,b) => a-b);
}

const sortDescending = (array) => {
    return array.sort((a,b) => b-a);
}

console.log(sortAscending([11,8,5,3]));
console.log(sortDescending([3,5,8,11]));


//the inbuilt sort method do not work best for the numbers but it works best for the string
//it sorts the string based on charachter
// console.log([3,5,8,11].sort()); //will give output of [11,3,5,8] as 1 comes before all digits