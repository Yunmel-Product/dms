<template>
    <div>
        <h3>首页</h3>
        <div>{{content}}</div>
        <el-button type="primary" v-on:click="show()">主要按钮</el-button>
    </div>
</template>

<<script>

const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer;
 export default {
     data(){
        return {
            content:''
        }
     },
    mounted(){
    //    this.$http.get('https://www.baidu.com').then((response) => {
    //     this.content = response.body;
    //    }, (response) => {
    //         // 响应错误回调
    //    });
        console.log(remote)
    },
    methods:{
        show(){
             var res = ipc.sendSync('say-hello','hello world.')
             console.log(res);
        }
    }
 }
</script>