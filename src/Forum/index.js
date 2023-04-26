import {useState} from "react";
import CommentList from "./commentlist.js";
import CommentForm from "./commentform.js";
import BlogPost from "./blogpost.js";
// import "./index.css";
import {useParams} from "react-router-dom";




function Forum() {
  //created comments array
  const [comments, setComments] = useState([{id: 1, author: "Donald Mouse", content: "This is the 1st comment"}, {id: 2, author: "Mickey Duck", content: "This is the 2nd comment"}]);
  const  {id} = useParams()
  return (
    <div>
  <BlogPost title= {`Week ${id}`} author="Anjali Ruth" datePosted="18-04-2023" content="I have created my first blog!"/>
  {/* call commentList and pass it the props of comments array  */}
  <CommentList comments={comments} />
  <CommentForm comments={comments} setComments={setComments}/>
  </div>
  )
}

export default Forum;