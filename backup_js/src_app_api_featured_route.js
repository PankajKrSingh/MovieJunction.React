import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ error: "migrated to TypeScript" }, { status: 410 });
}
