fetch("./data/products.json")
    .then(response => response.json())
    .then(data => {
        renderProductDetails(data);
    })

fetch("./data/products.json")
    .then(response => response.json())
    .then(data => {
        renderProductDetails(data);
    })

function renderProductDetails(allProducts) {
    const selectedId = localStorage.getItem('selectedProductId');
    const product = allProducts.find(item => item.id == selectedId);

    if (product) {
        const title = document.getElementById('title')
        title.textContent = `${product.name}`

        const art = document.getElementById('article')
        art.textContent = `Артикул: ${product.id}`
        
        const img = document.getElementById('img-p')
        img.src = `./img/products/${product.image}`
        img.style.setProperty('width', '50%', 'important')
        img.style.setProperty('display', 'block', 'important')
        img.style.setProperty('margin', '0 auto', 'important')
        
        const gab = document.getElementById('gab')
        gab.textContent = `${product.characteristics.dimensions}`

        const material = document.getElementById('material')
        material.innerHTML = `<p>${product.characteristics.material}</p>`
        
        const description = document.getElementById('desc')
        description.textContent = `${product.description}`

        const price = document.getElementById('price')
        price.innerHTML = `<b>${product.price}₸</b>`

        const gar = document.getElementById('gar')
        gar.textContent = `${product.characteristics.garant}`


        const btn = document.getElementById('toCard');
        btn.textContent = 'В корзину';
        btn.onclick = () => addToCart(product.id); 


        const reviews = document.getElementById('review')
        reviews.innerHTML = ''
        const d = product.reviews
        Object.values(d).forEach(element => {
            const rev = document.createElement('li')
            rev.className = 'list-group-item'
            rev.textContent = `${element}`
            reviews.append(rev)
        });

    } else {
        console.error("Товар не найден");
    }
}


function addToCart(id){
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'))
    if (!currentUser.card.includes(id)) {
        currentUser.card.push(id)
        console.log('add')
    } else {
        console.log('already added')
    }
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser))
    renderProductDetails()
}