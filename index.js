const jsonServer = require('json-server');
require("dotenv").config();
const server = jsonServer.create();
const port = process.env.PORT || 3001;
console.log(process.env.PORT);
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);


server.listen(port,() =>{
    console.log(`Server running on port ${port}`);
})

