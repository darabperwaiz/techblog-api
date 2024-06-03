import { Post } from "./post.model.js";


// Add post
export const addPost = async (data) => {
    let {title, description, content, category, thumbnail, slug, status} = data;
    category = category.split(',')
    const date = join(new Date, options, ' ');
    const post = new Post({title, description, content, category, thumbnail, slug, date, status})
   const savedPost =  await post.save()
   return savedPost

}


// get all post
export const getPost = async () => {
    const post = await Post.find()
    return post
}

// change status 
export const changeStatusBYId = async (postId, status) => {
    const post = await Post.findByIdAndUpdate(postId, {status: status})
    return post
}

// Delete post
export const deletePostById = async (postId) => {
    const post = await Post.findByIdAndDelete(postId);
    return post
}

// Update post
export const updatePostById = async (postId, data) => {
    const post = await Post.findByIdAndUpdate(postId, data)
    return post
}

export const findPostById = async (postId) => {
    const post = await Post.findById(postId)
    return post
}

export const findPostByCategory = async (category) => {
    const posts = await Post.find();
    let filteredPosts = posts.filter((post)=> {
        if(post.category.includes(category) === true) {
            return post;
        } 
        return false
    })
    return filteredPosts
}


// Date formatter function
function join(date, options, separator) {
    function format(option) {
       let formatter = new Intl.DateTimeFormat('en', option);
       return formatter.format(date);
    }
    return options.map(format).join(separator);
 }
 
 let options = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];

// -------------- End