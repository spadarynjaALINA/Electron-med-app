const { ipcRenderer, contextBridge } =require ('electron');
console.log('preload')
contextBridge.exposeInMainWorld('api', {
  // Invoke Methods
  testInvoke: (args) => ipcRenderer.invoke('test-invoke', args),
  // Send Methods
  testSend: (args) => ipcRenderer.send('test-send', args),
  // Receive Methods
  testReceive: (callback) => ipcRenderer.on('test-receive', (event, data) => { callback(data) }),
		  getName:(args)=> ipcRenderer.invoke('getAllNames',args),
				// send:(message) =>{ return new Promise((resolve) => {
    //     ipcRenderer.once('asynchronous-reply', (_, arg) => {
    //         resolve(arg);
    //     });
    //     ipcRenderer.send('asynchronous-message', message);
    // });}
})


// const {contextBridge} = require('electron')
// const {readFile, writeFile} = require('fs/promises')

// contextBridge.exposeInMainWorld('settingsAPI', {
//     getSettings: () => readFile('path/to/user-settings.json').then(JSON.parse),
//     saveSettings: (value) => writeFile('path/to/user-settings.json', JSON.stringify(value)),
// })