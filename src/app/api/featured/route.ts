import { NextResponse } from "next/server";
import { getAll } from "@/lib/db";
import type { Movie } from "@/types/models";

export async function GET() {
  const list = await getAll<Movie>("movies");
  const featured = (list || []).filter((m) => m.featured);
  return NextResponse.json(featured);
}
