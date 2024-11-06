const express = require("express");
const sql = require("mssql");

const app = express()

const config = 
{
    server: "localhost",
    dataBase: "QLTDL",
    user: "huy",
    password: "hoaQUA123!@#",
    port: 1433,
    options: {
        trusttedServerCertificate: true,
        enableArithAbort: true,
        trustedConnection: false,
        encrypt: false // Disable encryption
    },

};

async function connect() {
    sql.connect(config, err => {
        if (err) {
            console.log("connecion lost!", err);
        }
        console.log("Connection Successful!");
    });
}





module.exports = { connect };





   

