// Basic init
const electron = require('electron')
const { app, BrowserWindow } = electron

const db_file = 'app.db'
    // Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    let mainWindow = new BrowserWindow({ width: 800, height: 600 })

    mainWindow.loadURL('file://' + __dirname + '/app/index.html')

    mainWindow.webContents.on('did-finish-load', () => {
        database = init_db()
    })
})

function init_db() {
    try {
        var stats = fs.statSync(db_file)
    } catch (err) {
        var db = new SQL.Database()
        db.run("CREATE TABLE Airports (`AirportID` varchar,`Name` varchar, `City` varchar, `State` varchar);")
        var data = db.export()
        var buffer = new Buffer(data)
        fs.writeFileSync(db_file, buffer)

        applog("made new database ")
    }

    applog("read in database ")

    var filebuffer = fs.readFileSync(db_file)
    return new SQL.Database(filebuffer)
}