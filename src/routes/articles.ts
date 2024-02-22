import { Router } from "express";
import {ArticleController} from "../controller/ArticleController";

const router = Router()

router.get('/',ArticleController.findAllArticles)
router.get('/:articleId',ArticleController.findOneArticle)
router.post('/',ArticleController.uploadArticle)
router.put('/:articleId',ArticleController.updateArticle)

export default router
