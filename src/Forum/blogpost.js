
export default function BlogPost({title, topics}) {
    return (
      <div className = "blogTitle">
        <h1>{title}</h1>
        <div className = "topicsList">
        <p>Topics covered this week: </p>
        
        <ul className="list">
          <li>{topics[0]}</li>
          <li>{topics[1]}</li>
          <li>{topics[2]}</li>
        </ul>
        </div>
      </div>
    )
  
  };
 
