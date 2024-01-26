//funcion para obtener el array de productos
const getProducts = async() => {

    const apiUrl = "http://localhost:8080/products";
    const options = { method:"GET" };

    const request = await fetch( apiUrl ,options );
    const response = await request.json();

    const allProducts = response.data

    return allProducts;

};

//mostrar los productos
const renderProducts =  async() => {

    const allProducts = await getProducts();
    const container = document.getElementById("container");

    allProducts.map((product)=>{

        const button = document.createElement("button");
        button.innerHTML = `Eliminar: ${product.name}`;

        button.setAttribute("onclick",`deleteProduct("${product._id}")`);

        container.appendChild(button);
    });

};

const deleteProduct = async(_id) => {

    await fetch(`http://localhost:8080/products/trash/${_id}`,{ method:"DELETE" });
    location.reload();

};

renderProducts();

