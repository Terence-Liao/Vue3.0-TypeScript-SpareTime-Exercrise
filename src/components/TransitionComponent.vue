<!--
 * @Author: Terence(liaojunfeng)
 * @Date: 2023-06-29 15:57:28
 * @LastEditTime: 2023-06-29 16:52:26
 * @Description: Edit By LiaoJunfeng(Department of Development)
-->
<template>
    <Transition
        name="slide-up"
        @enter="onEnter"
        @leave="onLeave"
        
    >
        <slot>
            
        </slot> <!-- 向内传递插槽内容 -->
  </Transition>
</template>

<script setup>
    
</script>

<style lang="scss" scoped>
.btn-container {
  display: inline-block;
  position: relative;
  height: 1em;
}

button {
  position: absolute;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

</style>