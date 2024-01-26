
//funcion para obtener el array de productos
const getProducts = async() => {

    const apiUrl = "http://localhost:8080/products";
    const options = { method:"GET" };

    const request = await fetch( apiUrl ,options );
    const response = await request.json();

    const allProducts = response.data

    return allProducts;

}

//funcion para mostrar los productos en el HTML
const renderProducts = async() => {

    const allProducts = await getProducts();
    const container = document.getElementById("container");

    allProducts.map((product)=>{

        const div = document.createElement("div");
        div.innerHTML = `${product.name} - $${product.price} - ${product.description}`
        container.appendChild(div);

    })
    
}

renderProducts();
