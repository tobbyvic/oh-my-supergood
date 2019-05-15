import MyComponent from './my-component.vue'


const ExportComponent = {
    install: function(Vue){
        Vue.component('MyComponent', MyComponent)
    }
}
// 导出组件
export default ExportComponent



