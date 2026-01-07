import { NextResponse, NextRequest } from "next/server";
import { getAll, add } from "@/lib/db";
import type { Review } from "@/types/models";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const itemType = searchParams.get("itemType");
  const itemId = searchParams.get("itemId");
  const list = await getAll<Review>("reviews");
  let filtered = list || [];
  if (itemType) filtered = filtered.filter((r) => r.itemType === itemType);
  if (itemId) filtered = filtered.filter((r) => String(r.itemId) === String(itemId));
  return NextResponse.json(filtered);
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<Review> | undefined;
  if (!body || !body.itemType || !body.itemId) return NextResponse.json({ error: "itemType and itemId required" }, { status: 400 });
  const created = await add<Review>("reviews", {
    itemType: body.itemType,
    itemId: body.itemId,
    author: body.author || "Anonymous",
    rating: body.rating || 0,
    comment: body.comment || "",
  } as Omit<Review, "id">);
  return NextResponse.json(created, { status: 201 });
}
