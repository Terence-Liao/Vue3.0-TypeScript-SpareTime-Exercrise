<!--
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-29 11:18:31
 * @LastEditTime: 2023-06-29 13:39:08
 * @Description: Edit By LiaoJunfeng(Department of Development)v
-->
<template>
    <div id="defineAyncComponent">

    </div>
</template>

<script setup lang="ts">
    import { defineAsyncComponent } from 'vue'
    const AsyncCompa = defineAsyncComponent(():Promise<any> => {
        return new Promise<void>((resolve, reject)=> {
            // ...从服务器获取组件
            resolve()
        })
    })
//    const AsyncCompb = defineAsyncComponent({
//             // 加载函数
//         loader: () => import('./Foo.vue'),
//         // 加载异步组件时使用的组件
//         loadingComponent: LoadingComponent,
//         // 展示加载组件前的延迟时间，默认为 200ms
//         delay: 200,
//         // 加载失败后展示的组件
//         errorComponent: ErrorComponent,
//         // 如果提供了一个 timeout 时间限制，并超时了
//         // 也会显示这里配置的报错组件，默认值是：Infinity
//         timeout: 3000
//     })
</script>

<style scoped>

</style>