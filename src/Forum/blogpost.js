export default function BlogPost({title, topics}) {
  return (
    <div className = "blog-header">
      <h1 className = "blog-title">{title}</h1>
      <div className = "topics-list">
      <p className = "topics-list-heading">Topics covered this week: </p>
      
      <ul className="topics-list-list">
        <li>{topics[0]}</li>
        <li>{topics[1]}</li>
        <li>{topics[2]}</li>
      </ul>
      </div>
      
    </div>
  )

};