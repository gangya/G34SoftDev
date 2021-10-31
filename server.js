console.log('Hello eveybody!');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const routes = express.Router();
mongoose.connect('mongodb+srv://progWeb:progWeb2022@mintic2022csoftdev.gcmug.mongodb.net/SOFTDEVCYCLE4?authSource=admin&replicaSet=atlas-l72kiw-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true');
app.use(express);

