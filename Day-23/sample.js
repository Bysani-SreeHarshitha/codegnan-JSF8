console.log("function declaration");
function reverse(n){
    res=0
    while (n!=0){
        r = n%10;
        res = (res*10)+r;
        n = parseInt(n/10);
    }
    return res;
}
var x =-123;
if(x>=0){
    x=reverse(123);
    console.log(x);
}
else{
    x = x*-1;
    z = reverse(x);
    console.log(-1*z);
}
console.log("Function Expression");
var reverse=function(n){
    res=0
    while (n!=0){
        r = n%10;
        res = (res*10)+r;
        n = parseInt(n/10);
    }
    return res;
}
var x =123;
if(x>=0){
    x=reverse(123);
    console.log(x);
}
else{
    x = x*-1;
    z = reverse(x);
    console.log(-1*z);
}
//example 2
var reverse=function(n){
    res=0
    while (n!=0){
        r = n%10;
        res = (res*10)+r;
        n = parseInt(n/10);
    }
    return res;
}
var x =123;
var y =3;
var res =(x*10)+3;
res=reverse(res);
res =(res*10)+3;
res=reverse(res);
console.log(res);
console.log("Arrow Function");
var result = (n,s)=>{
    console.log(n%s);
}
result(13,3);
console.log("IIFE");
(function(){
    var n = 5;
    var res = 1;
    for(var i=1;i<=n;i++){
        res = res*i;
    }
    console.log(res);
})();
console.log("Named Function");
function checknum(n){
    if (n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checknum(12);
console.log("Named Function");
var hello=function checknum(n){
    if (n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
hello(12);
//user defined functions
console.log("sum of three numbers");
function wpwr(a,b,c){
    return a+b+c;
}
console.log(wpwor(10,20,30));
function wpwor(a,b,c){
    return a+b+c;
}
console.log(wpwor(10,20,30));
function wopwr(a,b,c){
    return 10+20+30;
}
console.log(wopwr(10,20,30));