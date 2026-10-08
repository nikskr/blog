import { fetchOnePost } from "@/lib/utils";
import { db } from "@/src/prisma/db";
import { notFound } from "next/navigation";
import React from "react";

interface PostPageProps {
  params: Promise<{ id: string; }>
}

const PostPage = async ({ params }: PostPageProps) => {
  const { id: strId } = await params;
  const postId = Number(strId);

  // const post = await prisma.post.findUnique({
  //   where: {
  //     id: Number(id),
  //   },
  // });
  const post = await fetchOnePost(postId);
  // const response = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${id}`,
  // );
  // const post = await response.json();

  if (!post) {
    notFound();
  }

  return (
    <article className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>
        <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
      </div>
    </article>
  );
};

export default PostPage;
