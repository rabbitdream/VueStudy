//全局变量
let data = {
    name: '蓝依然',
    wechat: 'Z18864262766'
}

Vue.component("Greeting", {
    // html 模板
    template: `
    <p>
    这是全局组件，可以在任何容器中使用
    我的名字是：{{name}}，我的微信是：{{wechat}}
    <button @click='changName'>改名</button>
    </p>
    
    `,
    // 属性
    data() {
        return data;
    },
    //方法
    methods: {
        changName() {
            this.name = '墨苡轩';
        }
    }
})

// 实例化多个Vue对象
const one = new Vue({
    el: "#vue-app-one",
    data() {
        return {
            title: "This is App one!"
        };
    },
    methods: {},
    computed: {}
});

const two = new Vue({
    el: "#vue-app-two",
    data() {
        return {
            title: 'This is App two!'
        };
    },
    methods: {
        changeAppOneTitle() {
            one.title = "我的Title被修改了！！！"
        }
    },
    computed: {}
})

//外部修改
two.title = "我也被修改过！！！"


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
        //fetch api 请求接口
        // 请求成功走:  .then()
        // 请求失败走:  .catch()
        // 无论成功失败:  .finally()
        const todos = fetch('http://jsonplaceholder.typicode.com/todos').then(res => {
            // console.log(res);
            // console.log(res.json());
            return res.json();
        }).then(todos => { this.todos = todos; });
    },
    methods: {
        onSubmit() {
            // console.log(this.todo)
            fetch('http://jsonplaceholder.typicode.com/todos', {  //默认GET
                method: "POST",
                body: JSON.stringify(this.todo),   //转字符串
                headers: {
                    "Content-type": "application/json"
                }
            }).then(res => {
                return res.json();
            }).then(todo => { this.todos.unshift(todo); })
        }
    }
})

