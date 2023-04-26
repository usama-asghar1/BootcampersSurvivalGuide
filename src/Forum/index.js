import {useState} from "react";
import CommentList from "./commentlist.js";
import CommentForm from "./commentform.js";
import BlogPost from "./blogpost.js";
import "./index.css";
import {useParams} from "react-router-dom";




function Forum({data}) {
  //created comments array
  const  {id} = useParams()
  const [comments, setComments] = useState(data[id-1].pretext);
  // [{id: 1, author: "Donald Mouse", content: "This is the 1st comment"}, {id: 2, author: "Mickey Duck", content: "This is the 2nd comment"}]
  const week = data.find(week => week.id === parseInt(id));
  return (
    <div>
  <BlogPost title= {`Week ${id}`} topics={data[id-1].topics} />

  {/* call commentList and pass it the props of comments array  */}
  <CommentList comments={comments} />
  <CommentForm comments={comments} setComments={setComments}/>
  </div>
  )
}

export default Forum;