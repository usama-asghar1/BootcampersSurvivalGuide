
export default function BlogPost({title, topics}) {
    const handleChange = (event) => {
      // handle the selected value change here
    };
  
    return (
      <div className="blogTitle">
        <h1>{title}</h1>
        <div className="topicsList">
          <p>Topics covered this week: </p>
          <select onChange={handleChange}>
            {topics.map((topic, id) => (
              <option key={id} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
