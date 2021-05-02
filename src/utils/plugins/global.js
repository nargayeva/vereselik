// import vSelect from 'vue-select'
import Multiselect from 'vue-multiselect'
import 'vue-select/dist/vue-select.css';

export default {
    install: app => {
        app.component('multi-select', Multiselect)
    }
}
