<template>
    <div>
        <h3>首页</h3>
        <div>{{content}}</div>
        <el-button type="primary"
                   v-on:click="select()">查询</el-button>
        <el-button type="primary"
                   v-on:click="insert()">添加</el-button>
        <el-button size="small"
                   type="primary"
                   v-on:click="selectFile()">上传文件</el-button>
        <el-button size="small"
                   type="primary"
                   v-on:click="selectFolder()">上传文件夹</el-button>
    </div>
</template>

<<script>

const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer;
const { dialog } = require('electron').remote
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
        select(){
             var res = ipc.sendSync('select','SELECT * FROM FILE_LIST');
             console.log(res);
        },
        insert(){
            //`AirportID` varchar,`Name` varchar, `City` varchar, `State` varchar)
            this.$store.dispatch('addFile2Queue', { name: 'zahnfsn', email: 'admin@gmail.com' });
        },
        selectFile(){
            dialog.showOpenDialog({
                    properties: ['openFile','multiSelections'],
                    filters: [
                        { name: '图片', extensions: ['png', 'jpg','jpeg'] }
                    ]
                }, function(res) {
                   ipc.send('select-files',res);
            })
        },
        selectFolder(){
            dialog.showOpenDialog({
                    properties: ['openDirectory']
                }, function(res) {
                   ipc.send('select-directory',res);
            })
        }
    }
 }
</script>