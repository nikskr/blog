"use server";

import { db } from "@/src/prisma/db";
import { revalidatePath, revalidateTag, updateTag } from "next/cache";

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  await db.orm.public.Post.create({
    title,
    body,
  });

  // revalidatePath("/posts");
  // revalidateTag('posts');
  updateTag("posts");
}

export async function deletePost(id: number) {
  await db.orm.public.Post.where({ id }).delete();
}

export async function updatePost(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();

  await db.orm.public.Post.where({
    id,
  }).update({
    title,
    body,
  });
}

export async function upvotePost(id: number, votes: number) {
  await db.orm.public.Post.where({ id }).update({ votes })
  revalidatePath('/posts');
  revalidatePath(`/posts/${id}`);
}
