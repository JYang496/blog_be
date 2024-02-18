import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes/routes";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    app.use("/",routes)

    // setup express app here
    // ...

    // start express server
    app.listen(8000);


    console.log("Express server has started on port 8000. Open http://localhost:8000/users to see results");

}).catch(error => console.log(error));
