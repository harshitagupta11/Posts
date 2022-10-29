import * as React from "react";
import Post from "../components/Post";
import { IPost } from "../types";


export default function IndexPage() {
  const [ postList, setPostlist ] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        setPostlist(posts);
    })
  },[]);

  if (!postList) return <h1>Loading...</h1>;

  return (
    <main className="container">
      <h1>My posts</h1>
      {postList.map((post: IPost) => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
