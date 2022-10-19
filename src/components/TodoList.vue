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
        data() {
            return {
                loading: false
            }
        },
        created() {
            this.loading = true
            this.$store.dispatch('getTodos').finally(() => {
                this.loading = false
            })
        }
    }   
</script>