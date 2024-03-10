const text = document.querySelector(".display");
console.log(text);

const search = () => {
  const input = document.querySelector("input").value;
  const inputLowerCase = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  switch (inputLowerCase) {
    case "1":
    case "morango":
      text.innerHTML = `<p>${inputLowerCase} R$7,99</p> <button onclick="buyProduct('${inputLowerCase}')">Comprar Produto</button>`;
      break;
    case "2":
    case "banana":
      text.innerHTML = `<p>${inputLowerCase} R$2,97</p> <button onclick="buyProduct('${inputLowerCase}')">Comprar Produto</button>`;
      break;
    case "3":
    case "manga":
      text.innerHTML = `<p>${inputLowerCase} R$8,00</p> <button onclick="buyProduct('${inputLowerCase}')">Comprar Produto</button>`;
      break;
    case "4":
    case "maracuja":
      text.innerHTML = `<p>${inputLowerCase} R$3,45</p> <button onclick="buyProduct('${inputLowerCase}')">Comprar Produto</button>`;
      break;
    case "5":
    case "laranja":
      text.innerHTML = `<p>${inputLowerCase} R$2,25</p> <button onclick="buyProduct('${inputLowerCase}')">Comprar Produto</button>`;
      break;
    default:
      console.log("o produto nao existe");
  }
};

let products = [];
const buyProduct = (product) => {
  products.push(product);
  console.log(products);
  displayProducts();
};

const displayProducts = () => {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Limpar a lista antes de atualizar

  products.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = product;
    productList.appendChild(listItem);
  });
};
