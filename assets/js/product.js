const url = new URL(document.location);
const searchParams = url.searchParams;
const id = searchParams.get('id');

window.addEventListener("load", (event) => {
    productItem(id);
});

async function productItem(id){
    const url = `https://dummyjson.com/products/${id}`;
    const response = await axios.get(url);
    const item = await response.data;
    console.log(item);
    const container = document.querySelector('#productsItem');
    container.innerHTML = '';

    const div = document.createElement('div');
    div.classList.add('col');
    div.classList.add('m-2');
    div.innerHTML = `
        <div class="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 rounded text-center overflow-hidden">
            <div class="my-3 p-3">
                <h2 class="display-5">${item.title}</h2>
                <img class="img-fluid" src="${item.thumbnail}" alt="Responsive image"/>
                <h2 class="display-5">${item.brand}</h2>
                <p class="lead">${item.warrantyInformation}</p>
                <p class="lead">Note de ${item.rating}/5</p>
                <p>${item.description}</p>
                <p class="lead">Notre prix: ${item.price} €</p>
                <span class="badge text-bg-success m-2">Vous economisez ${item.discountPercentage} %</span><br />
                <a href="#" class="btn btn-primary m-2">Ajouter au panier</a>
            </div>
            <div class="bg-dark box-shadow rounded mx-auto text-white">
                ${item.images.map(image =>
                    `<img class="img-fluid" src="${image}" alt="Responsive image">`
                ).join(' ')}
            </div>
        </div>    
    `;
    container.appendChild(div);

}