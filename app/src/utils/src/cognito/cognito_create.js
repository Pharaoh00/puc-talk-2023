const aws = require("aws-sdk");
const error_codes = require("../error/codes")

module.exports = (username, password, name, email) => {
    return new Promise((resolve, reject) => {
        let cognitoidentityserviceprovider = new aws.CognitoIdentityServiceProvider({apiVersion: process.env.API_VERSION});
        
        var params = {
            ClientId: process.env.COGNITO_CLIENT_ID,
            Username: username,
            Password: password,
            UserAttributes: [
                {
                    Name: 'name', 
                    Value: name
                }, 
                {
                    Name: 'email', 
                    Value: email
                },
            ]
        }
    
        cognitoidentityserviceprovider.signUp(params, (err, data) => {
            if (err){ reject({error: err.code, code: error_codes[403].code, info: error_codes[403].info}) }
            console.log(data);
            resolve(data);
        })
    })
};