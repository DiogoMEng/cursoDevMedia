const express = require('express');

const ipcaData = require('./ipcaData/ipcaDataRouter');

const route = express.Router();

route.use(ipcaData);

module.exports = route;