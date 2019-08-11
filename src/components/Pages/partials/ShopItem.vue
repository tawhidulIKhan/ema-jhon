<template>
    <div>
        <div class="item">
            <div>
                <img :src="item.img" alt=""/>
            </div>
            <div>
                <h4 class="item-header">{{ item.name }}</h4>
                <p><small>by: {{ item.seller }}</small></p>
                <div class="item-description">
                    <div>
                        <p>${{ item.price }}</p>
                        <p><small>only {{ item.stock }} left in stock - order soon</small></p>
                        <button @click="addToCart(item)">
                        <i class="fa fa-shopping-cart"></i>
                        <span>add to cart</span>
                        </button>
                    </div>
                    <div>
                        <div class="ratings">
                            <i :key="i" v-for="(star,i) in item.star" class="fa fa-star"></i>
                            <i :key="i" v-for="(star,i) in (5-item.star)" class="fa fa-star-o"></i>

                        </div>
                        <h4>Features</h4>
                        <ul>
                            <li :key="fkey" v-for="(feature, fkey) in item.features">
                                {{ feature.description }}: <strong>{{ feature.value }}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Store from '../../../helpers/CartHandler'
    import EventBus from '../../../event-bus'
    export default {
        name: 'ShopItem',
        props: {
            item: {type:Object, required:true}
        },
        data(){
          return {
          }
        },
        mounted() {
        },
        methods:{
            addToCart(item){
                let product = {
                    key:item.key,
                    name:item.name,
                    price:item.price,
                    qty:1
                }
              Store.add_to_cart('emaJohn/carts/user-234', product)

                EventBus.$emit('cart_updated', 'emaJohn/carts/user-234')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .item{
        display: flex;
        text-align: left;
        padding-bottom: 5px;
        border-bottom: 1px solid lightgray;
    }
    .item img{
        margin-right: 10px;
    }
    .item-header{
        text-align: left;
    }

    .item-header{
        color:blue;
        font-weight: 400;
    }

    .item-description{
        display: flex;
    }

    .item-description > div{
        width: 50%;
    }

    .item-description li{
        font-size: 12px;
        color: gray;
    }

    .ratings{
        color:#ffbd00;
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
