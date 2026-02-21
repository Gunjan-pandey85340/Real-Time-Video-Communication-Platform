let IS_PROD = true;

const server = IS_PROD ?
    "https://videocommunicationplatform-backend.onrender.com" :

    "https://localhost:8080" 



export default server;

