import {useState} from "react";
import CommentList from "./commentlist.js";
import CommentForm from "./commentform.js";
import BlogPost from "./blogpost.js";



function Forum() {
  //created comments array
  const [comments, setComments] = useState([{id: 1, author: "Donald Mouse", content: "This is the 1st comment"}, {id: 2, author: "Mickey Duck", content: "This is the 2nd comment"}]);
  return (
    <div>
  <BlogPost title="My First Post" author="Anjali Ruth" datePosted="18-04-2023" content="I have created my first blog!" imgSrc="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" imgAlt="A couple of coders"/>
  {/* call commentList and pass it the props of comments array  */}
  <CommentList comments={comments} />
  <CommentForm comments={comments} setComments={setComments}/>
  </div>
  )
}

export default Forum;