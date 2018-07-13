
//=============================
// Puerto
//=============================

process.env.PORT = process.env.PORT || 8090;

//==========
//Entorno
//=========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

//===============
// Base de Datos
//================

let urlDB;

if (process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else {
    urlDB = 'mongodb://cafe-user:ds133621@ds133621.mlab.com:33621/cafe';
}

process.env.URLDB = urlDB;


