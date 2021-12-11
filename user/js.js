let user = document.getElementById('grid')
let xhr = new XMLHttpRequest
let url = 'https://my-json-server.typicode.com/romalite/GunShop/'
xhr.open("GET", url+ "/users/")

xhr.responseType = 'json'
xhr.send()

xhr.onload = function () {
    let users = xhr.response
    console.log(users)
    user.innerHTML = `
    <div class = "item">
             <div>

            <h1>${users[0].name}<h1>
            <img width="250px" src ='${users[0].photo_url}'
            <h1>${users[0].sirname}<h1>
            <h1>${users[0].balance}<h1>

            </div>

            <div id="Yuriy" >
            <h1>${users[1].name}<h1>
            <img width="250px" src ='${users[1].photo_url}'
            <h1>${users[1].sirname}<h1>
            <h1>${users[1].balance}<h1> 
            
            </div>
            <div id = "Cat">
            <h1>${users[2].name}<h1>
            <img width="250px" src ='${users[2].photo_url}'
            <h1>${users[2].sirname}<h1>
            <h1>${users[2].balance}<h1>
            
            </div>
            
            </div>
    `
}