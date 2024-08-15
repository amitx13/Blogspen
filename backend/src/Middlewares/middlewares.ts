import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Context } from "hono"
import { verify } from "hono/jwt"

export const validateUser =  async (c:Context, next: () => Promise<void>) => {
    const header = c.req.header("Authorization")
    if (!header) return c.json({ message: "No authorization token provided" }, 401)
    const token = header.split(" ")[1]
    try {
        const payload = await verify(token, c.env.JWT_SECRET)
        if (payload && typeof payload.id === "string") {
            c.set("userId", payload.id)
            return next()
        } else {
            return c.json({ error: "Unauthorized" }, 403)
        }
    } catch {
        c.status(500);
        return c.json({ error: "Internal Server Error in validate User" });
    }
}

export const generatePrismaClient = async (c:Context, next: () => Promise<void>) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate())
    c.set("prisma", prisma)
    await next()
}