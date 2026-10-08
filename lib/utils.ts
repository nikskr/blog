import { db } from "@/src/prisma/db";
import { cacheLife, cacheTag } from "next/cache";

export const getPosts = async () => {
  "use cache";
  cacheLife("hours");
  // cacheTag("posts");
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error(`Server error: ${response.status}`);
  }
  return response.json();
};

export async function fetchAllPosts() {
  "use cache";
  cacheTag('posts');
  return await db.orm.public.Post.all();
}

export async function fetchOnePost(postId: number) {
  return await db.orm.public.Post.where({ id: postId }).first();
}
