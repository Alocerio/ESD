# ESD-AAD-TEST
AAD test  // Air Computers 

#### RUN: ~$npm install   ~$node app.js 
-----------------------------------------------------------------------------------------------------------------------------------------
###Metodo POST

AAD Request : (Sandbox)

POST https://login.microsoftonline.com/msretailfederationppe.onmicrosoft.com/oauth2/token HTTP/1.1

Content-Type: application/x-www-form-urlencoded

client-request-id: 0f72e8d8-0917-4998-a376-63f2f8f998e6

return-client-request-id: true

Host: login.microsoftonline.com

Content-Length: 1020

Connection: Keep-Alive

resource=https%3A%2F%2Fsandbox.esd.channelinclusion.microsoft.com%2F&client_id=2113764a-9913-4c8a-9707-a235169e114c&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=eyJhbGciOiJSUzI1NiIsIng1dCI6Ik1qVTJ6TmVsTW81WFZFSTZxYkIwZWZkZzY0TSJ9.eyJhdWQiOiJodHRwczpcL1wvbG9naW4ubWljcm9zb2Z0b25saW5lLmNvbVwvbXNyZXRhaWxmZWRlcmF0aW9ucHBlLm9ubWljcm9zb2Z0LmNvbVwvb2F1dGgyXC90b2tlbiIsImV4cCI6MTUyNjI5MjExMiwiaXNzIjoiMjExMzc2NGEtOTkxMy00YzhhLTk3MDctYTIzNTE2OWUxMTRjIiwianRpIjoiODllY2Q2NmUtOGFhNS00NmY5LWJjNTAtOGE0NWI2ZmU2NmQwIiwibmJmIjoxNTI2MjkxNTEyLCJzdWIiOiIyMTEzNzY0YS05OTEzLTRjOGEtOTcwNy1hMjM1MTY5ZTExNGMifQ.z5xD0BEkS_smclr6C09kE5M5raE3tCNfDSJpS730MgGV9ZkfCITYWEV-oluPA2i28kCD96NxXVFA5WQX5TwbqRPRneVfIT6mtFYEp32oiDzx6jbBvm81P_niU9piBGuaJk-0dkVhABDMa40n-ZQJesm0x3qxUxRvort-Hb-uSzsyYIGNHOm4xbMIXKxi8j3HZadyQyln8o2zOh1zs9KOYQIWeJTTKIgrjCMaFwGwrjP-KvWQtmGRf5krG3ZPJzjmxFjg-TBHMfOUf-dpQJ2y4cgXzridvLL_1tABw4_pUMtl_hfTPdR-Nj21_GH7Q6ptlxWTPhD3oHU_kq53u686gw&grant_type=client_credentials

---------------------------------------------------------------------------

## Docs
- https://microsoft.sharepoint.com/teams/DPDIntegration/ESD/Pages/Authentication.aspx
- https://www.youtube.com/watch?v=ofv4YRb-Jbk&t=2109s&ab_channel=MicrosoftDevRadio
- https://www.npmjs.com/package/@azure/msal-node
- https://jwt.io/
