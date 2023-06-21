<!--
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-12 11:26:11
 * @LastEditTime: 2023-06-13 16:54:10
 * @Description: Edit By LiaoJunfeng(Department of Development)
-->
<template>
    <div id="home">
        <p :class="classObject">Has published books:</p>
        <span>{{ Message }}</span>
        <div :class="[{active: isActive},errorClass]">active</div>
        <h4>{{ transmitVal.title }}</h4>
        <h3>{{ transmitVal.foo }}</h3>
        <h3>{{ transmitVal.bar }}</h3>
    </div>
</template>

<script  setup lang="ts">
    import { reactive,  ref, computed } from 'vue'

    const isActive = ref(false)
    const error:{[key:string]: string|any} | null = ref(null)
    const author:{[key: string]:string|Array<string>} = reactive({
        name: 'John Doe',
        books: [
            'Vue 2 - Advanced Guide',
            'Vue 3 - Basic Guide',
            'Vue 4 - The Mystery'
        ]
    })
    const props = defineProps<{
        transmitVal: {
            title: string,
            foo: string,
            bar?: Number
        }
    }>()
    const errorClass = ref('text-danger')
    const classObject = computed(()=>({
        active: isActive.value && ! error.value,
        'text-danger': error.value && error.value.type ==='fatal'
    }))
    
    const Message = computed(()=> {
        return author.books.length > 0 ?'yes':'no'
    })
</script>

<style scoped>
    #home {
        color: white;
    }
    
</style>