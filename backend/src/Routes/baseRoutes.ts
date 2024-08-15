import { Hono } from "hono"
import authRouter from "./authRoutes"
import blogRouter from "./blogRoutes"

const baseRoute = new Hono()

baseRoute.route('/api/v1',authRouter)
baseRoute.route('/api/v1',blogRouter)

export default baseRoute