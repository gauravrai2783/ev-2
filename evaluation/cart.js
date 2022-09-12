


function cartData(){
    let Totalprice=document.getElementById("cart_total")
    let sum=0;
    let Array=JSON.parse(localStorage.getItem("items"))||[];

    let container=document.getElementById("cart");
    // container.innerHTML="null"
    Array.forEach(function(el,index){
        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let name=document.createElement("p");
        name.innerText=el.name

        let price=document.createElement("p");
        price.innerText=el.price
        sum+=+el.price

        let rem=document.createElement("button");
        rem.innerText="Remove item"
        rem.className="remove"
        rem.addEventListener("click",function(){
            remove(index)
        })


        div.append(img,name,price,rem);

        container.append(div)
        console.log('sum:', sum)
    })
    
     Totalprice.innerText=sum
}

cartData()

function remove(index){
    let Array=JSON.parse(localStorage.getItem("items"))||[];
    let newarr=Array.filter(function(el,i){
        if(i==index){
console.log(i);
        }
        else{
            return i!==index;
        }
    })
    localStorage.setItem("items",JSON.stringify(newarr));
    cartData();
}