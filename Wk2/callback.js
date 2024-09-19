var add= function (a,b) {
    return a+b
}
var sub = function(a,b) {
    return a-b
}

//callback
var makecall = function (a,b,add,sub){
    if (a>b)
        return sub(a,b);
    else 
        return add(a,b);
}

var r = makecall(5,3,add,sub);
console.log(r)


var print = function(){
    console.log("Hello");
}
setInterval(print,1000);

setInterval(() => {
    console.log("Hello");
}, 2000)