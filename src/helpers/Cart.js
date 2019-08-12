import fakeData from "../fakeData";

class Cart {
    getCartName(){
        return 'emaJohn/carts/user-234';
    }
    countItem() {
        let cart = this.getCart();
        let total = 0;
        if (cart && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].qty;
            }
        }
        return total;
    }

    totalBeforeTax() {

        let beforeTax = 0;
        let cartItems = this.getCartItems();
        let that = this;
        if (cartItems) {
            cartItems.forEach((el) => {
                let qty = that.getQty(el.key);
                beforeTax += Math.round((el.price + el.shipping) * qty);
            })
        }
        return beforeTax;
    }

    getTax() {

        let tax = 0;
        let cartItems = this.getCartItems();
        let that = this;
        if (cartItems) {
            cartItems.forEach((el) => {
                let qty = that.getQty(el.key);
                tax += Math.round(((el.price + el.shipping) * qty) * 0.1);
            })
        }
        return tax;
    }

    getQty(key) {
        let cart = this.getCart();
        let qty = 0;
        if (cart) {
            cart.forEach((el) => {
                if (el.key == key) {
                    qty = el.qty;
                }
            });
        }

        return qty;
    }

    getTotal() {

        let total = 0;
        let cartItems = this.getCartItems();
        let that = this;
        if (cartItems) {
            cartItems.forEach((el) => {
                let qty = that.getQty(el.key);
                total += Math.round((el.price + el.shipping) * qty);
            })
        }
        return total + this.getTax();
    }

    getShippingPrice() {

        let shippingPrice = 0;
        let cartItems = this.getCartItems();
        let that = this;
        if (cartItems) {

            cartItems.forEach((el) => {
                let qty = that.getQty(el.key);
                shippingPrice += Math.round(el.shipping * qty);
            })

        }
        return shippingPrice;
    }

    getSubtotal() {

        let subTotal = 0;
        let cartItems = this.getCartItems();
        let that = this;
        if(cartItems){
            cartItems.forEach((el) => {
                let qty = that.getQty(el.key);
                subTotal += Math.round(el.price * qty);
            })
        }
        return subTotal;
    }

    getCart() {
        let name = this.getCartName();
        let cart = JSON.parse(localStorage.getItem(name))
        return cart;
    }

    setCart(cart) {
        let name = this.getCartName();
        localStorage.setItem(name, JSON.stringify(cart))
    }

    getCartItems() {

        let cartItems = [];
        let cart = this.getCart();
        let cartKeys = [];
        let cartQty = [];
        if(cart){
            cart = cart.forEach((el) => {
                cartKeys.push(el.key);
                cartQty.push(el.qty);
            });
        }

        fakeData.forEach((el) => {
            if (cartKeys.includes(el.key)) {
                cartItems.push(el)
            }
        })
        return cartItems;
    }

    clearCart(){
        let name = this.getCartName();
        localStorage.removeItem(name);
    }

}

export default Cart;
