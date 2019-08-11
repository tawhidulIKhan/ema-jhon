<template>
    <div>
        <div>
            <div class="search-container">
                <input type="text" class="search-input" onKeyUp={this.handleSearch}
                       placeholder="type here to search"/>
                <MenuCart></MenuCart>

            </div>
            <div class="shop-container">
                <div class="items-container">
                    <CartItem :key="index" :product="product" v-for="(product,index) in products"></CartItem>
                </div>
                <div class="cart-container">
                    <OrderSummary>
                    </OrderSummary>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ShopItem from './partials/ShopItem'
    import Cart from './partials/Cart'
    import fakeData from './../../fakeData/index'
    import MenuCart from "../Partials/MenuCart"
    import OrderSummary from "./partials/OrderSummary";
    import CartItem from "./partials/CartItem";
    import CartHandler from './../../helpers/CartHandler'
    import EventBus from '../../event-bus'
    export default {
        name: 'Shop',
        props: {
            msg: String
        },
        data(){
            return {
                items: fakeData.slice(0,10),
                products: []
            }
        },
        components:{
            CartItem,
            OrderSummary,
            MenuCart,
            ShopItem,
            Cart
        },
        mounted() {
            this.products = CartHandler.getCartItems();
            EventBus.$on('cart_updated', () => {
                this.products = CartHandler.getCartItems();
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .shop-container{
        display: flex;
    }

    .items-container{
        width: 80%;
        margin-left: 200px;
        border-right: 1px solid lightgray;
        padding-right: 5px;
    }
    .cart-container{
        width: 20%;
    }

    .search-container input{
        width: 80%;
        line-height: 22px;
        font-size: 17px;
    }

    .search-container {
        background-color: #222;
        padding: 20px;
        color: white;
    }

</style>
