<template>
    <div>
        <div class="cart-item">
            <h4>{{ product.name }}</h4>
            <div class="cart-item-container">
                <div class="cart-item-description">
                    <p class="price">${{product.price}}</p>
                    <p><small>sold by:{{product.seller}}</small></p>
                    <p>Quantity:{{getQty(product.key)}}</p>
                    <button @click="removeItem(product.key)">Remove</button>
                </div>
                <div class="shipping-options">
                    <h5>Shipping options</h5>
                    <ShippingOptions :key="key" :product="product" :option="option" v-for="(option,key) in shipping_options"></ShippingOptions>
                    <!--{this.shippingOptions.map(option => <ShippingOption key={option.type} option={option} shipping={item.shipping} /> )}-->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import shippingCosts from './../../../fakeData/shippingCosts'
    import CartHandler from './../../../helpers/CartHandler'
    import ShippingOptions from './ShippingOptions'
    import EventBus from './../../../event-bus'
    export default {
        name: 'CartItem',
        props: {
            product: {type:Object,required:true}
        },
        data(){
            return {
                shipping_options: shippingCosts
            }
        },
        components:{
            ShippingOptions
        },
        methods:{
            getQty(key){
                return CartHandler.getQty(key)
            },
            removeItem(key){
                if(CartHandler.deleteItem(key)){
                    EventBus.$emit('cart_updated');
                }

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cart-item{
        text-align: left;
        padding-bottom: 2px;
        border-bottom: 1px solid lightgray;
        margin-right: 10px;
    }
    .cart-item h4{
        font-weight: 400;
        color: blue;
    }

    .cart-item-container{
        display: flex;
    }

    .cart-item-description{
        width: 50%;
    }

    .cart-item .price{
        color: #b12704;
        font-weight: 700;
        font-size: 13px;
        line-height: 19px;
    }
    button {
        background-color: #f0c14b;
        border-color: #a88734 #9c7e31 #846a29;
        color: #111;
        width: 200px;
        height: 26px;
        border-style: solid;
        border-width: 1px;
        cursor: pointer;
        border-radius: 3px;
        vertical-align: middle;
    }
</style>
