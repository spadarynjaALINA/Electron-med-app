const { app, BrowserWindow, session, ipcMain } = require('electron'); // electron
const isDev = require('electron-is-dev'); // To check if electron is in development mode
const path = require('path');
const { db } =isDev? require('./../db'):require('db')
let mainWindow;


// Initializing the Electron Window
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: isDev
        ? path.join(app.getAppPath(), './public/preload.js')
        : path.join(app.getAppPath(), './build/preload.js'),
        worldSafeExecuteJavaScript: true,
			  nodeIntegration: true,
				enableRemoteModule: true,
				frame: false,
        contextIsolation: true,
    },
  });

	// Loading a webpage inside the electron window we just created
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000' // Loading localhost if dev mode
      : `file://${path.join(__dirname, '../build/index.html')}` // Loading build file if in production
  );

	// Setting Window Icon - Asset file needs to be in the public/images folder.


	// In development mode, if the window has loaded, then load the dev tools.
  if (isDev) {
    mainWindow.webContents.on('did-frame-finish-load', () => {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    });
  }
};

// ((OPTIONAL)) Setting the location for the userdata folder created by an Electron app. It default to the AppData folder if you don't set it.
// app.setPath(
//   'userData',
//   isDev
//     ? path.join(app.getAppPath(), 'userdata/') // In development it creates the userdata folder where package.json is
//     : path.join(process.resourcesPath, 'userdata/') // In production it creates userdata folder in the resources folder
// );

// When the app is ready to load
app.whenReady().then(async () => {
  await createWindow(); // Create the mainWindow

  // If you want to add React Dev Tools
  // if (isDev) {
  //   await session.defaultSession
  //     .loadExtension(
  //       path.join(__dirname, `../userdata/extensions/react-dev-tools`) // This folder should have the chrome extension for React Dev Tools. Get it online or from your Chrome extensions folder.
  //     )
  //     .then((name) => console.log('Dev Tools Loaded'))
  //     .catch((err) => console.log(err));
  // }
}).catch((err) => console.log(err));;

// Exiting the app
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Activating the app
app.on('activate', () => {
  if (mainWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Logging any exceptions
process.on('uncaughtException', (error) => {
  console.log(`Exception: ${error}`);
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
ipcMain.handle('getAllNames', async (event,args)=>{
  db.get(`SELECT  FirstName name from Doctors`,(err,data)=>{
//  event.reply('asynchronous-reply', (err && err.message) || rows);
   console.log('data=>',data,'err=>',err, "arg=>",args)
   return data.name
})
})
// ipcMain.on('asynchronous-message', (event, arg) => {

//     db.get(`SELECT  FirstName name from Doctors`, (err, rows) => {
//       console.log(rows,'<=-----rows')
//         event.reply('asynchronous-reply', (err && err.message) || rows);
//     });
// });
ipcMain.on('getall', () => {
     db.get(`SELECT  FirstName name from Doctors`, (err, rows) => {
      console.log(rows,'<=-----rows')

    });
});


 db.get(`SELECT  * from Doctors`, (err, rows) => {
 ipcMain.handle('message', async (e,msg) => {
  console.log(msg + " recieved");
      console.log(rows,'<=-----rows')
 return rows;
    })


})