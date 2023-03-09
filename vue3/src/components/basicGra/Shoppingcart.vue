<template>
  <table>
    <thead>
        <td>商品编号</td>
        <td>商品图片</td>
        <td>商品名称</td>
        <td>商品单价</td>
        <td>商品数量</td>
        <td>总价</td>
        <td>操作</td>
    </thead>
    <tbody>
        <template v-for="item in product">
          <tr v-if="item.num>0" :key="item.id">
            <td>{{item.id}}</td>
            <td v-if="item.pic"><img :src="require(`../../assets/`+item.pic)" alt=""></td>
            <td v-else><img src="../../assets/logo.png" alt=""></td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.num}}</td>
            <td>{{item.price*item.num}}</td>
            <td><button v-on:click="item.num--">-</button><button v-on:click="item.num++">+</button><button v-on:click="item.num=0;">删除</button></td>
        </tr>
        </template>
       <tr>
        <td>{{total}}</td>
       </tr>
        
    </tbody>
  </table>
</template>

<script>
export default {
    data() {
        return {
            product:
            [{id:`01`,name:`精品牛奶`,price:10,num:1,pic:`logo.png`},
            {id:`02`,name:`新鲜鸡蛋`,price:15,num:1},
            {id:`03`,name:`特价猪肉`,price:30,num:1,pic:`logo.png`},
            ]
        }
    },
    computed:{
        
        total(){
           var newarr= this.product.map(element => {
              return element.price*element.num;
            });
           var num=0;
           var newnum= newarr.forEach(item=>{
                num+=item;
            })
            return num
        }
    }

}
</script>

<style>
table{
    width: 100%;
    /* border: 1px solid gray; */
}
thead{
     width: 100%;
    border: 1px solid gray;
    background-color: aqua;
}
tbody{
    width: 100%;
    border: 1px solid gray;
}
img{
    width: 50px;
}
</style>