<!--
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-29 16:07:51
 * @LastEditTime: 2023-06-30 14:41:41
 * @Description: Edit By LiaoJunfeng(Department of Development)
-->
<template>
    <div id="Box">
        <TransitionComponent>
            <button v-if="docState === 'saved'"
              @click="docState = 'edited'">Edit</button>
            <button v-else-if="docState === 'edited'"
                @click="docState = 'editing'">Save</button>
            <button v-else-if="docState === 'editing'"
              @click="docState = 'saved'">Cancel</button>
        </TransitionComponent>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import TransitionComponent from "@/components/TransitionComponent.vue";
    const docState = ref('saved')
    defineOptions({
        inheritAttrs: false
    })
</script>

<style scoped>

</style>