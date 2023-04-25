export default function BlogPost({title, author, datePosted, content, imgSrc, imgAlt}) {
    return (
      <div>
        <h1>{title}</h1>
        <p>{author}</p>
        <p>{datePosted}</p>
        <p>{content}</p>
        <img src={imgSrc} alt={imgAlt}/>
      </div>
    )
  
  };
  // Create a component `BlogPost` (for this exercise, make it the default export in `src/components/BlogPost/index.js`) as below:
  
  // - Props:
  
  //   - `blog` which should be an object with the following shape:
  
  //     ```ts
  //     {
  //       title: string,
  //       author: string,
  //       datePosted: string,
  //       content: string,
  //       imageSrc: string,
  //       imageAlt: string,
  //     }
  //     ```
  
  //     Example:
  
  //     ```js
  //     {
  //       title: "My First Post",
  //       author: "Chris Meah",
  //       datePosted: "20/11/2019",
  //       content: `
  //         A structure used in most apps and games.
  //         It's a way to keep doing the same.
  //         While a condition is true,
  //         Or for one to twenty-two.
  //         If endless, for errors we blame
  //         ..........
  //         Loop `,
  //       imageSrc: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  //       imageAlt: "A couple of coders."
  //     }
  //     ```
  
  // - Renders:
  
  //   ![BlogPost](BlogPost.png)
  // function BlogPost({ title, author, datePosted, content, imageSrc, imageAlt }) {
  //   return (
  //     <div>
  //       <div>
  //         <h1>{title}</h1>
  //         <p>{author}</p>
  //         <p>{datePosted}</p>
  //       </div>
  //       <div>
  //         <p>{content}</p>
  //         <img src={imageSrc} alt={imageAlt}/>
  //       </div>
  //     </div>
  //   );
  // }