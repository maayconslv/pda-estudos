const user = {
  email: "maycon@email.com",
  age: 22,
  name: {
    first_name: "Maycon",
    surname: "Silva",
  },
  address: {
    street: "Rua x",
    number: 23,
    city: "Recife",
    postal_code: "12345-678",
  },
  message: () => console.log("Oi Maycon"),
}

console.log('SCRIPTS PARA APRESENTAÇÃO DO USUÁRIO');

console.log(user.name)
console.log(user.name.first_name)
user.message()

console.log('-----------------');

function createProduct(name, price) {
  const product = {}

  product.name = name,
  this.price = price,
  product.details = () => console.log(`Produto: ${product.name} | Preço: ${product.price}`);

  return product;
}

const product1 = createProduct('Camisa', 50);
const product2 = createProduct('Calça', 100);

console.log('SCRIPTS PARA FUNÇÃO CONSTRUTORA')
product1.details()
console.log(product1.name)
product2.details()
console.log(product2.name)


// DATAS NO JAVASCRIPT /

const date = new Date("2025-02-25:14:00:00");
console.log(date)

console.log('data formatada: ', date.toLocaleDateString("pt-BR", {
  dateStyle: 'full'
}))

console.log('hora formatada: ', date.toLocaleTimeString('pt-BR', {
  timeStyle: 'full',
  hour12: true,
}))

console.log(date.getFullYear())

// PROTOTYPE NO JAVASCRIPT
console.log('------------ PROTOTYPE JAVASCRIPT -----------');
const address = {
  city: 'Recife',
  country: 'Brasil'
}
console.log(address)
