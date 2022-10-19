<template>
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
            <Spinner v-if="loading"/>
            <template v-else>
                <Form />
                <Items v-if="$store.state.todos.length" />
                <Empty v-else/>  
            </template>
        </div>
    </div>
</template>

<script>
    import { ref } from 'vue'
    import { useStore } from 'vuex'
    import Spinner from './Spinner.vue'
    import Form from './Form.vue'
    import Items from './Items.vue'
    import Empty from './Empty.vue'

    export default {
        name: "TodoList",
        components: {   
            Spinner,
            Form,
            Items,
            Empty
        },
        setup() {
            const loading = ref(false)
            const store = useStore()

            loading.value = true
            store.dispatch('getTodos').finally(() => {
                loading.value = false
            })

            return {
                loading
            }
        }
    }   
</script>