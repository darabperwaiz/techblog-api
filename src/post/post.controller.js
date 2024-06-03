import { addPost, getPost, changeStatusBYId, deletePostById, updatePostById, findPostById, findPostByCategory } from "./post.repository.js";

export const add = async (req, res) => {
    const newpost = await addPost(req.body)
    return res.status(201).send({
        success: true,
        data: newpost
    })
}

export const getAll = async (req, res) => {
    const posts = await getPost()
    return res.status(200).send({
        success: true,
        posts
    })
}

export const updatePost = async (req, res) => {
    const {id} = req.params
    const updatedPost = updatePostById(id, req.body)
    return res.status(200).send({success: true, status: "Post updated successfully!"})
}

export const changeStatusById = async (req, res) => {
    const {id} = req.params
    const {status} = req.body
    await changeStatusBYId(id, status);
    return res.status(200).send({status: true, message: "Post Published Successfully!"})
}

export const getSinglePost = async (req, res) => {
    const {id} = req.params
    const post = await findPostById(id)
    return res.status(200).send(post)
}

export const deletePost = async (req, res) => {
    const {id} = req.params;
    await deletePostById(id);
    return res.status(200).send({success: true, message: "Post Deleted Successfully!"})
}

export const filterByCategory = async (req, res) => {
    const {category} = req.query
    const posts = await findPostByCategory(category)

    if(posts.length == 0) {
        return res.status(404).send({message: "Post not found"})
    }else {
        return res.status(200).send(posts)
    }

    
}