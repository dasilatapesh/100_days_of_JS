function generateHashTag(str) {
    if (str.trim().length === 0 || str.trim().length > 280) {
        return false;
    }
    str = str.split(" ");

    /*one way=> map function will return array : first word replaced by capital letter and then joined
    return "#"+str.map((currWord) => currWord.replace(currWord[0], currWord[0].toUpperCase())).join("");*/
    
    //way-2
    let newStr = "#";
    str.map((currElem) => newStr += currElem.charAt(0).toUpperCase() + currElem.slice(1));
    return newStr;
}

let str = "Hello how are you";
console.log(generateHashTag(str));
