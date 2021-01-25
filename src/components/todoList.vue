<!--
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-11-21 12:23:13
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-11-21 12:47:21
-->
<template>
  <div style="width: 300px; margin: 0 auto; text-align: left;">
    <button @click="showOrHideTitle">显示/隐藏标题</button>
    <p 
      v-if="state"
      style="height: 30px; font-size: 30px; border-bottom: 1px solid #ccc; padding: 5px;">
      todoList
    </p>

    <p>
      <input v-model="inputValue" /> <button @click="add">确定</button>
    </p>
    <ul>
      <li v-for="(item, index) in list" :key="item+index">
        {{index+1}}{{item}} <button @click="delOne(item)">-</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        inputValue: 'asdfds',
        list: [],
        state: true
      }
    },
    methods:{
      add(){
        this.list.push(this.inputValue);
        this.inputValue = '';
      },
      delOne(item){
        for(let i=0;this.list.length;i++){
          if(item == this.list[i]){
            this.list.splice(i,1);
            break;
          }
        }
      },
      showOrHideTitle(){
        this.state = !this.state;
      }

    }
  }
</script>

