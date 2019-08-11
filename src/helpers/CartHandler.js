import fakeData from './../fakeData/index'

class CartHandler {
    add_to_cart(name, data) {
        let cart = JSON.parse(localStorage.getItem(name));

        let key = data.key;
        if (cart && cart.length > 0) {
            let foundProduct = cart.filter((el) => {
                if (el.key == key) {
                    return el;
                }
            });

            if (foundProduct.length > 0) {
                cart = cart.map((el) => {

                    if (el.key == key) {
                        console.log(el.qty, foundProduct[0].key);
                        el.qty++;
                    }
                    return el;
                })

            } else {
                cart.push({
                    'key': data.key,
                    'name': data.name,
                    'price': data.price,
                    'qty': 1
                });

            }
            console.log(cart);

            localStorage.setItem(name, JSON.stringify(cart))

        } else {
            let cart = [];
            cart.push({
                'key': data.key,
                'name': data.name,
                'price': data.price,
                'qty': 1
            });

            localStorage.setItem(name, JSON.stringify(cart))

        }
    }

    countItem(name = 'emaJohn/carts/user-234') {
        let cart = JSON.parse(localStorage.getItem(name));
        let total = 0;
        if (cart && cart.length > 0) {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].qty;
            }
        }
        console.log(total, 'totla');
        return total;
    }

    totalBeforeTax(){

        let beforeTax = 0;
        let cartItems = this.getCartItems();
        let that = this;
        cartItems.forEach((el) => {
            let qty = that.getQty(el.key);
            beforeTax += Math.round((el.price + el.shipping) * qty);
        })
        return beforeTax;
    }

    getTax(){

        let tax = 0;
        let cartItems = this.getCartItems();
        let that = this;
        cartItems.forEach((el) => {
            let qty = that.getQty(el.key);
            tax += Math.round(((el.price + el.shipping) * qty) * 0.1);
        })
        return tax;
    }

    getQty(key){
        let cart = this.getCart();
        let qty=0;
        cart.forEach((el) => {
            if(el.key == key){
                qty = el.qty;
            }
        });

        return qty;
    }

    getTotal(){

        let total = 0;
        let cartItems = this.getCartItems();
        let that = this;
        cartItems.forEach((el) => {
            let qty = that.getQty(el.key);
            total += Math.round((el.price + el.shipping) * qty);
        })
        return total + this.getTax();
    }

    getShippingPrice(){

        let shippingPrice = 0;
        let cartItems = this.getCartItems();
        let that = this;
        cartItems.forEach((el) => {
            let qty = that.getQty(el.key);
            shippingPrice += Math.round(el.shipping*qty);
        })
        return shippingPrice;
    }

    getSubtotal(){

        let subTotal = 0;
        let cartItems = this.getCartItems();
        let that = this;
        cartItems.forEach((el) => {
            let qty = that.getQty(el.key);
            subTotal += Math.round(el.price*qty);
        })
        return subTotal;
    }
    getCart(){
        let cart = JSON.parse(localStorage.getItem('emaJohn/carts/user-234'))
        return cart;
    }
    setCart(cart){
        localStorage.setItem('emaJohn/carts/user-234', JSON.stringify(cart))
    }
    getCartItems(){

        let cartItems = [];
        let cart = this.getCart();
        let cartKeys = [];
        let cartQty = [];
        let that = this;
        cart = cart.forEach((el) => {
            cartKeys.push(el.key);
            cartQty.push(el.qty);
        });

        fakeData.forEach((el) => {
            if(cartKeys.includes(el.key)){
                cartItems.push(el)
            }
        })
        return cartItems;
    }

    deleteItem(key){
        let cart = this.getCart();
        cart = cart.filter((el) =>{
            if(el.key !== key){
                return el;
            }
        })
        this.setCart(cart);
        return true;

    }

}

export default new CartHandler
