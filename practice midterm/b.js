function power(base, exponent){
    let baseexponent = 1;
    if(exponent === 0){
        return 1;
    }else{
        baseexponent = base * power(base,exponent - 1);
    }
    return baseexponent;
}

function createArray(){
    var array = new Array(3);
    array[0] = new Array(5);
    array[1] = new Array(6);
    array[2] = new Array(4);
}

console.log(power(2,3));