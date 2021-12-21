
import {ConfidentialClientApplication} from '@azure/msal-node'; 
import fs from 'fs';
import crypto from 'crypto';
import jwt from "jsonwebtoken";

// ##CERTIFICATE KEYS
const certThumbprint = "734F07557964BEAA1F4786513E817BB3E92BEFBB";
const privateKeySource = fs.readFileSync('./certs/certTopk8.key');
//const privateKey = Buffer.from(privateKeySource, 'base64').toString().replace(/\r/g, "").replace(/\n/g, "");

const privateKeyObject = crypto.createPrivateKey({
    key: privateKeySource,
    passphrase: "newPW!",
    format: 'pem'
});

const privateKey = privateKeyObject.export({
    format: 'pem',
    type: 'pkcs8'
});

//MSAL.js configuration
const config = {
    auth: {
        clientId: "be2ed2d6-980a-49f1-9008-c408ae495753",
        authority: "https://login.microsoftonline.com/msretailfederation.onmicrosoft.com",
        clientCertificate: {
            thumbprint: certThumbprint, // a 40-digit hexadecimal string
            privateKey: privateKey,  //46f3e425-b99a-49b8-bbea-1ead1e7c47a7 
        }
    }
};
//var client = new ConfidentialClientApplication(config);
const cca =  new ConfidentialClientApplication(config);

var tokenRequest = { 
    scopes: ["https://esd.channelinclusion.microsoft.com/"], // scopes for access token https://graph.microsoft.com/.default
};
//let response = await cca.acquireTokenByClientCredential(request);
//console.dir(response);
try {
const response = await cca.acquireTokenByClientCredential(tokenRequest);
    console.log(response.accessToken); // access token
}  catch (error) {
    console.log(JSON.stringify(error));
}

/*
let query = await fetch('https://sandamericas.channelinclusiontest.microsoft.com/channelinclusionREST.svc/v3_1', {     //getUsers example  https://graph.microsoft.com/v1.0/users
headers: {
        'Authorization': `Bearer ${response.accessToken}`,
    },
})  

// console.dir(json);
let json = await query.json();

console.log(json); */