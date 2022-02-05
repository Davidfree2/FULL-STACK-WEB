const { BrowserWindow, app } = require('electron');
require('./server.js');

let mainWindow = null

const main = () =>{
    mainWindow = new BrowserWindow({
        width: 1000,
        heigh: 1000,
        icon: './electron-icon.jpg'
    });
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.on('close', (e)=>{
        mainWindow = null;
    })
}

app.on('ready', main)
