// Basic init
const electron = require('electron')
const SQL = require('sql.js')
const fs = require('fs')
const { app, BrowserWindow } = electron
//主进程
const ipc = require('electron').ipcMain;
const db_file = 'app.db'
    // Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    let mainWindow = new BrowserWindow({ width: 1280, height: 600 })

    mainWindow.loadURL('file://' + __dirname + '/app/index.html')

    mainWindow.webContents.on('did-finish-load', () => {
        try {
            database = init_db()
        } catch (e) {
            console.log(e)
        }
    })

    mainWindow.webContents.on('reload', () => {
        console.log('reload')
    })
})

app.on('will-quit', (e, code) => {
    syncDatabase();
})

/**
 * 初始化数据库
 */
function init_db() {
    try {
        var stats = fs.statSync(db_file)
    } catch (err) {
        var db = new SQL.Database()
        db.run("CREATE TABLE FILE_LIST (`id` varchar,`name` varchar, `path` varchar, `state` varchar);")
        var data = db.export()
        var buffer = new Buffer(data)
        fs.writeFileSync(db_file, buffer)
    }
    var filebuffer = fs.readFileSync(db_file)
    return new SQL.Database(filebuffer)
}


ipc.on('select', function(e, args) {
    console.log(args);
    try {
        var contents = database.exec(args);
        e.returnValue = contents;
    } catch (e) {
        console.error(e);
    }
    e.returnValue = 'error';
})

ipc.on('insert-db', function(e, args) {
    insertDb(args);
})

function syncDatabase() {
    var data = database.export()
    var buffer = new Buffer(data)
    fs.writeFileSync(db_file, buffer)
}

function insertDb(sql) {
    try {
        //database.exec("BEGIN TRANSACTION;");
        console.log(sql);
        database.exec(sql);
        //database.exec("COMMIT;");
        // syncDatabase();
    } catch (e) {
        console.log(e);
    }
}