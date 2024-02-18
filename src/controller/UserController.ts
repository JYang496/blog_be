import {NextFunction, Request, Response} from "express";
import {getRepository} from "typeorm";
import {User} from "../entity/User";

export class UserController {

    public static get repo(){
        return getRepository(User)
    }

    static async test(req:Request, res:Response, next:NextFunction){
        console.log("text from test")
        res.send("123")
    }

    static async create(req:Request, res:Response, next:NextFunction){

    }

    static async all (req:Request, res:Response, next:NextFunction){

    }

    static async one (req:Request, res:Response, next:NextFunction){
        res.send(`Your are in ${req.params.id} \nbingo!`)
    }

    static async update(req, res, next){

    }

    static async delete(req, res, next){

    }





}