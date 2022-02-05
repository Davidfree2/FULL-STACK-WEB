const { BrowserWindow, app } = require('electron');                             
require('./server.js');                                                            
                                                                                
let mainWindow = null                                                           
                                                                                
const main = () =>{                                                             
    mainWindow = new BrowserWindow({                                            
        width: 900,                                                            
        height: 700,                                                            
    });                                                                         
    mainWindow.loadURL('http://localhost:8080/');                               
    mainWindow.on('close', (e)=>{                                               
        mainWindow = null;                                                      
    })                                                                          
}                                                                               
                                                                                
app.on('ready', main) 
