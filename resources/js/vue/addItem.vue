<template>
    <div class="form">
        <input class="inputfield"  placeholder="Add Todo....">

        <font-awesome-icon :icon="['fass', 'circle-plus']" class="fa-2x"/>


    </div>

</template>

<script>
export default {

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
    width: 100%
}
.fa-2x {
    color: rgb(5, 255, 226);
}

</style>
