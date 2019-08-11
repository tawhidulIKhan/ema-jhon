<template>
    <div class="hello">
        <div class="header">
            <img :src="logo" alt="Logo"/>
            <ul>
                <li>
                    <a href="/shop">Shop</a>
                </li>
                <li>
                    <a href="/review">Order Review</a>
                </li>
                <li>
                    <a href="/manage">Manage Inventory</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Logo from './../../assets/logo.png';
    export default {
        name: 'Header',
        props: {
            msg: String
        },
        data(){
            return {
                logo:Logo
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header img{
        height: 80px;
    }

    .header ul{
        background-color: black;
        height: 40px;
        text-align: left;
        margin-bottom: 0px;
    }

    .header li{
        list-style: none;
        display: inline-block;
        margin-right: 15px;
        line-height: 30px;
        padding: 5px;
    }

    .header a{
        text-decoration: none;
        color: white;
    }

    .header li:hover{
        background-color: lightgray;
    }

    .header a:visited{
        color: white;
    }
</style>
