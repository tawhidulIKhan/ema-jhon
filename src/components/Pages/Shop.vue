<template>
    <div>
        <div>
            <div class="search-container">
                <input type="text" class="search-input" @keyup="search_handler"
                       placeholder="type here to search"/>
                <MenuCart></MenuCart>

            </div>
            <div class="shop-container">
                <div class="items-container">
                    <ShopItem :key="index" :item="item" v-for="(item, index) in items"></ShopItem>
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
    import fakeData from './../../fakeData/index'
    import MenuCart from "../Partials/MenuCart"
    import OrderSummary from "./partials/OrderSummary";
    export default {
        name: 'Shop',
        props: {
            msg: String
        },
        data(){
            return {
                items: fakeData.slice(0,10)
            }
        },
        components:{
            OrderSummary,
            MenuCart,
            ShopItem
        },
        mounted() {
        },
        methods:{
            search_handler(e){
                let filterTxt = e.target.value.toLowerCase()
                let matched = fakeData.filter( (el) => {
                   return el.category.toLowerCase().includes(filterTxt) || el.name.toLowerCase().includes(filterTxt)
                })
                this.items = matched.slice(0,10)
            }
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
