/*
 * @Author: Terence(LiaoJunFeng)
 * @Date: 2023-07-04 09:36:36
 * @LastEditTime: 2023-07-04 17:33:22
 * @Description: 
 */
//通过vite提供的import.meta.globEager读取common目录下的所有vue组件，并且以jf-ui文件名作为组件名。

//在使用时使用 jf-组件名的形式
const componentList:{[key:string]: any} = import.meta.globEager('../components/jf-ui/**');
let componentArray:{[key:string]: any} = new Object()
Object.keys(componentList).forEach((key) => {
    let keyArray = key.split('/')
    let name = 'jf' + keyArray[keyArray.length - 1].split('.')[0]
    componentArray[name] = componentList[key].default
})

export default function (app:any) {
    Object.keys(componentArray).forEach((key) => {
        app.component(key, componentArray[key])
    })
}
