const text = document.querySelector(".display");
const productList = document.getElementById("productList");
const inputField = document.querySelector("input");
const totalElement = document.getElementById("totalPrice");
const itensElement = document.getElementById("totalItens");

//objeto para guardar chave-valor de cada produto
const productData = {
  morango: { name: "Morango", price: 7.99 },
  banana: { name: "Banana", price: 2.97 },
  manga: { name: "Manga", price: 8.0 },
  maracuja: { name: "Maracujá", price: 3.45 },
  laranja: { name: "Laranja", price: 2.25 },
};

let products = [];

// Função para exibir os produtos na lista
const displayProducts = () => {
  productList.innerHTML = "";
  let total = 0;

  products.forEach((product) => {
    const productInfo = productData[product];

    if (productInfo) {
      const { name, price } = productInfo;
      const listItem = document.createElement("li");
      listItem.textContent = `${name} - R$${price.toFixed(2)}`;
      productList.appendChild(listItem);
      total += price;
    } else {
      console.error(`Produto '${product}' não encontrado.`);
    }
  });

  updateTotalPrice(total);
  updateTotalItems();
};

// Função para pesquisar e exibir informações sobre um produto
const search = () => {
  const input = getInputNormalized();
  const product = productData[input];

  if (product) {
    displayProductInfo(product, input);
  } else {
    displayProductNotFound();
  }
};

// Função para comprar um produto
const buyProduct = (product) => {
  products.push(product);
  displayProducts();
  saveProducts();
};

// Função para atualizar o preço total
const updateTotalPrice = (total) => {
  totalElement.textContent = `Total: R$${total.toFixed(2)}`;
};

// Função para salvar os produtos no armazenamento local
const saveProducts = () => {
  localStorage.setItem("products", JSON.stringify(products));
};

// Função para carregar os produtos salvos
const loadProducts = () => {
  let savedProducts = JSON.parse(localStorage.getItem("products")) || [];
  products = savedProducts;
  displayProducts();
};

// Função utilitária para normalizar a entrada do usuário
const getInputNormalized = () => {
  return inputField.value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

// Função para exibir informações do produto encontrado
const displayProductInfo = (product, input) => {
  text.innerHTML = `<p>${product.name} R$${product.price.toFixed(
    2
  )}</p> <button onclick="buyProduct('${input}')">Comprar Produto</button>`;
};

// Função para exibir mensagem de produto não encontrado
const displayProductNotFound = () => {
  text.innerHTML = `O produto não está disponível`;
};

// Função para atualizar o número total de itens no carrinho
const updateTotalItems = () => {
  itensElement.textContent = `itens: ${products.length}`;
};

loadProducts();
