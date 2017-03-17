<template>
    <div id="app">
        <el-row class="tac">
            <Sheader></Sheader>
            <NaviMenu></NaviMenu>
            <MainView></MainView>
            <Sfooter></Sfooter>
            <QueueList></QueueList>
        </el-row>
    </div>
</template>
<script>

import NaviMenu from './components/layout/NaviMenu.vue'
import Sheader from './components/layout/Sheader.vue'
import MainView from './components/layout/MainView.vue'
import Sfooter from './components/layout/Sfooter.vue'
import QueueList from './components/QueueList.vue'
export default {
    components: {
        Sheader, NaviMenu, MainView, Sfooter, QueueList
    },
    methods: {
        
    }
}
</script>


