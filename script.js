//this anonymous function avoids creating many 'document.querySelector' to select the html elements
const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)
//mapping all the pizzas to show in the html
pizzaJson.map((item, index)=>{
    let pizzaItem = document.querySelector('.models .pizza-item').cloneNode(true)
    
    //fulfill the informations of pizzaItem
    pizzaItem.querySelector('.pizza-item--name').innerHTML = `${item.name}`
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = `${item.description}`
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--img img').src =`${item.img}`
    
    pizzaItem.querySelector('a').addEventListener('click', (e) =>{
        e.preventDefault()
        let pizzaInfo = document.querySelector('.pizzaWindowArea').cloneNode(true)
        c('.pizzaWindowArea').replaceWith(pizzaInfo)
        document.querySelector('.pizzaWindowArea').style.display = 'flex'
        pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML =`${item.description}`
        pizzaInfo.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
        pizzaInfo.querySelector('.pizzaBig img').src =`${item.img}`
        pizzaInfo.querySelector('h1').innerHTML = `${item.name}`
    })
    
    c('.pizza-area').append(pizzaItem)
    


})




