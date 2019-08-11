<template>
    <div>
        <div class="cart">
            <h3>Order Summary</h3>
            <p>Items ordered:{{ totalItem }}</p>
            <table>
                <tbody>
                <tr>
                    <td>Items:</td>
                    <td>${{ subTotal }}</td>
                </tr>
                <tr>
                    <td>Shipping & Handling:</td>
                    <td>${{ shipping }}</td>
                </tr>
                <tr>
                    <td>Total before tax:</td>
                    <td>${{ before_tax }}</td>
                </tr>
                <tr>
                    <td>Estimated Tax:</td>
                    <td>${{ tax }}</td>
                </tr>
                <tr class="total-row">
                    <td>Order Total:</td>
                    <td>${{ total }}</td>
                </tr>
                </tbody>
            </table>
            <router-link to="/review">
                <button>
                    <span>Review your order</span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Cart from '../../../helpers/CartHandler'
    import EventBus from '../../../event-bus'
    export default {
        name: 'OrderSummary',
        props: {
            msg: String
        },
        data(){
            return{
                subTotal:0,
                totalItem:0,
                price:0,
                shipping:0,
                before_tax:0,
                tax:0,
                total:0
            }
        },
        mounted() {
            this.getOrderSummery();
            EventBus.$on('cart_updated', () => {
                this.getOrderSummery();
            })
        },
        methods:{
            getOrderSummery(){
                this.totalItem = Cart.countItem()
                this.subTotal = Cart.getSubtotal()
                this.before_tax = Cart.totalBeforeTax()
                this.tax = Cart.getTax()
                this.total = Cart.getTotal()
                this.shipping = Cart.getShippingPrice()

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cart {
        margin-left: 5px;
    }
    .cart table{
        font-size: 12px;
        text-align: left;
    }
    table td:last-child{
        text-align: right;
    }
    .total-row{
        color: #b12704;
        font-size: 17px;
        font-weight: 700;
        line-height: 22px;
        border-top: 1px solid gray;
        margin-top: 5px;
    }
    button{
        background-color:#f0c14b;
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
