// Basic init
const electron = require('electron')
const fs = require('fs')
const {app, BrowserWindow} = electron
//主进程
const ipc = require('electron').ipcMain;
// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)
// To avoid being garbage collected
let mainWindow
app.on('ready', () => {
    mainWindow = new BrowserWindow({width: 1280, height: 600})
    mainWindow.loadURL('file://' + __dirname + '/app/index.html')
    mainWindow.webContents.on('did-finish-load', () => {

    })
})
