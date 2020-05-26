import Course from '../../components/course/course.vue'

Course.install = function(Vue) {
    Vue.component(Course.name, Course)
}

export default Course