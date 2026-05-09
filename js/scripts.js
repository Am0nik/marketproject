fetch("./data/products.json")
    .then(response => response.json())
    .then(data => {
        uploadProducts(data)
    })
function uploadProducts(productsData) {
    const container = document.getElementById('products-list')
    container.innerHTML = ''

    productsData.forEach(item => {
        const card = document.createElement('div')
        card.className = 'product-card'
        card.style.cursor = 'pointer'
        card.style.display = 'flex'
        card.style.alignItems = 'center'
        card.style.flexDirection = 'column'
        card.style.height = '100%'

        const image = document.createElement('img')
        image.className = 'card-img'
        image.style.width = '100%'
        image.style.borderRadius = '10px'
        image.src = `./img/products/${item.image}`
        image.alt = item.name

        const title = document.createElement('p')
        title.className = 'title'
        title.textContent = item.name
        title.style.fontSize = '1.2em'
        /*title.style.borderBottom = 'solid 1px #000'*/

        const price = document.createElement('p')
        price.className = 'price'
        price.style.fontWeight = '600'
        price.style.fontSize ='1.5em'
        price.textContent = `${item.price}  ₸`

        const btn = document.createElement('button')
        btn.textContent = 'Купить'
        btn.style.marginTop = 'auto'
        
        card.onclick = function() {
            localStorage.setItem('selectedProductId', item.id);
            window.location.href = 'product.html';
        };

        card.append(image, title, price, btn)
        container.append(card)
    })
}

document.getElementById('profileLink').addEventListener('click', function(event) {
    event.preventDefault()
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (isLoggedIn) {
        window.location.href = 'profile.html'
    } else {
        window.location.href = 'login.html'
    }
})


