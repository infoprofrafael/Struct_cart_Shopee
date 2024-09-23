// Casos de uso dos itens

//-> criar item com subtotal ceto
async function createItem(name, price,quantity,subtotal) {
    return {
        name,
        price,
        quantity,
        subtotal:()=> price * quantity
        //subtotal: function subt() { price * quantity}
    };
}

export default createItem;








