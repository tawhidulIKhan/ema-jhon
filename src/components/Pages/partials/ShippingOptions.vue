<template>
        <div>
            <input type="radio" :value="option.price" :checked="option.price == product.shipping" :readonly="true"/>
            <span class="a-radio-label">
                    <span class="delivery-option"><strong>{{option.days}} business days</strong></span>
                    <br/>
                        <span class="secondary-text">${{option.price}} - {{option.type}} Shipping</span>
                    </span>
        </div>
</template>

<script>
    export default {
        props:{
          option:{type:Object},
          product:{type:Object}
        },
        name:'ShippingOptions',
        mounted() {
        }

    }
</script>
<style scoped>

    .delivery-option{
        color: #090;
        font-weight: 700;
    }

    .secondary-text{
        color: #888;
        font-weight: 400;
        font-size: 13px;
        margin-left: 10px;
    }
</style>
