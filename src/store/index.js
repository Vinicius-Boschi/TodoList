import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        todos: []
    },
    mutations: {
        storeTodos(state, payload) {
            state.todos = payload
        },
        storeTodo(state, payload) {
            state.todos.push(payload)
        }
    },
    actions: { 
        getTodos({ commit }) {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    const response = await axios.get('http://localhost:3000/todos')
                    commit('storeTodos', response.data)
                    resolve()
                },1000)
            })
        },
        addTodo({ commit }, data) {
            axios.post('http://localhost:3000/todos', data)
            commit('storeTodo', data)
        },
        updateTodo({ id, data }) {
            axios.put(`http://localhost:3000/todos/${id}`, data)
        }
    }
})