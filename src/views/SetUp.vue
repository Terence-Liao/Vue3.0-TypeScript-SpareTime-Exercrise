<template>
    <div id="abc">
        <button @click="increment">{{ state.count }}}</button>
    </div>
</template>
<script lang="ts">
    import { reactive } from 'vue'
    export default {
        setup() {
            const state = reactive({count:0})
            function increment() {
                state.count++
            }
            return {
                state,
                increment
            }
        }
    }
</script>

<style scoped>

</style>