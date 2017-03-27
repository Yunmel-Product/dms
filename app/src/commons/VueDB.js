/**
 * vue 基于pouchdb数据库插件封装,提供给vue全局使用
 */
const fs = require('fs')
const PouchDB = require('pouchdb-browser');

var VueDB = {}
VueDB.installed = false;
VueDB.install = function (Vue, options) {
    if (VueDB.installed) return;
    let db = new PouchDB('dms-app', {adapter: 'idb'});
    /**
     * 保存数据到indexDB
     * @param obj
     */
    Vue.prototype.$insert = function (obj) {
        if(!obj.id) obj.id = nextId();
        console.log(obj)
        db.put(obj, function callback(err, result) {
            if (!err) {
                console.log('save success![' + obj + ']');
            } else {
                console.log(err);
            }
            return result;
        });
    }
    /**
     * 查询数据
     * @return 查询结果
     */
    Vue.prototype.$find = function () {
        db.allDocs({include_docs: true, descending: true}, function (err, doc) {
           return doc;
        });
    }
    /**
     * UUID生成
     * @return {string}
     */
    Vue.prototype.$nextId = nextId();

    function nextId() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    VueDB.installed = true;
}

/**
 * 导出vuedb插件
 */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueDB);
}
export default VueDB;