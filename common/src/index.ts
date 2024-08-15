import { z } from "zod";

/* auth zod validator starts */

export const signupSchema = z.object({
    email: z.string().email(),
    username:z.string().min(3).max(20),
    password:z.string().min(8)
})

export const signinSchema = z.object({
    email:z.string().email(),
    password:z.string().min(8)
})

export type SignupSchema = z.infer<typeof signupSchema>
export type SigninSchema = z.infer<typeof signinSchema>

/* auth zod validator ends */

/* Blogpost zod validator starts */

export const blogPostSchema = z.object({
    title:z.string().min(3).max(100),
    content:z.string(),
    tags:z.array(z.string())
})

export const updateBlogSchema = z.object({
    id:z.string(),
    title:z.string().min(3).max(100),
    content:z.string(),
    tags:z.array(z.string())
})

export const getBlogSchema = z.object({
    id:z.string()
})

export const deleteBlogSchema = z.object({
    id:z.string()
})

export type BlogPostSchema = z.infer<typeof blogPostSchema>
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>
export type GetBlogSchema = z.infer<typeof getBlogSchema>
export type DeleteBlogSchema = z.infer<typeof deleteBlogSchema>

/* Blogpost zod validator ends */
