<template>
    <div class="item">
        <input type="checkbox" class="input"
        @change="updateCheck()"
        v-model="item.completed"
        />

    <span :class="[item.completed ? 'completed' : '', 'itemText']"> {{ item.name }}</span>

    <font-awesome-icon icon="fa-solid fa-trash" @click="removeItem()" class="trash" />

    </div>

</template>

<script>
import axios from 'axios';

export default {
    props: ['item'],
    methods: {
        updateCheck() {
            axios.put('/api/item/' + this.item.id, {
                item: this.item
            })
            .then (res => {
                if (res.status == 200 ) {
                    this.emit('itemchanged');
                }
            })
            .catch(error => {
                console.error(error);
            })
        },
        removeItem() {
            axios.delete('/api/item/' + this.item.id)
            .then (res => {
                if (res.status == 200 ) {
                    this.$emit('itemchanged');
                }
            })
            .catch(error => {
                console.error(error);
            })
        }
    }
}
</script>

<style scoped>
.completed {
    text-decoration: line-through;
    color: rgb(96, 95, 98);

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
