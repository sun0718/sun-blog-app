// var path = require('path')

// const PUBLIC_PATH = path.resolve(__dirname, './common');

// console.log(PUBLIC_PATH)

import Footer from '@/components/common/Footer'
import Wrapper from '@/components/common/Wrapper'
import Header from '@/components/common/Header'
import Menu from '@/components/common/Menu'
import Sidebar from '@/components/common/Sidebar'
import Tags from '@/components/common/Tags'
import ImageShow from '@/components/common/ImageShow'

const components = [
    Footer,
    Wrapper,
    Header,
    Menu,
    Tags,
    Sidebar,
    ImageShow
]

export default {
    install (Vue ,opts = {}){
        components.map(component =>{
            Vue.component(component.name,component)
        })
    }
}