import { Hono } from "hono";
import { handleCreateBlog, handleUpdateBlog, handleGetBlog, handleDeleteBlog, handleGetAllBlogs } from "../Controllers/blogController";

const blogRouter = new Hono();

blogRouter.get('/blog/bulk', handleGetAllBlogs)

blogRouter.get('/blog/:id', handleGetBlog)

blogRouter.post('/blog', handleCreateBlog)

blogRouter.put('/blog', handleUpdateBlog)

blogRouter.delete('/blog/:id', handleDeleteBlog)

export default blogRouter;