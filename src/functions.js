function addToCart(quantity, productName="Elma" ){
    console.log("Sepete Eklendi : " + productName + " adet :" + quantity)
}

//addToCart()
addToCart("elma", 10)
//addToCart("Karpuz")

let sayHello = () =>{
    console.log("Hello World!")
}

sayHello()

let sayHello2 = function () {
    console.log( "Hello World 2")
}

 sayHello2 = function () {
    console.log( "Hello World 3")
}

sayHello2();



let product1 = {productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product){
    console.log("------------------")
     console.log("Ürün  : "+product.productName)
     console.log("Adet  : "+product.unitPrice)
     console.log("Fiyat : "+product.quantity)
} 

addToCart3(product1)


let product2 = {productName:"Elma", unitPrice:10, quantity:5}
let product3 = {productName:"Elma", unitPrice:10, quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)
console.log("***************")



let addToCart4 = (products) =>{ 
    console.log(products)
    
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"armut", unitPrice:10, quantity:5},
    {productName:"ayva", unitPrice:10, quantity:5}
]

addToCart4(products)

console.log("************")
function add(bisey, ...numbers ) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total+ numbers[i]
        
    }

    console.log(total)
    console.log(bisey)
}

 
add(20, 30)


let numbers = [30,50,100,500]
console.log(...numbers)
console.log("********************************")
console.log(Math.max(...numbers))


let [icAnadolu,marmara, Karadeniz,[icAnadoluSehirleri, marmaraSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"marmara", population:"40M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara", "konya"],
        ["İstanbul", "Bursa"],
        ["Giresun", "Trabzon"],
    ]
]
console.log("///////////////")
//console.log(icAnadolu)
//console.log(marmara.population)
console.log(marmaraSehirleri)

console.log("///////////////")
function someFunction(x,y,z) {
    console.log(y)
}
someFunction([10000,20000],3000)



