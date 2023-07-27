require('dotenv').config()
const internal = require("internal-utils");
const express = require('express');
const path = require('path');
const routes = require("./src/api/routes_index");

const app = express();
const port = process.env.BACKEND_PORT;
global.app_root = path.resolve(__dirname);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes); // Usando todas as rotas cadastras em src/api

// App client name: CognitoTest1AppClientName
// User pool name: CognitoTest1
// User pool ID: us-east-1_EbLXFuwM1

// Client ID: jcr1tpif3ralas1quni6hhvs3
// App client name: CognitoTest1AppClientName

// https://cognito-idp.us-east-1.amazonaws.com/us-east-1_EbLXFuwM1/.well-known/jwks.json

internal.redis.initialize();

app.listen(port, () => {
  console.log(`Backend started at port: ${port}`);
})