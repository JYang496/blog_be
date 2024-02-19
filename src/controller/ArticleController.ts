import {getRepository} from "typeorm";
import {Article} from "../entity/Article";
import {HttpCode, RespMsg, StatusStr} from "../helper/RespMsg";
import {Request, Response} from "express";

export class ArticleController {
    public static get repo(){
        return getRepository(Article)
    }

    static async findAllArticles (req,res,next) {
        let articles = []
        try {
            articles = await ArticleController.repo.find()
        } catch (e) {
            console.log('Error: while findAllArticles BD:', e)
            return res.status(400).send(new RespMsg(HttpCode.E400, StatusStr.ErrStore, e))
        }
        return res.status(200).send(new RespMsg(HttpCode.E200, StatusStr.OK, articles))
    }

    static async findOneArticle (req,res,next) {
        const {articleId} = req.params
        if (!articleId){
            return res.status(404).send(new RespMsg(HttpCode.E404, StatusStr.ErrNoObj))
        }
        let article = null
        try {
            article = await ArticleController.repo.findOneOrFail(articleId)
        } catch (e){
            console.log('Error: while findOneArticle BD:', e)
            return res.status(400).send(new RespMsg(HttpCode.E404, StatusStr.ErrStore, e))
        }
        return res.status(200).send(new RespMsg(HttpCode.E200, StatusStr.OK, article))
    }

    static async updateArticle(req, res, next){
        const {articleId} =req.params
        if (!articleId){
            return res.status(404).send(new RespMsg(HttpCode.E404, StatusStr.ErrNoObj))
        }

        let article = null
        try {
            article =await ArticleController.repo.findOneOrFail(articleId)
        } catch (e) {
            console.log('Error: while uploadArticle BD:', e)
            return res.status(400).send(new RespMsg(HttpCode.E404, StatusStr.ErrStore, e))
        }
        let {title,content} = req.body
        article.title = title
        article.content = content
        try{
            await ArticleController.repo.save(article)
        } catch (e) {
            console.log('Error while updating article in BD:', e)
            return res.status(400).send(new RespMsg(HttpCode.E400, StatusStr.ErrStore, e))
        }
        return res.status(200).send(new RespMsg())
    }

    static async uploadArticle(req:Request,res:Response,next){
        let {title,content} = req.body
        let article = new Article()
        article.title = title
        article.content = content
        try{
            await ArticleController.repo.save(article)
        } catch (e){
            console.log('Error while uploading article in BD:', e)
            return res.status(400).send(new RespMsg(HttpCode.E400, StatusStr.ErrStore, e))
        }
        return res.status(200).send(new RespMsg())

    }
}
