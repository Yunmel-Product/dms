<template>
    <div class="queueList"
         id="queueList">
        <ul>
            <li v-for='item in uploadList'>{{item.name}}</li>
        </ul>
    </div>
</template>

<style>
.queueList {
    background: #e5e5e5;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 350px;
    padding: 80px 0 70px;
    display: block;
    overflow-y: scroll;
    transition: all .5s ease-in-out;
}

* {
    box-sizing: border-box;
    cursor: default;
}
</style>

<script>
export default {
    computed: {
        uploadList() {
            return this.$store.getters.uploadList;
        }
    }

}
</script>