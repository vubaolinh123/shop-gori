let cart = [];
if (localStorage.getItem('cart')) {
    cart = JSON.parse(localStorage.getItem('cart'))
}

export const addToCart = (newProduct) => {
    console.log(newProduct);
    const existProduct = cart.find(item => item._id === newProduct._id);
    console.log(existProduct);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export const decInQty = (id, soluong) => {
    const currentProduct = cart.find(item => item.id == id);

    currentProduct.quantity = soluong;

    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có muốn xóa không?");
        if (confirm) {
            cart = cart.filter(item => item.id != id)
        } else {
            currentProduct.quantity = 1;
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
export const removeItemInCart = (id) => {
    const confirm = window.confirm("Bạn có muốn xóa không?");
    if (confirm) {
        cart = cart.filter(item => item.id != id)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}
