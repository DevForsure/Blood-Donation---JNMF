import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import twilio from "twilio";

const client = twilio(
  process.env.TWILIO_SID!,
  process.env.TWILIO_TOKEN!
);

export async function POST(req: Request) {
  const d = await req.json();

  db.prepare(`
    INSERT INTO registration
    (Name, PhoneNumber, AdharNumber, Address, Bloodgroup, Sevakendra, DateofBirth, Email, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    d.Name,
    d.PhoneNumber,
    d.AdharNumber,
    d.Address,
    d.Bloodgroup,
    d.Sevakendra,
    d.DateofBirth,
    d.Email,
    new Date().toISOString()
  );

  await client.messages.create({
    body: `Thank you ${d.Name}! Your registration for Blood Donation Camp is successful.`,
    from: process.env.TWILIO_FROM!,
    to: `+91${d.PhoneNumber}`,
  });

  return NextResponse.json({ message: "Data saved successfully!" });
}
