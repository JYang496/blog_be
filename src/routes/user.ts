import { Router } from "express";
import {UserController} from "../controller/UserController";

const router = Router()


router.get('/', UserController.all);
router.get('/:id', UserController.one);
router.put('/:id', UserController.update);
router.post('/', UserController.create);
router.delete('/:id', UserController.delete);
export default router