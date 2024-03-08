const text = document.querySelector("p");
console.log(text);

const search = () => {
  const input = document.querySelector("input").value;
  const lowerCase = input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  switch (lowerCase) {
    case "1":
    case "morango":
      text.innerText = `${lowerCase} R$7,99`;
      break;
    case "2":
    case "banana":
      text.innerText = `${lowerCase} R$2,97`;
      break;
    case "3":
    case "manga":
      text.innerText = `${lowerCase} R$8,00`;
      break;
    case "4":
    case "maracuja":
      text.innerText = `${lowerCase} R$3,45`;
      break;
    case "5":
    case "laranja":
      text.innerText = `${lowerCase} R$2,25`;
      break;
    default:
      console.log("o produto nao existe");
  }
};
