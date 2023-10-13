//STORE

const populateStoreItemList = () => {state.items.forEach(item => {

    const storeItem = document.createElement('li')
    storeItemList.append(storeItem)

    const storeItemImage = document.createElement('img')
    storeItemImage.setAttribute('src', `./assets/icons/${item.id}.svg`)
    storeItemImage.setAttribute('alt', `item.name`)
    storeItem.append(storeItemImage)

    const addToCart = document.createElement('button')
    addToCart.innerText = 'Add to cart'
    storeItem.append(addToCart)
    addToCart.addEventListener('click', event => {

        const itemsInCart = cartItemList.querySelectorAll('li')
        itemsInCart.forEach(item => item.remove())
        state.cart.push(item)
        populateCartItemList()
    }
    )
    

})
    
}

let cartItem
// CART 
const populateCartItemList = () => { state.cart.forEach(item => {

    cartItem = document.createElement('li')
    cartItemList.append(cartItem)

    const cartItemImage = document.createElement('img')
    cartItemImage.setAttribute('src', `./assets/icons/${item.id}.svg`)
    cartItem.append(cartItemImage)

    const cartItemName = document.createElement('p')
    cartItem.append(cartItemName)
    cartItemName.innerText = item.name

    addQuantityCounter()
})

}