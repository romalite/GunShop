let product = document.getElementById('grid')
let xhr = new XMLHttpRequest
let url = 'https://my-json-server.typicode.com/romalite/GunShop'
xhr.open("GET", url+ "/products/")

xhr.responseType = 'json'
xhr.send()

xhr.onload = function () {
    let products = xhr.response
    product.innerHTML = `
    <div class = "item">
            <h1>${products[0].name}<h1>
            <img width="250px" src ='${products[0].photo_url}'
            <h1>${products[0].price}<h1>
            <h1>${products[0].description}<h1>
            </div>
            <div id class = "item">
            <h1>${products[1].name}<h1>
            <img width="250px" src ='${products[1].photo_url}'
            <h1>${products[1].price}<h1>
            <h1>${products[1].description}<h1>
            
            </div>
            <div class = "item">
            <h1>${products[2].name}<h1>
            <img width="250px" src ='${products[2].photo_url}'
            <h1>${products[2].price}<h1>
            <h1>${products[2].description}<h1>
            
            </div>
            <div class = "item">
            <h1>${products[3].name}<h1>
            <img width="250px" src ='${products[3].photo_url}'
            <h1>${products[3].price}<h1>
            <h1>${products[3].description}<h1>
            
            </div>
            <div class = "item">
            <h1>${products[4].name}<h1>
            <img width="250px" src ='${products[4].photo_url}'
            <h1>${products[4].price}<h1>
            <h1>${products[4].description}<h1>
            
            </div>
            <div class = "item">
            <h1>${products[5].name}<h1>
            <img width="250px" src ='${products[5].photo_url}'
            <h1>${products[5].price}<h1>
            <h1>${products[5].description}<h1>
            
            </div>
            

    
    `
}