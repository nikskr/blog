import { cacheLife } from "next/cache";

export const getPosts = async () => {
  "use cache";
  cacheLife("hours");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }
  return response.json();
};
