//this anonymous function avoids creating many 'document.querySelector' to select the html elements
const c = (el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

let modalQt = 1


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
        c('.pizzaWindowArea').style.opacity = 0
        c('.pizzaWindowArea').style.display = 'flex'
        setTimeout(() => {
            c('.pizzaWindowArea').style.opacity = 1
        }, 200)
        modalQt = 1
        let pizzaInfo = document.querySelector('.pizzaWindowArea').cloneNode(true)
        c('.pizzaWindowArea').replaceWith(pizzaInfo)
        pizzaInfo.querySelector('.pizzaInfo--desc').innerHTML =`${item.description}`
        pizzaInfo.querySelector('.pizzaInfo--actualPrice').innerHTML = `R$ ${item.price.toFixed(2)}`
        pizzaInfo.querySelector('.pizzaBig img').src =`${item.img}`
        pizzaInfo.querySelector('h1').innerHTML = `${item.name}`
        c('.pizzaInfo--size.selected').classList.remove("selected")
        c('.pizzaInfo--qt').innerHTML = modalQt
        cs('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex === 2){
                size.classList.add("selected")
            }
            size.querySelector('span').innerHTML = item.sizes[sizeIndex]
        })
    })
    c('.pizza-area').append(pizzaItem)
})

//MODAL FUNCTIONS
function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0
    setTimeout(() => {
        c('.pizzaWindowArea').style.display = 'none'
    }, 500)
}

cs('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item) => {
    item.addEventListener('click', closeModal)
})

c('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    console.log("clicou")
    if(modalQt > 1){
        modalQt--
        c('.pizzaInfo--qt').innerHTML = modalQt
    }
})

c('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    console.log("clicou")
    modalQt++
    c('.pizzaInfo--qt').innerHTML = modalQt
})