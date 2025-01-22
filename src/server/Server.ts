import express from "express";

const server = express();

server.get("/", (req: any, res: any) => {

   res.send("Hello World!");

});

export { server };