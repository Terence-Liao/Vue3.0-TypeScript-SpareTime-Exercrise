/*
 * @Author: Terence(LiaoJunFeng)
 * @Date: 2023-08-29 10:38:45
 * @LastEditTime: 2023-08-29 14:46:46
 * @Description: 
 */
import { Table } from "./interface";
import { reactive, computed, toRefs } from "vue";

/**
 * @description table 页面操作方法封装
 * @param {Function} api 获取表格数据 api 方法 (必传)
 * @param {Object} initParam 获取数据初始化参数 (非必传，默认为{})
 * @param {Boolean} isPageable 是否有分页 (非必传，默认为true)
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法 (非必传)
 * */

export const useTable = (
    api?: (params: any) => Promise<any>,
    initParams: object = {},
    isPageable: boolean = true,
    dataCallBack?: (data: any) => any,
    requestError?: (error: any) => void
)=> {
    const state = reactive<Table.StateProps>({
        //表格数据
        tableData: [],
        // 分页数据
        pageable: {
            // 当前页数
            pageNum: 1,
            // 每页显示条数
            pageSize: 10,
            // 总条数
            total: 0
        },
        // 查询参数(只包括查询)
        searchParam: {},
        // 初始化默认的查询参数
        searchInitParam: {},
        // 总参数(包含分页和查询参数)
        totalParam: {}
    })
    /**
     * @description: 
     * @return {*} 分页查询参数(只包括分页和表格字段排序,其他排序方式可自行配置)
    */

    const pageParam = computed({
        get: () => {
            return {
                pageNum: state.pageable.pageNum,
                pageSize: state.pageable.pageSize
            }
        },
        set: (newVal: any) => {
            console.log("我是分页更新之后的值", newVal)
        }
    })
    /**
     * @description: 获取表格数据
     * @return {*} void
    */
    
    const getTableList = async () => {
        if(!api) return 
        //初始化参数、总参数放到分页参数里头
        try {
            Object.assign(state.totalParam,initParams, isPageable ? pageParam.value: {});
            let { data } = await api({...state.searchInitParam, ...state.totalParam});
            dataCallBack && dataCallBack(data = dataCallBack(data));
        } catch (error) {
            requestError && requestError(error)
        }
    }

    /**
     * @description: 更新分页信息
     * @param {Object} pageable 后台返回的分页数据
     * @return {*}
     */    
    const updatePageable = (pageable: Table.Pageable) => {
        Object.assign(state.pageable, pageable)
    }
    const search = ():void => {
        state.pageable.pageNum = 1;
        getTableList();
    }

    /**
     * @description: 更新查询参数
     * @param {*}
     * @return {*}
     */ 
    const updatedTotalParam = () => {
        state.totalParam = {};
        // 处理查询参数，可以给查询参数加自定义前缀操作
        let nowSearchParam: Table.StateProps['searchParam'] = {};
        for (let key in state.searchParam) {
            // * 某些情况下参数为 false/0 也应该携带参数
            if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
              nowSearchParam[key] = state.searchParam[key];
            }
        }
    }

   /**
   * @description 表格数据重置
   * @return void
   **/
    const reset = () => {
        state.pageable.pageNum = 1;
        Object.keys(state.pageable).forEach(key => {
            state.searchParam[key] = state.searchInitParam[key];
        })
        updatedTotalParam();
        getTableList();
    }

    return {
        ...toRefs(state),
        getTableList,
        search,
        reset,
        updatePageable,
        updatedTotalParam
    }
}



