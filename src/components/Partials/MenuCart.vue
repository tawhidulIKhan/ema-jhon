<template>
    <router-link to="/review">
            <span class="cart-count">{{ total }}</span>
    </router-link>
</template>

<script>
    import EventBus from './../../event-bus'
    import Localsore from '../../helpers/CartHandler'
    export default {
        name: 'MenuCart',
        props: {
            msg: String
        },
        data(){
          return {
              total:0
          }
        },
        mounted() {
            let that = this
            this.total = Localsore.countItem()
            EventBus.$on('cart_updated', name => {
               that.total = Localsore.countItem(name)
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cart-count {
        color: #f08804;
        font-size: 18px;
        font-weight: 700;
        margin-left: 10px;
    }

    .cart-count a{
        text-decoration: none;
    }

    .cart-count a:visited{
        color:black;
    }

    .cart-count:before {
        font-family: FontAwesome;
        margin-top:-30px;
        margin-right:-5px;
        color:white;
        font-size: 24px;
        padding-right:10px;
        content: "\f07a";
    }
</style>
