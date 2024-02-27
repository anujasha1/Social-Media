import { useContext, useRef } from "react"
import { PostList } from "../store/post-list-store";

const CreatePost = () => {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    userIdElement.current.value = ""
    postTitleElement.current.value = ""
    postBodyElement.current.value = ""
    reactionsElement.current.value = ""
    tagsElement.current.value = ""


    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags
      })
    })
      .then(res => res.json())
      .then(post => addPost(post));

  }

  return (<>
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your user id here</label>
        <input type="text" className="form-control" id="userId" ref={userIdElement} />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" placeholder="How are you feeling today..." ref={postTitleElement} />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea type="text" rows="4" className="form-control" id="body" placeholder="Tell us more about it" ref={postBodyElement} />
      </div>

      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">Reactions</label>
        <input type="text" className="form-control" id="reaction" placeholder="How are people reacted to this post..." ref={reactionsElement} />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" placeholder="Please enter tags using space" ref={tagsElement} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form></>)
}

export default CreatePost