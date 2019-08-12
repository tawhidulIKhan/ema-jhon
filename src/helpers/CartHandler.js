import Cart from './Cart';

class CartHandler extends Cart{

    getCartName(){
        return 'emaJohn/carts/user-234';
    }

    add_to_cart(data) {
        let cart = this.getCart();

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

            this.setCart(cart)

        } else {
            let cart = [];
            cart.push({
                'key': data.key,
                'name': data.name,
                'price': data.price,
                'qty': 1
            });

            this.setCart(cart)
        }
    }

    deleteItem(key) {
        let cart = this.getCart();
        cart = cart.filter((el) => {
            if (el.key !== key) {
                return el;
            }
        })
        this.setCart(cart);
        return true;

    }

}

export default new CartHandler
