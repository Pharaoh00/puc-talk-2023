const aws = require("aws-sdk");

aws.config.update({region: process.env.AWS_REGION})