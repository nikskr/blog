import { db } from "@/src/prisma/db";

export async function GET() {
  const posts = await db.orm.public.Post.all();

  return Response.json({ posts });
}

export async function POST(request: Request) {
  const { title, body } = await request.json();

  const post = await db.orm.public.Post.create({
    title,
    body,
  });

  return Response.json({ post });
}
