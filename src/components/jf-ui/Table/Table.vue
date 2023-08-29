<!--
 * @Author: Terence(LiaoJunFeng)
 * @Date: 2023-08-25 17:57:52
 * @LastEditTime: 2023-08-29 17:33:06
 * @Description: 
-->
<template>
    <div class="card table-main">
        <div class="table-header">
            <div class="header-button-lf">
                <slot name="tableHeader"  />
            </div>
            <div v-if="toolButton" class="header-button-ri">
                <el-button :icon="Refresh" circle @click="getTableList"/>
                <el-button v-if="columns.length" :icon="Printer" circle />
                <!-- <el-button v-if="columns.length" :icon="Operation" circle @click="openColSetting"></el-button> -->
            </div>
        </div>
        <!-- 表格主体 -->
        <el-table />
    </div>
</template>

<script setup lang="ts">
import { Refresh, Printer, Operation, Search } from "@element-plus/icons-vue";
import { ref, watch, computed, provide, onMounted } from "vue";
import { useTable } from "@/hooks/useTable";
import { ColumnProps } from "../interface/index";
import { useSelection } from "@/hooks/useSelection";
//import printJS from "print-js";
type BreakPoint = "xs" | "sm" | "md" | "lg" | "xl";
export interface tableProps {
    columns: ColumnProps[]; // 列配置项  ==> 必传
    toolButton?: boolean; // 是否显示表格功能按钮 ==> 非必传（默认为true）
    requestApi?: (params: any) => Promise<any>; // 请求表格数据的 api ==> 非必传
    requestAuto?: boolean; // 是否自动执行请求 api ==> 非必传（默认为true）
    requestError?: (params: any) => void; // 表格 api 请求错误监听 ==> 非必传
    dataCallback?: (data: any) => any; // 返回数据的回调函数，可以对数据进行处理 ==> 非必传
    title?: string; // 表格标题，目前只在打印的时候用到 ==> 非必传
    pagination?: boolean; // 是否需要分页组件 ==> 非必传（默认为true）
    initParam?: any; // 初始化请求参数 ==> 非必传（默认为{}）
    border?: boolean; // 是否带有纵向边框 ==> 非必传（默认为true）
    rowKey?: string; // 行数据的 Key，用来优化 Table 的渲染，当表格数据多选时，所指定的 id ==> 非必传（默认为 id）
    searchCol?: number| Record<BreakPoint, number>; // 表格搜索项 每列占比配置 ==> 非必传 { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 }
}

const openColSetting = () => colRef.value.openColSetting();
const props = withDefaults(defineProps<tableProps>(),{
    columns: () => [],
    pagination: true,
    initParam: {},
    border: true,
    toolButton: true,
    rowKey: "id",
    searchCol: () => ({ xs: 1, sm: 2, md: 2, lg: 3, xl: 4 })
})
//列设置  过滤掉不需要设置的例子
const colRef = ref();

// 接收 columns 并设置为响应式
const tableColumns = ref<ColumnProps[]>(props.columns);

// 打印表格数据（💥 多级表头数据打印时，只能扁平化成一维数组，printJs 不支持多级表头打印）
// const print  = () => {
//     const header = `<div style="text-align: center"><h2>${props.title}</h2></div>`;
//     const gridHeaderStyle = "border: 1px solid #ebeef5;height: 45px;color: #232425;text-align: center;background-color: #fafafa;";
//     printJS({
//         print
//     })
// }

// 表格操作 Hooks
const { getTableList } = useTable(props.requestApi, props.initParam, props.pagination, props.dataCallback, props.requestError)
</script>

<style scoped>

</style>