<template>
    <div id="father-box">
        <BasicExercise :transmitVal="titleVal"/>
    </div>
</template>

<script setup lang="ts">
    import BasicExercise from '@/views/BasicExercise.vue';
    import { reactive,ref, onMounted,watch } from 'vue'
    
    const el = ref<HTMLInputElement|null>(null)
    const titleVal = reactive({
        title: 'terence',
        foo: 'hahahaha',
        bar: 123
    })

    const x = ref(0)
    const y = ref(0)
    watch(()=> x.value + y.value,(newX) => {
      console.log(`x is ${newX}`);  
    })
</script>

<style scoped>

</style>