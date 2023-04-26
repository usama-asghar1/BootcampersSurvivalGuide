export default function BlogPost({title, topics}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Topics covered this week: <br/>
        {topics}</p>
        
      </div>
    )
  
  };
  