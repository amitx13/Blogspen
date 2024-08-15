import { blogPostSchema, deleteBlogSchema, getBlogSchema, updateBlogSchema } from "@amitx13/blogspen-zod-validator";
import { PrismaClient } from "@prisma/client/edge";
import { Context } from "hono";

export const handleCreateBlog = async (c:Context) => {
    const prisma = c.get("prisma") as PrismaClient
    const userId = c.get("userId") as string

    const body = await c.req.json()
    const parsedBody = blogPostSchema.safeParse(body)
    if(!parsedBody.success){
        return c.json({error:"Invalid input",details:parsedBody.error.issues},411)
    }
    const {title,content,tags} = body

    try{
        const blog = await prisma.post.create({
            data:{
                title,
                content,
                tags,
                published:true,
                authorId:userId
            }
        })
        return c.json({Id:blog.id})
    }
    catch(e){
        c.json({error:"Internal Server Error While Creating a BlogPost"},500)
    }
}

export const handleUpdateBlog = async (c:Context) => {
    const prisma = c.get("prisma") as PrismaClient
    const userId = c.get("userId") as string

    const body = await c.req.json()
    const parsedBody = updateBlogSchema.safeParse(body)
    if(!parsedBody.success){
        return c.json({error:"Invalid input",details:parsedBody.error.issues},411)
    }
    const {title,content,tags} = body

    try{
        const blog = await prisma.post.findUnique({
            where:{
                id:body.id,
                authorId:userId  
            }
        })
        if(blog != null){
            const updateBlogPost = await prisma.post.update({
                where:{
                    id:body.id,
                    authorId:userId
                },
                data:{
                    title,
                    content,
                    tags
                }
            })
            return c.json({Id:updateBlogPost})
        }
        return c.json({message:"Not Found"},404)
    }
    catch(e){
        c.json({error:"Internal Server Error While Updating a BlogPost",e},500)
    }
}

export const handleGetBlog = async (c:Context) => {
    const prisma = c.get("prisma") as PrismaClient
    const userId = c.get("userId") as string
    const param = c.req.param()
    const parsedBody = getBlogSchema.safeParse(param)
    if(!parsedBody.success){
        return c.json({error:"Invalid input",details:parsedBody.error.issues},400)
    }
    try{
        const blog = await prisma.post.findUnique({
            where:{
                id:param.id,
                authorId:userId
            }
        })
        if(blog != null){
            return c.json(blog)
        }
        return c.json({message:"Not Found"},404)
    }
    catch(e){
        c.json({error:"Internal Server Error While Getting a BlogPost"},500)
    }

}

//Todo: Add Pagination
export async function handleGetAllBlogs(c:Context){
    const prisma = c.get("prisma") as PrismaClient
    const userId = c.get("userId") as string
    try{
        const blogs = await prisma.post.findMany({
            where:{
                authorId:userId
            }
        })
        if(blogs.length > 0){
            return c.json(blogs)
        }
        return c.json({message:"Not Found"},404)
    }
    catch(e){
        c.json({error:"Internal Server Error While Getting all BlogPosts"},500)
    }
}

export const handleDeleteBlog = async (c:Context) => {
    const prisma = c.get("prisma") as PrismaClient
    const userId = c.get("userId") as string
    const parma = c.req.param()
    const parsedBody = deleteBlogSchema.safeParse(parma)
    if(!parsedBody.success){
        return c.json({error:"Invalid input",details:parsedBody.error.issues},411)
    }
    try{
        const blog = await prisma.post.delete({
            where:{
                id:parma.id,
                authorId:userId
            }
        })
        return c.json(blog)
    }
    catch(e){
        c.json({error:"Internal Server Error While Deleting a BlogPost"},500)
    }
}