import { NextResponse } from "next/server";
import { getAll } from "@/lib/db";
import type { TVShow } from "@/types/models";

export async function GET() {
  const list = await getAll<TVShow>("tv");
  return NextResponse.json(list);
}
