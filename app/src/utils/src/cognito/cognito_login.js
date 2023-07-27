const jwt = require("jsonwebtoken");
const cognito = require("amazon-cognito-identity-js");
const error_codes = require("../error/codes")

module.exports = (username, password) => {

    return new Promise((resolve, reject) => {
        const authenticationDetails = new cognito.AuthenticationDetails({
            Username : username,
            Password : password
        });
    
        const userPool = new cognito.CognitoUserPool({ 
            UserPoolId : process.env.COGNIT_POOL_ID,
            ClientId : process.env.COGNITO_CLIENT_ID
        });
    
        const cognitoUser = new cognito.CognitoUser({
            Username : username,
            Pool : userPool
        });

        cognitoUser.authenticateUser(authenticationDetails, {
            onSuccess: function (result) {
                let access_token = result.getAccessToken().getJwtToken(); // Para uso interno na aws
                let id_token = result.idToken.jwtToken; // Para uso externo da aplicação

                const decode_id_token = jwt.decode(id_token);
                if(decode_id_token.email_verified) { resolve(decode_id_token); }
                reject({error: 403, code: 403, info: "User is not verified."});
            },
    
            onFailure: function(err) {
                reject({error: err.code, code: error_codes[403].code, info: error_codes[403].info})
            },
        });
    })
};