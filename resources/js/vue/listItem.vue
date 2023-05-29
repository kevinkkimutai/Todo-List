<template>
    <div class="item">
        <input type="checkbox" class="input"
        @change="updateCheck()"
        v-model="item.completed"
        />

    <span class="[item.completed ? 'completed' : '', 'itemText']"> {{ item.name }}</span>
<butto @click="removeItem()" class="trash">
    <font-awesome-icon :icon="['fas', 'circle-plus']"/>
</butto>
    </div>

</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: red;

}
span {
    width: 100%;
    margin-left: 15px;
}

.item {
    display: flex;
    justify-content: center ;
    align-items: center;


}
.trash {
    color: red;
    border: none;
    outline: none;
}
</style>
