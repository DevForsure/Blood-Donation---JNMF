import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const rows = db.prepare(`
    SELECT Bloodgroup as label, COUNT(*) as count
    FROM registration
    GROUP BY Bloodgroup
  `).all();

  const total = rows.reduce((s: number, r: any) => s + r.count, 0);

  return NextResponse.json({
    data: rows,
    total,
    target: 200,
  });
}
