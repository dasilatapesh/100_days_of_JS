// way-1 Simply checking the length of the the words
function longestString1(str){
    let size  = -Infinity;
    let longestStr = "";
    str = str.split(" ");
    for(let string of str){
        if(size<string.length){
            longestStr = string;
            size = string.length;
        }
    }
    
    return longestStr;
}

//way-2 By sorting the words based of length
function longestString2(str){
    if(str.trim().length===0){
        return false;
    }
    let words = str.split(" ");
    words = words.sort((a,b)=>b.length - a.length);
    return words[0]; 
    //or return words.at(-1) it finds last element, if sorted as a.length - b.length
}

//way-3 Using the reduce method
function longestString3(str){
    if(str.trim().length===0){
        return false;
    }
    let words = str.split(" ");
    return words.reduce((accum, currWord) => currWord.length > accum.length ? currWord : accum, "");
}


let str = "Hello my name is Tapesh Dasila what is your name."
console.log(longestString3(str));