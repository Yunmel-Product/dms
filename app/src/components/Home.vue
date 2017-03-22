<template>
    <div>
        <h3>首页</h3>
        <div>{{content}}</div>
        <el-button type="primary"
                   v-on:click="select()">查询</el-button>
        <el-button type="primary"
                   v-on:click="updateProcess()">更新进度</el-button>
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
const { dialog } = require('electron').remote;
const fs = require('fs');
let that;
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
        that = this;
    },
    methods:{
        select(){
             var res = ipc.sendSync('select','SELECT * FROM FILE_LIST');
             var obj = res[0];
             var list = new Array();
             if(obj){
                 console.log(obj);
                 var values = obj.values;
                 var columns = obj.columns;
                 for(var i = 0 ; i < values.length;i++){
                    let result = new Object();
                    for(var j = 0 ; j < columns.length;j++){
                        result[columns[j]] = values[i][j];
                    }
                    //list.push(result);
                    this.$store.dispatch('addFile2Queue', result);
                 }
             }
             console.log(list);
        },
        selectFile(){
            dialog.showOpenDialog({
                    properties: ['openFile','multiSelections'],
                    filters: [
                        { name: '图片', extensions: ['png', 'jpg','jpeg'] }
                    ]
                }, function(res) {
                    res.forEach(function(item, index) {
                        let stats = fs.statSync(item);
                        let filename = item.split(/[\\/]/).pop();
                        let id =  that.$nextId();
                         //insert文件到数据库
                        let sql = "INSERT INTO FILE_LIST VALUES('" + id + "','" + filename + "','" + res[index] + "','0')";
                        that.$insert(sql);
                         //添加文件到上传列表
                        that.$store.dispatch('addFile2Queue', {id:id, name: filename,process:40 });
                    })
                                   
            })
        },
        selectFolder(){
            dialog.showOpenDialog({
                    properties: ['openDirectory']
                }, function(res) {
                   that.$insertDirectory(res);
            })
        },
        updateProcess(){
            that.$store.dispatch('updateProcess');
        }
    }
 }
</script>