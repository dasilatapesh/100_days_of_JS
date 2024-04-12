function isValidTriangle(a,b,c){
    if(a+b>c && a+c>b && b+c>a){
        return true;
    }
    return false;
}

function checkTriangle(a,b,c){
    if(isValidTriangle(a,b,c)){
        if(a==b && b==c){
            return "Equilateral Triangle";
        }else if(a==b || b==c || a==c){
            return "Isosceles Triangle";
        }else{
            return "Scalene Triangle";
        }
    }else{
        return "Not Valid Triangle"
    }
}

console.log(checkTriangle(1,5,1));
console.log(checkTriangle(7,10,15));
console.log(checkTriangle(7,7,6));
console.log(checkTriangle(7,7,7));