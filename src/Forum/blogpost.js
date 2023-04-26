/*
export default function BlogPost({ title, topics }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>Topics covered this week:</p>
      <ul> 
      <li>{topics[0]}</li>
      <li>{topics[1]}</li>
      <li>{topics[2]}</li>
    
      </ul>
    </div>
  );
}
*/

export default function BlogPost({title, topics}) {
    return (
      <div className = "blogTitle">
        <h1>{title}</h1>
        <p>Topics covered this week: </p>
        
        <ul className = "topicsList">
          <li>{topics[0]}</li>
          <li>{topics[1]}</li>
          <li>{topics[2]}</li>
        </ul>
        
      </div>
    )
  
  };
 
