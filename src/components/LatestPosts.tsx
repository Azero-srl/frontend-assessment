import { useEffect, useState } from "react";

// TODO: This component should match the following figma design:
// https://www.figma.com/file/yArz6JS1cYHLV43pXE22GS?type=design&node-id=2-157
export default function LatestPosts(): JSX.Element {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsRequest = await fetch(
        "https://dummyjson.com/posts?limit=4&skip=10&select=title,body,tags",
      );
      const { posts: dataPosts } = await postsRequest.json();
      console.log("Posts", dataPosts);
      setPosts(dataPosts);
    };

    if (!posts.length) {
      getPosts();
    }
  }, []);

  return <div></div>;
}
