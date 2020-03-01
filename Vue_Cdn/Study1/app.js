// 实例化vue对象
new Vue({
    el: "#vue-app",// element
    data() {
        return {
            name: "蓝依然",
            wechat: 'Z18864262766',
            website: 'https://www.baidu.com',
            websiteTag: '<a href="https://www.taobao.com">淘宝</a>',
            age: 30,
            x: 0,
            y: 0,
            sex: '男',
            high: 170,
            a: 0,
            b: 0,
            mrChangeColor: false,
            mrChangeLength: false,
            error: false,
            success: false,
            Error: false,
            Success: false,
            characters: ['小猪佩琪', '小羊苏西', '小兔丽贝卡', '大象艾米丽'],
            users: [
                { name: "小猪佩奇", age: 3 },
                { name: "小羊苏西", age: 3 },
                { name: "小兔丽贝卡", age: 4 },
                { name: "大象艾米丽", age: 4 }
            ]
        };
    },
    methods: {
        // greet: function () {
        //     return "Good night " + this.name;
        // }
        greet(time) {
            // return "Good night " + this.name;
            return `Good ${time} ${this.name}`;    // 新语法：`${}`   反引号 美元符 花括号      
        },
        haveLanch() {
            return `吃过午饭了吗？`;
        },
        add(inc) {
            this.age += inc;
        },
        subtract(dec) {
            this.age -= dec;
        },
        updateXY(event) {
            console.log("updateXY");
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        handleClick() {
            console.log("handleClick");
        },
        logName() {
            console.log("正在输入名字...");
        },
        logAge() {
            console.log("正在输入年龄...");
        },
        getSex() {
            console.log(this.$refs.sex.value);
            this.sex = this.$refs.sex.value;
        },
        getHigh() {
            console.log(this.$refs.high.value);
            this.high = this.$refs.high.value;
        },
        // addToA() {
        //     console.log("addToA");
        //     return this.a + this.age;
        // },
        // addToB() {
        //     console.log("addToB");
        //     return this.b + this.age;
        // }
    },
    computed: {
        // 必须有 return
        // 搜索   样式渲染   计算频率高   推荐使用
        addToA() {
            console.log("addToA");
            return this.a + this.age;
        },
        addToB() {
            console.log("addToB");
            return this.b + this.age;
        },
        compClasses() {
            return {
                changeColor: this.mrChangeColor,
                changeLength: this.mrChangeLength
            };
        }
    },
    // 不建议使用，持续监听耗费资源。可用于调试。
    watch: {
        name(val, oldVal) {
            console.log(val, oldVal);
        },
        age(val, oldVal) {
            console.log(val, oldVal);
        }
    }
});