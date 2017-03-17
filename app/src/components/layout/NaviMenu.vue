<template>
    <div class="aside">
        <div class="user-info">
            <span style="color:red;">张三</span>
        </div>
    
        <div class="nav">
            <el-menu default-active="home"
                     class="el-menu-vertical-demo"
                     theme="dark"
                     :router="true">
                <el-menu-item index="/home"> <i class="el-icon-message"></i> 主页</el-menu-item>
                <el-menu-item index="/proImglist"> <i class="el-icon-message"></i> 工程影像</el-menu-item>
                <el-menu-item index="/myImglist"><i class="el-icon-message"></i> 我的影像</el-menu-item>
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-menu"></i>文件管理</template>
                    <el-menu-item index="proImglist"> <i class="el-icon-upload2"></i>传输列表</el-menu-item>
                    <el-menu-item index="1-2"> <i class="el-icon-star-off"></i> 收藏</el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
    
        <div class="tools">
            <el-button type="primary" size="small" icon="message">消息中心</el-button>
            <el-button type="primary" size="small" icon="message">消息中心</el-button>
        </div>
    
    </div>
</template>

<style>
.aside {
    background: #324157;
    border-right: 1px solid #000;
    width: 200px;
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
}

.nav {
    bottom: 50px;
}

.user-info {
    height: 80px;
    border-bottom: 1px solid #fff;
}

.tools {
    position: fixed;
    height: 50px;
    padding-top: 10px;
    bottom: 0;
}
</style>

<script>
export default {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>