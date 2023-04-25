function Comment({ author, content }) {
    let initials = author
      .split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase();
    if (initials.length > 2) {
      initials = initials.slice(0, 1) + initials.slice(-1);
    }
    return (
      <container>
        <div id="inline_name">
          <h3 className="initials">{initials}</h3>
          <h3>{author}</h3>
        </div>
        <div>
          <p>{content}</p>
        </div>
      </container>
    );
  }
  
  export default Comment;