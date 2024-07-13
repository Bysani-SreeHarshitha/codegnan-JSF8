console.log("for loop");
for (var i=0;i<=5;i++){
    console.log(i);
}
for (var i=5;i>=0;i--){
    console.log(i);
}
console.log("for IN loop");
var contact={
    name:"harshi",
    mobile:7032342379,
    email:"hrshuih@gmail.com"
}
for(var x in contact){
    console.log(contact[x]);
}
console.log("for OF loop");
var list=["a","b","c"];
for (var x in list){
    console.log(x);
}
console.log("even numbers");
var list1=[10,4,6,9,3,2,6,8];
for (var x of list1){
    if(x%2==0){
        console.log(x);
    }
}
console.log("for IN loop");
var x=5;
while(x>=1){
    console.log(x);
    x=x-1;
}

    