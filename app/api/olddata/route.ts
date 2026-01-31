import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();

  db.prepare(`
    INSERT INTO old_data
    (ID, Name, Phone, Gender, BloodGroup, Year, Address, Sevakendra)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    body.id,
    body.name,
    body.phone,
    body.gender,
    body.bloodgroup,
    body.year || null,
    body.address || null, // Optional
    body.sevakendra || null // Optional
  );

  return NextResponse.json({ success: true });
}
