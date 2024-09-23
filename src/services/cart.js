// Ações que ele pode fazer: Adicionar, Excluir(deletar),acrescentar quantidade, Calcular o total
import createItem from "./item.js";


async function addItem(userCart, item) {
    //-> Adicionando elemento no vetor (.push)
    userCart.push(item)
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item)=> total + item.subtotal(),0);
    console.log(`\n📦 Total --> R$ ${result}`)
    
}

async function deleteItem(userCart,name) {
    const index_prod = userCart.findIndex((item_cart)=>item_cart.name === name);
    if(index_prod !== -1){
        userCart.splice(index_prod,1);
        // --> Caso não encontre retorna (-1)
    }
    
}

async function removeItem(userCart,item) {
    // 1.--> Transforma o indice visual do usuário para o Back end
    const indexFound = userCart.findIndex((p)=>p.name===item.name);
    console.log(`Item encontrado: ${indexFound}`);

    // 2.--> Caso não encontre o item
    if(indexFound == -1){
        console.log("Item não encontrado!")
        return;
    }

    // 3.--> Item > 1 subrait um item 
    if(userCart[indexFound].quantity > 1){
        let quantidade = userCart[indexFound].quantity -= 1;
        //createItem.subt(item.price,quantidade);
        
        return;
    };

    // 4.--> se item ==1 temos que deletar o item
    if (userCart[indexFound].quantity==1) {
        userCart.splice(indexFound,1)
        return;
        
    } 

    
    // --> Verificar que é maior do que zero e se é menor do que o tamanho do carrinho
    

    
}

async function displayCart(userCart) {
    console.log("\nShopee cart  list:")
    console.log("Produto - Preço  - Quant. - Subtotal")
    userCart.forEach((item_cart,index_prod)=>{
        console.log(`${index_prod +1}. ${item_cart.name} - R$ ${item_cart.price} x ${item_cart.quantity} | Subtotal => R$ ${item_cart.subtotal()}`);

    });
    
};

export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
};



