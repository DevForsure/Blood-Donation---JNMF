import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();

  db.prepare(`
    INSERT INTO old_data
    (ID, Name, Phone, Gender, BloodGroup, DateOfBirth, Address, Sevakendra)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    body.id,
    body.name,
    body.phone,
    body.gender,
    body.bloodgroup,
    body.dob || null,
    body.address || null,
    body.sevakendra
  );

  return NextResponse.json({ success: true });
}
