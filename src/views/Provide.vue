<!--
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-13 17:05:12
 * @LastEditTime: 2023-06-30 14:02:58
 * @Description: Edit By LiaoJunfeng(Department of Development)
-->
<template>
    <div>

    </div>
</template>

<script setup lang="ts">
    import { ref,watch } from 'vue'
    const x = ref(0)
    const y = ref(0)
    watch(x,(newX) => {
      console.log(`x is ${newX}`);  
    })
    const vFoucs= {
      mounted: (el)=>el.focus()
    }
</script>

<style scoped>

</style>