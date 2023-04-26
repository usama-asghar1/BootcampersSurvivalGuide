export default function BlogPost({title, topics, datePosted, content}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>Topics covered this week: <br/>
        {topics}</p>
        <p>{datePosted}</p>
        <p>{content}</p>
        
      </div>
    )
  
  };
  