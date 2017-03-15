<template>
   <div id="app" >
    <el-row class="tac">
        <TopFrame></TopFrame>
        <NaviMenu></NaviMenu>
        <MainView></MainView>
        <BootomCtrl></BootomCtrl>
        <QueueList></QueueList>
        
    </el-row>
    </div>
</template>
<script>

    import NaviMenu from './components/NaviMenu.vue'
    import TopFrame from './components/TopFrame.vue'
    import MainView from './components/MainView.vue'
    import BootomCtrl from './components/BootomCtrl.vue'
    import QueueList from './components/QueueList.vue'
    export default {
        components: {
           TopFrame, NaviMenu,MainView,BootomCtrl,QueueList
        },
        methods: {
          showConfirm:function(msg){
            alert(msg);
          }
        }
    }
   




</script>


