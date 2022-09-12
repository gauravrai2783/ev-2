/*
Alerts 
0 seconds : Your order is accepted 
3 seconds : Your order is being Packed 
8 seconds : Your order is in transit  
10 seconds : Your order is out for delivery 
12 seconds : Order delivered
*/


function user(){
   alert("Your order is accepted")

   setTimeout(d2,3000); setTimeout(d3,8000) ; setTimeout(d4,10000) ; setTimeout(d5,12000)
}

function d2(){
    alert("Your order is being Packed")
}

function d3(){
    alert("Your order is in transit")
}

function d4(){
    alert("Your order is out for delivery")
}

function d5(){
    alert("Order delivered")
}