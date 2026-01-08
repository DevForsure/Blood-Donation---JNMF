import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  const rows = db.prepare(`
    SELECT
      Id,
      Name,
      PhoneNumber,
      AdharNumber,
      Address,
      Bloodgroup,
      Sevakendra,
      DateofBirth,
      Email
    FROM registration
  `).all();

  return NextResponse.json(rows);
}
