import Header from './Header'
import Footer from './Footer'

const components = [
    Header,
    Footer
]

export default {
    install (Vue ,opts = {}){
        components.map(component =>{
            Vue.component(component.name,component)
        })
    }
}