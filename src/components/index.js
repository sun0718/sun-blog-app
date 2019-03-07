import Header from './blog/common/Header'
import Footer from './blog/common/Footer'
import Wrapper from './blog/common/Wrapper'

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