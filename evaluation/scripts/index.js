// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

let cont=document.getElementById("items")

async function itemData(){
try{
    let res= await fetch(`https://grocery-mock-api.herokuapp.com/items`);
let data=await res.json();
console.log('data:', data)
append(data)
}
catch(err){
    console.log('err:', err)
}
}
itemData()

function append(data){
    data.data.forEach(function(el){
let card=document.createElement("div");
card.className="item"

let img=document.createElement("img");
img.src=el.image

let name=document.createElement("p");
name.innerText=el.name

let price=document.createElement("p");
price.innerText=el.price

let but=document.createElement("button");
but.innerText="Add to cart"
but.className="add_to_cart"
but.addEventListener("click",function(){
    add(el)
})

card.append(img,name,price,but);
cont.append(card)
    })
}

let Array=[]; let count=0;

function add(el){
    count++;
    let divCount=document.getElementById("item_count").innerText=count
// console.log(el)
let obj={
    image:el.image,
    name:el.name,
    price:el.price
}
Array.push(obj)
console.log(obj)

localStorage.setItem("items",JSON.stringify(Array));


}


