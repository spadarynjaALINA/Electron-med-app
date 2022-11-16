const sqlite3 = require('sqlite3');
const isDev = require('electron-is-dev'); // To check if electron is in development mode
const path = require('path');


// Initializing a new database
const db = new sqlite3.Database(
  isDev
    ? path.join(__dirname, './db/med.db') // my root folder if in dev mode
    : path.join(process.resourcesPath, '/db/med.db'), // the resources path if in production build
  (err) => {
    if (err) {
      console.log(`Database Error: ${err}`);
    } else {
      console.log('Database Loaded');
    }
  }
);

exports.getNames=()=>{
    db.get(`SELECT  FirstName name from Doctors`,(err,data)=>{
   console.log('data=>',data,'err=>',err, "arg=>",args)
   return data.name
})
}

module.exports = { db }