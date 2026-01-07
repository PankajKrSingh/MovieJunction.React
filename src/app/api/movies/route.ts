import { NextResponse, NextRequest } from "next/server";
import { getAll, add } from "@/lib/db";
import type { Movie } from "@/types/models";

export async function GET() {
  const list = await getAll<Movie>("movies");
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<Movie> | undefined;
  if (!body || !body.title)
    return NextResponse.json({ error: "title required" }, { status: 400 });
  const created = await add<Movie>("movies", {
    title: body.title,
    img: body.img || "/images/movie-poster.svg",
    rating: body.rating ?? 0,
    meta: body.meta || "",
    desc: body.desc || "",
    featured: !!body.featured,
  } as Omit<Movie, "id">);
  return NextResponse.json(created, { status: 201 });
}
