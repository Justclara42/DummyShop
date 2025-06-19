window.addEventListener("load", (event) => {
    fetchProducts();
});
async function fetchProducts() {
    try {
        const url = 'https://dummyjson.com/products/category/laptops';
        const response = await axios.get(url);
        const products = await response.data.products;
        getProducts(products);
    }catch(error){
        console.log(error);
    }

}

function getProducts(products){
    const container = document.querySelector('#productsList');
    container.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card m-2">
          <img src=${product.thumbnail} class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <span class="badge text-bg-light">${product.category}</span>
            <p class="card-text">${product.description}</p>
            <p class="card-text">Prix: ${product.price} $ Discount: ${product.discountPercentage} %</p>
            <div class="flex justify-content-center m-2">
${product.tags.map(tag =>
            ` <span class="badge text-bg-secondary">${tag}</span> `
        ).join('')}
            </div>
            <a href="product.html?id=${product.id}"  class="btn btn-primary">Voir le Produit</a>
          </div>
        </div>
        `;
        container.appendChild(div);

    })
}

