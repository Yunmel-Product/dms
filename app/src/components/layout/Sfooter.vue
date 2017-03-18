<template>
    <div class="player">
        <div class="player_inner">
            <el-button type="primary"
                       class="player_queueList"
                       icon="share"
                       v-on:click="listCtr()"></el-button>
        </div>
    </div>
</template>

<style>
.player_inner {
    position: fixed;
    bottom: 0;
    left: 200px;
    width: 100%;
    height: 50px;
    background: #FEFEFE;
    border-top: 1px solid #C7C7C7;
    display: flex;
    flex-direction: row;
    z-index: 1;
    padding-top: 5px;
}

.player_progress_wrapper {
    position: absolute;
    padding: 0 1px;
    top: 0;
    height: 20px;
    left: 0;
    width: 100%;
}

.player_details {
    width: 300px;
    flex: 1;
    padding: 0 5px;
}

.player_controls {
    padding: 0 10px;
    overflow: hidden;
    width: 200px;
    display: flex;
    align-items: center;
}

.player_volume {
    margin: 20px 30px 0;
    position: relative;
}

.player_queueList {
    padding-top: 10px;
    position: fixed;
    right: 10px;
}
</style>

<script>
var showListtag = 1;
export default {
    methods: {
        listCtr() {
            var lists = document.querySelector('.queueList');
            if (showListtag == 0) {
                lists.style.display = "";
                showListtag = 1;
            } else {
                lists.style.display = "none";
                showListtag = 0;
            }
        }
    }
}

</script>
