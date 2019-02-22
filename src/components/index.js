import Header from './Header'

const components = [
    Header
]

export default {
    install (Vue ,opts = {}){
        components.map(component =>{
            Vue.component(component.name,component)
        })
    }
}