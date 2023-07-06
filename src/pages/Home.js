// import React, { useEffect, useState } from "react";
// import Post from "./Post";

// import { useRouter } from "next/router";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );

//       const jsonResponse = await response.json();

//       if (response.ok) {
//         setPosts(jsonResponse);
//         setError("");
//         // console.log(jsonResponse);
//       }

//       if (!response.ok) {
//         setError(jsonResponse.error);
//         // console.log(error);
//       }
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="container m-auto mt-14 ">

//       {/* ------------------- Conditional Rendering ------------------------------------------ */}

//       {posts &&
//         posts.map((post) => {
//           return <Post post={post} key={post.id} />;
//         })}
//       {error && <h3>{error}</h3>}
//     </div>
//   );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import Post from "./Post";

import { useRouter } from "next/router";

function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        setPosts(jsonResponse);
        setError("");
      } else {
        setError("Error fetching posts");
      }
    } catch (error) {
      setError("Error fetching posts");
    }
  };

  const handleInputChange = (event) => {
    setNewPost({ ...newPost, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );
      if (response.ok) {
        const createdPost = await response.json();
        console.log(createdPost);
        setPosts([...posts, createdPost]);
        setNewPost({ title: "", body: "" });
      } else {
        setError("Error creating post");
      }
    } catch (error) {
      setError("Error creating post");
    }
  };

  return (
    <div className="container m-auto mt-14">
      {/* ------------------- Conditional Rendering ------------------------------------------ */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          value={newPost.title}
          onChange={handleInputChange}
          placeholder=" Title"
        />
        <br></br>
        <input
          name="body"
          value={newPost.body}
          onChange={handleInputChange}
          placeholder=" Body"
        ></input>
        <button
          type="submit"
          className="bg-blue-600 px-3 rounded-[5px] text-white ml-3"
        >
           Add Post
        </button>
      </form>

      {posts &&
        posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      {error && <h3>{error}</h3>}
    </div>
  );
}

export default Home;
