"use server";

import { revalidatePath, updateTag } from "next/cache";

export async function createPost(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();

  await prisma.post.create({
    data: {
      title,
      content,
    },
  });

  // revalidatePath("/posts");
  updateTag("posts");
}

export async function deletePost(id: number) {
  await prisma.post.delete({
    where: {
      id,
    },
  });
}

export async function updatePost(id: number, formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();

  await prisma.post.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
}

export async function upvotePost(id: number) {
  //upvote logic
}
