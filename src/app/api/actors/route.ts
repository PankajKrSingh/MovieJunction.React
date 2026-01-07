import { NextResponse, NextRequest } from "next/server";
import { getAll, add } from "@/lib/db";
import type { Actor } from "@/types/models";

export async function GET() {
  const list = await getAll<Actor>("actors");
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const body = (await req.json()) as Partial<Actor> | undefined;
  if (!body || !body.name)
    return NextResponse.json({ error: "name required" }, { status: 400 });
  const created = await add<Actor>("actors", {
    name: body.name,
    img: body.img || "/images/actor-1.svg",
    knownFor: body.knownFor || "",
  } as Omit<Actor, "id">);
  return NextResponse.json(created, { status: 201 });
}
