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
}
.title {
    color: aqua;
    align-items: center;
    justify-content: center;
}
.heading {
    background-color: blueviolet;
}
</style>
