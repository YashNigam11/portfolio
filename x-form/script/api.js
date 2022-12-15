let url ="https://dummyjson.com/products?limit=100";
async function getProduct(){
    let product= await fetch(url)
    .then (await console.log(product.JSON())) 
    
    
}
getProduct()
console.log("ysah")