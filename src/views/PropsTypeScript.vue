<template>
    <div id="TypeScriptBox">

    </div>
</template>

<script setup lang="ts">
    import  { dataProps,Book }  from '@/type/base'
    const propsA = defineProps({
        foo: {type: String, required: true},
        bar: Number
    })
    const propsBB = defineProps<{
        book: Book
    }>()
    const propsB = defineProps<dataProps>()
    const propsC = withDefaults(defineProps<dataProps>(),{

    })
</script>

<style scoped>

</style>