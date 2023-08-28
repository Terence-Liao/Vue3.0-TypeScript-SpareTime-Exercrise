<!--
 * @Author: Terence(LiaoJunFeng)
 * @Date: 2023-08-25 17:57:52
 * @LastEditTime: 2023-08-28 18:10:01
 * @Description: 
-->
<template>
    <div class="card table-main">
        <div class="table-header">
            <div class="header-button-lf">
                <slot name="tableHeader" :selected-list-ids="selectedListIds" :selected-list="selectedList" :is-selected="isSelected" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, provide, onMounted } from "vue";
import { useSelection } from "@/hooks/useSelection";
const { selectedListIds } = useSelection(props.rowKey)
</script>

<style scoped>

</style>