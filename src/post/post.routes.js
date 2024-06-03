import express from 'express'
import { add, getAll, changeStatusById, deletePost, updatePost, getSinglePost, filterByCategory } from "./post.controller.js"

const postRouter = express.Router()

postRouter.put('/update/:id', updatePost)
postRouter.post('/status/:id', changeStatusById)
postRouter.post('/add', add)
postRouter.get('/', getAll)
postRouter.get('/filter', filterByCategory)
postRouter.get('/:id', getSinglePost)
postRouter.delete('/delete/:id', deletePost)


export default postRouter