// ==> Projeto atual carrinho da Shopee DIO
import * as cartService from "./services/cart.js"
import createItem from "./services/item.js";
//Carrinho
const myCart = [];
const myWhishList = [];

console.log("Welcome to the yor Shopee Cart!")

const item1 = await createItem("hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("hotwheels Lamborghini", 39.99, 3);
//-> Usamos o await acima para podermos utilizar a função subtotal do item.js só depois de ser calculado

//Adicionando os produtos no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

// await cartService.removeItem(myCart,item2);
// await cartService.removeItem(myCart,item2);
// await cartService.removeItem(myCart,item2);

// --> Exibindo o carrinho
await cartService.displayCart(myCart)

// --> Excluindo um produto do carrinho
//await cartService.deleteItem(myCart, item1.name)
//await cartService.deleteItem(myCart, item2.name)

console.log("\nShopee Cart TOTAL IS!");
await cartService.calculateTotal(myCart);




