<template>
    <div>
        <h3>首页</h3>
        <div>{{content}}</div>
    </div>
</template>

<<script>


 export default {
     data(){
        return {
            content:''
        }
     },
    mounted(){
       this.$http.get('https://www.baidu.com').then((response) => {
        this.content = response.body;
       }, (response) => {
            // 响应错误回调
       });
     
    }
 }
</script>