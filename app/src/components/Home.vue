<template>
    <div>
        <h3>首页</h3>
        <div>{{content}}</div>
        <el-button type="primary"
                   v-on:click="updateProcess()">更新进度
        </el-button>
        <el-button size="small"
                   type="primary"
                   v-on:click="selectFile()">上传文件
        </el-button>
        <el-button size="small"
                   type="primary"
                   v-on:click="selectFolder()">上传文件夹
        </el-button>
    </div>
</template>

<
<script>
    const {dialog} = require('electron').remote;
    const fs = require('fs');
    let that;
    export default {
        data(){
            return {
                content: ''
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
        methods: {
            selectFile(){
                dialog.showOpenDialog({
                    properties: ['openFile', 'multiSelections'],
                    filters: [
                        {name: '图片', extensions: ['png', 'jpg', 'jpeg']}
                    ]
                }, function (res) {
                    that.processFiles(res);
                })
            },
            selectFolder(){
                dialog.showOpenDialog({
                    properties: ['openDirectory']
                }, function (res) {
                    //递归取出文件
                })
            },
            updateProcess(){
                that.$store.dispatch('updateProcess');
            },
            processFiles(files){
                files.forEach(function (item, index) {
                    let stats = fs.statSync(item);
                    let fileObj = {
                        name:item.split(/[\\/]/).pop(),
                        process:0,
                        path:item
                    }
                    let res = that.$insert(fileObj);
                    console.log(res)
                    //添加文件到上传列表
                   // that.$store.dispatch('addFile2Queue', {id: id, name: filename, process: 40});
                })
            }
        }
    }
</script>