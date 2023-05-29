<template>
    <div class="items">
        <div v-for="(item,index) in items" :key="index">
            <list-item
                :item="item"
                class="item"
            />

        </div>
    </div>

</template>

<script>
import listItem from "./listItem.vue"
export default {
    props: ['items'],
    components: {
        listItem,
    }

}
</script>

<style scoped>
.items {
    background-color:  rgba(10, 16, 58, 0.887);
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
}
.item {
    color: #ffff;
    padding: 5px;
    margin-top: 5px;
    border-radius: 5px;
    border-bottom: 1px solid rgb(0, 255, 0);
}
</style>
