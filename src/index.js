import {
    Button
} from './module'

const components = [
    Button,
]

function install(Vue) {
    if(install.installed) {
        return
    }
    install.installed = true
    components.forEach( (Component) => {
        Component.install(Vue)
    })
}
const Hd = {
    install
}

export default Hd