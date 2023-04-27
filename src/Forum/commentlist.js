import Comment from "./comment.js"; 

function CommentList({comments, data}) {
  return (
    <div id="CommentList">
    {/* loop over the comments array and give each comment the prop of id, author and content */}
    <p className = "forumTitle">Forum for this week:</p>
    {comments.map((comment)=> 
    <Comment key={comment.id} author={comment.author} content={comment.content} />
    )}</div>)

}

export default CommentList
