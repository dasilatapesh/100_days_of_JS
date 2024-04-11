function countChar(str,ch){
    str = str.split("");
    //one way
    // let count = 0;
    // for(let char of str){
    //     if(char === ch){
    //         count++;
    //     }
    // }
    // return count;

    //another way (here accum++ will not work because it will return current value of accum and then increments it)
    return str.reduce((accum, currElem) => currElem === ch ? ++accum : accum , 0);
}

let str = "AAAAaaaAAAaaaAAAAAAAAaaaaaaaa";
console.log(countChar(str,'A'));