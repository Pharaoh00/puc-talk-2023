const aws = require("aws-sdk");

module.exports = (confirmation_code, username) => {
    return new Promise((resolve, reject) => {
        const cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({apiVersion: process.env.API_VERSION});
        
        const params = {
            ClientId: process.env.COGNITO_CLIENT_ID,
            ConfirmationCode: confirmation_code,
            Username: username, /* required */
        
          };
          cognitoidentityserviceprovider.confirmSignUp(params, function(err, data) {
            if (err){ reject({error: err.code, code: 403, info: ""}) };
            resolve(data);
        });
    })
}