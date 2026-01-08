"use client";

import { useState } from "react";
import Link from "next/link";
import "./messagesend.css";

type OldDonor = {
  ID: number;
  Name: string;
  Phone: string;
  Gender: string;
  BloodGroup: string;
  DateOfBirth?: string;
  Address?: string;
  Sevakendra: string;
};

export default function MessageSendPage() {
  const [rows, setRows] = useState<OldDonor[]>([]);
  const [loadingId, setLoadingId] = useState<number | null>(null);

  async function loadData() {
    const res = await fetch("/api/olddata/list");
    const data = await res.json();
    setRows(data);
  }

  async function sendMessage(id: number) {
    setLoadingId(id);

    const res = await fetch("/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    setLoadingId(null);

    if (!res.ok) {
      alert(data.error || "Failed to send message");
      return;
    }

    alert("Message sent successfully!");
  }

  return (
    <>
      <header>
        <div className="logo-section">
          <img
            src="/positive-blood-group-3d-icon-png-download-4897215.webp"
            className="logo-img"
          />
          <div className="logo-text">
            <div className="top">Blood</div>
            <div className="bottom">Donation</div>
          </div>
        </div>

        <div className="header-right">
          <div className="header-title">Message Send</div>
          <Link href="/dashboard" className="home-link">
            Home
            <img src="/home-icon_1076610-21321.avif" />
          </Link>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Sevakendra</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.ID}>
              <td>{r.ID}</td>
              <td>{r.Name}</td>
              <td>{r.Phone}</td>
              <td>{r.Gender}</td>
              <td>{r.BloodGroup}</td>
              <td>{r.DateOfBirth || ""}</td>
              <td>{r.Address || ""}</td>
              <td>{r.Sevakendra}</td>
              <td>
                <button
                  className="btn send-btn"
                  disabled={loadingId === r.ID}
                  onClick={() => sendMessage(r.ID)}
                >
                  {loadingId === r.ID ? "Sending..." : "Send Message"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn view-btn" onClick={loadData}>
        View
      </button>
    </>
  );
}
