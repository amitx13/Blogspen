import { Context } from "hono";
import { sign } from "hono/jwt";
import { signupSchema, signinSchema } from "@amitx13/blogspen-zod-validator";

export const handleSignup = async (c:Context) => {
        const prisma = c.get("prisma")

        const body = await c.req.json()

        const parsedBody = signupSchema.safeParse(body);
 
        if(!parsedBody.success){
            return c.json({ error: "Invalid input", details: parsedBody.error.issues }, 411);
        }

        async function hashPassword(password: string, salt: string): Promise<string> {
            const utf8 = new TextEncoder().encode(`${salt}:${password}`);
        
            const hashBuffer = await crypto.subtle.digest({name: 'SHA-256'}, utf8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray
               .map((bytes) => bytes.toString(16).padStart(2, '0'))
               .join('');
        }

    try{      
        const user = await prisma.user.create({
            data:{
                email:body.email,
                username:body.username,
                password:await hashPassword(body.password, c.env.SALT_STRING)
            }
        })

        const jwt = await sign({id:user.id},c.env.JWT_SECRET)
        return c.json({data:{email:user.email},token:jwt})
    }catch(e:any){
        if (e.code === 'P2002') {
            c.status(409);
            return c.json({ error: "User with that email already exists" });
        }
		c.status(500);
		return c.json({ error: "Internal Server Error while signing up" });
    }
}

export const handleSignin = async (c:Context) => {
    const prisma = c.get("prisma")

    const body = await c.req.json()

    try{
        const parsedBody = signinSchema.safeParse(body);

        if(!parsedBody.success){
            return c.json({ error: "Invalid input", details: parsedBody.error.issues }, 411);
        }

        const user = await prisma.user.findUnique({
            where:{
                email:body.email
            }
        })

        if(!user){
            return c.json({ error: "User not found" }, 404);
        }

        async function hashPassword(password: string, salt: string): Promise<string> {
            const utf8 = new TextEncoder().encode(`${salt}:${password}`);
        
            const hashBuffer = await crypto.subtle.digest({name: 'SHA-256'}, utf8);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            return hashArray
               .map((bytes) => bytes.toString(16).padStart(2, '0'))
               .join('');
        }

        if(user.password !== await hashPassword(body.password, c.env.SALT_STRING)){
            return c.json({ error: "Invalid password" }, 401);
        }

        const jwt = await sign({id:user.id},c.env.JWT_SECRET)
        return c.json({data:{email:user.email},token:jwt})
    }catch(e){
        c.status(500);
        return c.json({ error: "Internal Server Error" });
    }
}