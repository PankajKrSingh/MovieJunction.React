import { NextResponse, NextRequest } from "next/server";
import { getAll, update } from "@/lib/db";
import type { Movie } from "@/types/models";

export async function GET(req: NextRequest) {
  const { pathname } = new URL(req.url);
  const pathParts = pathname.split("/");
  const id = pathParts[pathParts.length - 1];
  const list = await getAll<Movie>("movies");
  const found = list.find((m) => String(m.id) === String(id));
  if (!found) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(found);
}

export async function PATCH(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });
  const body = (await req.json()) as Partial<Movie>;
  const updated = await update<Movie>("movies", id, body);
  if (!updated) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(updated);
}
