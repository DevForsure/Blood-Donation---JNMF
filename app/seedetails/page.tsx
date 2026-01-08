"use client";

import { useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "./seedetails.css";

type Donor = {
  Id: number;
  Name: string;
  PhoneNumber: string;
  AdharNumber: string;
  Address: string;
  Bloodgroup: string;
  Sevakendra: string;
  DateofBirth: string;
  Email?: string;
};

export default function SeeDetailsPage() {
  const [donors, setDonors] = useState<Donor[]>([]);

  async function loadData() {
    const res = await fetch("/api/donors");
    const data = await res.json();
    setDonors(data);
  }

  function printPDF() {
    const doc = new jsPDF({
      orientation: "landscape",
      unit: "pt",
      format: "a4",
    });

    doc.setFontSize(16);
    doc.setFont("helvetica", "bold");
    doc.text(
      "Jagadguru Ramanandacharya Narendracharya Maharaj Foundation",
      doc.internal.pageSize.getWidth() / 2,
      40,
      { align: "center" }
    );

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(
      "(Bhandewadi Sevakendra)",
      doc.internal.pageSize.getWidth() / 2,
      60,
      { align: "center" }
    );

    const currentDate = new Date().toLocaleDateString();
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.text("Donor Registration Detail", 40, 90);
    doc.text(
      currentDate,
      doc.internal.pageSize.getWidth() - 40,
      90,
      { align: "right" }
    );

    autoTable(doc, {
      startY: 110,
      head: [[
        "ID",
        "Name",
        "Phone",
        "Adhar",
        "Address",
        "Blood Group",
        "Sevakendra",
        "DOB",
        "Email",
      ]],
      body: donors.map(d => [
        d.Id,
        d.Name,
        d.PhoneNumber,
        d.AdharNumber,
        d.Address,
        d.Bloodgroup,
        d.Sevakendra,
        d.DateofBirth,
        d.Email || "",
      ]),
      styles: { fontSize: 10 },
    });

    doc.save("donor_details.pdf");
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
          <div className="header-title">See Details</div>
          <Link href="/dashboard" className="home-link">
            Home
            <img src="/home-icon_1076610-21321.avif" />
          </Link>
        </div>
      </header>

      <div className="button-bar">
        <button className="btn view-btn" onClick={loadData}>
          View
        </button>
        <button className="btn print-btn" onClick={printPDF}>
          Download Report
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Adhar</th>
            <th>Address</th>
            <th>Blood Group</th>
            <th>Sevakendra</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((d) => (
            <tr key={d.Id}>
              <td>{d.Id}</td>
              <td>{d.Name}</td>
              <td>{d.PhoneNumber}</td>
              <td>{d.AdharNumber}</td>
              <td>{d.Address}</td>
              <td>{d.Bloodgroup}</td>
              <td>{d.Sevakendra}</td>
              <td>{d.DateofBirth}</td>
              <td>{d.Email || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
