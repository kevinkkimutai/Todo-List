<template>
    <div class="todocontainer">
        <div class="heading">
            <h2 class="title">Todo List</h2>
            <addItem   v-on:reloadlist="getList()"/>
        </div>

        <listView  :items="items"
        v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
import axios from 'axios';
import addItem from './addItem.vue';
import listView from './listView.vue';

export default {
    components: {
        addItem,
        listView
    },
    data: function() {
        return {
            items: []
        }
    },
    methods: {
        getList () {
            axios.get('/api/items')
                .then( res => {
                    this.items = res.data
                })
                .catch( error => {
                console.log(error);
            })
        }
    },
    created() {
        this.getList();
    }
}
</script>

<style scoped>
.todocontainer {
    width: 400px;
    margin: auto;


}
.title {
    color: rgb(64, 185, 86);
    text-align: center;
    justify-content: center;
    padding: 8px;
}
.heading {
    background-color: rgba(10, 16, 58, 0.887);
    border-radius: 5px;

}
</style>
