const remote = require('electron').remote;
const ipc = require('electron').ipcRenderer;
const fs = require('fs')

var VueDB = {}
VueDB.installed = false;
VueDB.install = function(Vue, options) {
    if (VueDB.installed) return;
    Vue.prototype.$insert = function(args) {
        if (!args) return;
        ipc.send('insert-db', args);
        // console.log('store is : ' + Vue.$store);
    }
    Vue.prototype.$nextId = function() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    VueDB.installed = true;
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueDB);
}
export default VueDB;