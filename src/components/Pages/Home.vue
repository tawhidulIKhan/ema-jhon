<template>
        <div>
            <Shop></Shop>
        </div>
</template>

<script>
    import Header from '../Partials/Header'
    import Shop from './Shop'
    export default {
        name: 'Home',
        components:{
            Header,
            Shop
        },
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>
