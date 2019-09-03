import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)
export default {
    state: {
        todoList: [
            { content: "剑圣☆", equipment: "", status: "active" },
            { content: "秀逗魔导师☆", equipment: "", status: "active" },
            { content: "暗影萨满☆", equipment: "", status: "active" },
            { content: "恶魔巫师☆", equipment: "", status: "active" }
        ]
    },
    getters: {
        
    },
    mutations: {
        addHero(state, text) {
            state.todoList.push({
                text, status: 'active'
            })
        },
        deleteTodo(state, index) {
            state.todoList[index].status = 'completed'
        },
        revokeTodo(state, index) {
            state.todoList[index].status = 'active'
        }
    }
}
