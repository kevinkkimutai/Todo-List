<template>
    <div class="form">
        <input class="inputfield" type="text" v-model="item.name" placeholder="Add Todo....">

        <font-awesome-icon :icon="['fas', 'circle-plus']" @click="addItem()" :class="[item.name ? 'active' : 'inactive', 'plus', 'fa-2x']"/>



    </div>

</template>

<script>
import axios from 'axios';
export default {
    data: function() {
        return {
            item: {
                name: ""
            }
        };
    },
    methods: {
        addItem() {
            if (this.item.name == '') {
                return;
            }
            axios.post('api/item/store', {
                item: this.item
            })
            .then ( response => {
                if (response.status === 201 ) {
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch( error => {
                console.log(error);
            })
        }
    }

}
</script>

<style scoped>
.form {
    padding: 10px;
    display: flex;
    text-align: center;
    justify-content: center;
}
.inputfield {
    border-radius: 5px;
    padding: 4px;
    margin-right: 10px;
    border: 0cm;
    background-color: rgba(243, 235, 235, 0.781);
    width: 100%;
    font-size: medium;
}
.active {
    color: aqua;
}
.inactive {
    color: rgba(243, 235, 235, 0.781);
}


</style>
