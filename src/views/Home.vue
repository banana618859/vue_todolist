<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-11-15 20:07:25
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-11-21 12:25:13
-->

<template>
  <div class="home">
    <todoList></todoList>
    
  </div>
</template>


<script>
import todoList from '@/components/todoList.vue';
import aaa from '@/components/aaa.vue';

export default {
  name: 'Home',
  // 组件参数传递对象
  props:{},
  // 组件的注册
  components: {
    todoList,
    aaa
  },
  // 数据声明区域
  data(){
    return{
      count: 3,
      showP: true
    }
  },
  // vue的8个生命周期函数
  beforeCreate(){
    console.log('beforeCreate')
  },
  created(){
    console.log('created')
  },
  beforeMount(){
    console.log('beforeMount')
  },
  mounted(){
    console.log('mounted')
  },
  beforeUpdate(){
    console.log('beforeUpdate')
  },
  updated(){
    console.log('updated')
  },
  beforeDestroy(){
    console.log('beforeDestroy')
  },
  destroyed(){
    console.log('destroyed')
  },
  // 所有的方法区域
  methods:{
    hideRow(){
      this.showP = false;
    },
    showDiv(){

    }
  },
  // 监听页面数据的变化
  watch:{},
  // 监听页面数据的变化
  computed:{}
};
</script>

<style>
.main{
  color: red;
}
</style>
