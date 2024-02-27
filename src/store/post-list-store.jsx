import { createContext, useCallback, useReducer, useState, useEffect } from "react"

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    addInitialPosts: () => {},
    fetching: false
})

const postListreducer = (currentPostList, action) => {
    let newPostList = currentPostList
    if (action.type === "DELETE_POST") {
        newPostList = currentPostList.filter((post) => post.id !== action.payload.postId)
    } else if (action.type === "ADD_POST") {
        newPostList = [action.payload, ...currentPostList]
    } else if (action.type === "ADD_INITIAL_POSTS" ){
        newPostList = action.payload.posts
    }
    return newPostList;

}

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListreducer, [])
    const [fetching, setFetching] = useState(false)

    const addPost = useCallback((post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post
        })
    }, [])

    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId
            },
        });
    }, [])

    const addInitialPosts = useCallback((posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {posts}
        })
    }, [])

    useEffect(() => {
        setFetching(true)
        const controller = new AbortController();
        const signal = controller.signal
        fetch('https://dummyjson.com/posts', {signal})
            .then(res => res.json())
            .then(obj => {
                addInitialPosts(obj.posts);
                setFetching(false);
            });
            return () => {
                console.log("---a----abort---")
                // controller.abort()
            }
    }, [])


    return <PostList.Provider value={{ postList, fetching, addPost, deletePost }}>
        {children}
    </PostList.Provider>
}

export default PostListProvider