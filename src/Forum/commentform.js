import { useState } from "react";

function CommentForm({comments, setComments}) {
  const [author, setName] = useState("");
  const [content, setContent] = useState("")

  function handleSubmitButton(event) {
    event.preventDefault()
    if (author.trim() === '' || content.trim() === '') {
      alert("Comment cannot be empty!")
      return;
    }
    setComments([...comments, {author: author, content: content}])
    setName("");
    setContent("");
  }
  return (
    <div>
      <form onSubmit={handleSubmitButton}>
        <label>
          {" "}
          Author:
          <br/>
          <input required value={author}
            onChange={function (event) {
              setName(event.target.value);
            }}
          />
         
        </label>
        <br/>
        <label>
          {" "}
          <br/>
          Comment:
          <br/>
          <textarea required value={content}
            onChange={function (event) {
              setContent(event.target.value);
            }}
          />
        </label>
        <br/>
        <button type="submit" >Submit</button>
        <br/>
      </form>
    </div>
  );
}

export default CommentForm;