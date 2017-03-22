<template>
    <div class="queueList"
         id="queueList">
        <h3>上传列表</h3>
        <ul>
            <li v-for='item in uploadList'>
                {{item.name}}
                <el-progress :percentage="item.process"></el-progress>
                <el-button :plain="true"
                           type="danger"
                           size="mini"
                           v-on:click="deleteItem(item.id)">删除</el-button>
            </li>
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
let that;
export default {
    computed: {
        uploadList() {
            return this.$store.getters.uploadList;
        }
    },
    mounted() {
        that = this;
    },
    methods: {
        deleteItem(id) {//deleteFile
            that.$store.dispatch('deleteFile', id);
        }
    }

}
</script>