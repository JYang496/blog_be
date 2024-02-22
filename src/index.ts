import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as cors from 'cors'
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import routes from "./routes/routes";
import {Article} from "./entity/Article";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(cors());
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3800);
    app.use("/",routes)

    // insert new users for test
    // await connection.manager.save(connection.manager.create(Article, {
    //     title: "title 1",
    //     content:"<p>content<p>"
    // }));
    // await connection.manager.save(connection.manager.create(Article, {
    //     title: "title 2",
    //     content:"<p>content<p>"
    // }));

    console.log("Express server has started on port 3800. Open http://localhost:3800/articles to see results");

}).catch(error => console.log(error));
