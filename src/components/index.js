import Header from './Header'
import Footer from './Footer'
import Wrapper from './Wrapper'

const components = [
    Header,
    Footer,
    Wrapper
]

export default {
    install (Vue ,opts = {}){
        components.map(component =>{
            Vue.component(component.name,component)
        })
    }
}