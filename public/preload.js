const { ipcRenderer, contextBridge } =require ('electron');
console.log('preload')
contextBridge.exposeInMainWorld('api', {
  sendMessage: (args) => ipcRenderer.invoke('message',args),
  getSmth:(callback)=>ipcRenderer.on('getall',(event, data) => { callback(data) })
})
