import { createPost } from "@/actions/actions";
import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import UpvoteBtn from "@/components/upvote-btn";
import { fetchAllPosts, getPosts } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

type PostType = {
  id: number;
  title: string;
  body: string | null;
  authorId: number | null;
  createdAt: string;
  updatedAt: string;
  votes: number;
};



export default async function PostsPage() {
  const posts = await fetchAllPosts();
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl font-mono">
          Posts
        </h1>
        <ul className="space-y-3">
          {Array.isArray(posts) &&
            posts.slice(0, 5).map((post: PostType) => (
              <li key={post.id}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Link
                    href={`posts/${post.id}`}
                    className="text-lg font-semibold text-zinc-950 hover:text-zinc-500"
                  >
                    {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                  </Link>
                  <UpvoteBtn postId={post.id} votes={post.votes} />
                </div>
              </li>
            ))}
        </ul>
        <Suspense fallback={<p>Loading recently viewed posts...</p>}>
          <RecentlyViewedPosts />
        </Suspense>
      </section>
      <section className="space-y-4 border-t border-zinc-300 pt-6">
        <h2 className="text-xl font-semibold text-zinc-950">New post</h2>
        <form action={createPost} className="space-y-4">
          <label className="block space-y-2">
            <span className="text-sm font-meduim text-zinc-700">Title</span>
            <input
              name="title"
              type="text"
              required
              className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 text-zinc-950 transition-colors focus:border-zinc-500"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-meduim text-zinc-700">Content</span>
            <textarea
              name="body"
              required
              className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 text-zinc-950 transition-colors focus:border-zinc-500"
            />
          </label>
          <button
            type="submit"
            className="p-3 bg-zinc-950 text-zinc-100 rounded-md"
          >
            Create
          </button>
        </form>
      </section>
    </div>
  );
}
