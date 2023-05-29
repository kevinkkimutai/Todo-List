<template>
    <div class="todocontainer">
        <div class="heading">
            <h2 class="title">Todo List</h2>
            <addItem />
        </div>

        <listView />
    </div>
</template>

<script>
import addItem from './addItem.vue';
import listView from './listView.vue';

export default {
    components: {
        addItem,
        listView
    }
}
</script>

<style scoped>
.todocontainer {
    width: 400px;
    margin: auto;
    background-color: rgb(157, 1, 247);
}
.title {
    color: rgb(64, 185, 86);
    text-align: center;
}
.heading {
    background-color: rgba(10, 16, 58, 0.887);
    border-radius: 5px;

}
</style>
