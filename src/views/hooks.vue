<!--
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-12 18:00:09
 * @LastEditTime: 2023-06-29 16:06:01
 * @Description: Edit By LiaoJunfeng(Department of Development)
-->
<template>
    <div class="hello">
        <div>姓名：{{fullname}}</div>
        <div>年龄：{{person.age}}</div>
        <div>朋友：{{person.friend.name}}-{{person.friend.age}}</div>
        <div v-for="(item, index) in person.hobbies" :key="index">爱好列表
        <div>{{item}}</div>
        </div>
        <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script setup lang="ts">
    import { updateData } from '../hooks/updateData';//import worked
    const { fullname, person, updateInfo } = updateData();
</script>

<style scoped>
    
</style>