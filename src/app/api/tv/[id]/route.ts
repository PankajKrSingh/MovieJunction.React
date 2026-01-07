import { NextResponse, NextRequest } from "next/server";
import { getAll } from "@/lib/db";
import type { TVShow } from "@/types/models";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const list = await getAll<TVShow>("tv");
  const found = list.find((m) => String(m.id) === String(id));
  if (!found) return NextResponse.json({ error: "not found" }, { status: 404 });
  return NextResponse.json(found);
}
