<template>
    <div>
        <img :src="success_img" alt="Order completed">
    </div>
</template>

<script>
    import Success from './../../assets/order-success.gif'
    import CartHandler from './../../helpers/CartHandler'
    export default {
        name: 'PlaceOrder',
        data(){
            return {
                success_img: Success
            }
        },
        mounted() {
            CartHandler.clearCart();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
