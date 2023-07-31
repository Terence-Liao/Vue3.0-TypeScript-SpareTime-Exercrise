<!--
 * @Author: Terence(LiaoJunFeng)
 * @Date: 2023-07-03 10:16:56
 * @LastEditTime: 2023-07-04 18:20:00
 * @Description: 上传文件
-->
<template>
    <div 
        id="jf-upload"
        v-loading="uploadLoading"
        :element-loading-text="loadingText"
    >
        <el-upload
            class="upload-ele"
            drag
            multiple
        >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <div class="el-upload__text">
                拖拽文件到这<em>或点击上传</em>
            </div>
            <template #tip>
                <div class="el-upload__tip">
                    最大500kb
                </div>
            </template>
        </el-upload>
    </div>
</template>

<script setup lang="ts">
    import { toRefs } from 'vue'
    import  { uploadDataProps }  from '../../../type/base'
    const propsData = defineProps<{}>({

    })
    const autoProps = withDefaults(defineProps<uploadDataProps>(),{
        uploadLoading: true,
        loadingText: '正在加载中.....',
    })
    const { uploadLoading,loadingText } = toRefs(autoProps)
</script>

<style lang="scss" scoped>

</style>