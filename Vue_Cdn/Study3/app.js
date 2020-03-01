new Vue({
    el: '#vue-app',
    data() {
        return {
            todos: [],
            todo: {
                title: "",
                completed: false
            }
        };
    },
    // 在页面加载之前就执行
    mounted() {
        //axios get请求接口
        axios.get('http://jsonplaceholder.typicode.com/todos').then(
            res => {
                // console.log(res);
                this.todos = res.data;   // 不需要json解析
            }
        )
    },
    methods: {
        onSubmit() {
            // axios post
            axios.post('http://jsonplaceholder.typicode.com/todos', this.todo).then(res => { this.todos.unshift(res.data); })
        }
    }
})
