function renderCart() {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));

    if (!currentUser) return;

    fetch("./data/products.json")
        .then(res => res.json())
        .then(products => {
            const userCard = currentUser.card || [];

            const userProducts = products.filter(product =>
                userCard.includes(product.id)
            );

            uploadCardProducts(userProducts);
        });
}
function uploadCardProducts(items) {
    const container = document.getElementById('products-list-basket');
    container.innerHTML = '';
    console.log('TTTT')
    if (items.length === 0) {
        container.textContent = 'Корзина пуста';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('div')
        card.className = 'product-card'
        card.style.cursor = 'pointer'
        card.style.display = 'flex'
        card.style.alignItems = 'center'
        card.style.flexDirection = 'column'
        card.style.height = '100%'



        const img = document.createElement('img')
        img.className = 'card-img'
        img.style.width = '100%'
        img.style.borderRadius = '10px'
        img.src = `./img/products/${item.image}`
        img.alt = item.name

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
        btn.textContent = 'Удалить'
        btn.style.marginTop = 'auto'
        btn.onclick = () => removeFromCart(item.id)

        card.onclick = function() {
            localStorage.setItem('selectedProductId', item.id)
            window.location.href = 'product.html'
        }

        card.append(img, title, price, btn);
        container.append(card);
    });
}
function removeFromCart(id) {
    let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    currentUser.card = currentUser.card.filter(itemId => itemId != id);
    sessionStorage.setItem('currentUser', JSON.stringify(currentUser));

    console.log('remove')
    renderCart()
}


renderCart()