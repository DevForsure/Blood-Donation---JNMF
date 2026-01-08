import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const rows = db.prepare(`
    SELECT
      ID,
      Name,
      Phone,
      Gender,
      BloodGroup,
      DateOfBirth,
      Address,
      Sevakendra
    FROM old_data
    ORDER BY ID ASC
  `).all();

  return NextResponse.json(rows);
}
