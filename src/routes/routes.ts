import {Router} from "express"
import article from "./articles";

const routes = Router()

routes.use("/articles", article)

export default routes
