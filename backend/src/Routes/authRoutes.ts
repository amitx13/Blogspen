import { Hono } from "hono";
import { handleSignin, handleSignup } from "../Controllers/authController";

const authRouter = new Hono()

authRouter.post('/signup',handleSignup)

authRouter.post('/signin',handleSignin)

export default authRouter


//official Doc way 

// const authRouter = new Hono<{
//     Bindings:{
//         DATABASE_URL:string
//         SALT_STRING:string
//         JWT_SECRET:string
//     }
// }>()

// const SignupSchema = z.object({
//     email: z.string().email(),
//     username:z.string().min(3).max(20),
//     password:z.string().min(8)
// })

// authRouter.post('/signup',async (c)=>{
//     const prisma = new PrismaClient({
//         datasourceUrl:c.env.DATABASE_URL
//     }).$extends(withAccelerate()) 

//     const body = await c.req.json()

//     const parsedBody = SignupSchema.safeParse(body);

//     if(!parsedBody.success){
//         return c.json({ error: "Invalid input", details: parsedBody.error.issues }, 400);
//     }

//     async function hashPassword(password: string, salt: string): Promise<string> {
//         const utf8 = new TextEncoder().encode(`${salt}:${password}`);
    
//         const hashBuffer = await crypto.subtle.digest({name: 'SHA-256'}, utf8);
//         const hashArray = Array.from(new Uint8Array(hashBuffer));
//         return hashArray
//            .map((bytes) => bytes.toString(16).padStart(2, '0'))
//            .join('');
//     }

// try{      
//     const user = await prisma.user.create({
//         data:{
//             email:body.email,
//             username:body.username,
//             password:await hashPassword(body.password, c.env.SALT_STRING)
//         }
//     })

//     const jwt = await sign({id:user.id},c.env.JWT_SECRET)
//     return c.json({data:{email:user.email, username:user.username, password:user.password},token:jwt})
// }catch(e:any){
//     if (e.code === 'P2002') {
//         c.status(409);
//         return c.json({ error: "User with that email already exists" });
//     }
//     c.status(500);
//     return c.json({ error: "Internal Server Error" });
// }
// })