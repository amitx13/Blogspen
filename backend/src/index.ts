import { Hono } from "hono";
import { generatePrismaClient, validateUser } from "./Middlewares/middlewares";
import baseRoute from "./Routes/baseRoutes";
import { cors } from "hono/cors";


const app = new Hono();

app.use("/*",cors())
app.use("/api/v1/blog/*",validateUser)
app.use("/api/v1/*",generatePrismaClient)

app.route("/",baseRoute)

app.all("*",(c) => {
    return c.json({message:"Internal Server Error: No such route present"},404);
})

export default app