"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./registration.css";

export default function RegistrationPage() {
  const [id, setId] = useState<number>(1);
  const [form, setForm] = useState<any>({});
  const [success, setSuccess] = useState(false);

  // 🔹 Load first ID
  useEffect(() => {
    fetchNextId();
  }, []);

  async function fetchNextId() {
    const res = await fetch("/api/get-next-number", { method: "POST" });
    const data = await res.json();
    if (data?.next) setId(data.next);
  }

  function update(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: any) {
    e.preventDefault();

    const required = [
      "Name",
      "PhoneNumber",
      "Address",
      "Bloodgroup",
      "Sevakendra",
      "DateofBirth",
    ];

    const missing = required.filter((r) => !form[r]);
    if (missing.length) {
      alert("Please fill required fields");
      return;
    }

    const res = await fetch("/api/registration", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, ID: id }),
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess(true);
      setForm({});
      fetchNextId();
      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert(data.error || "Error saving data");
    }
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
          <div className="header-title">Donation Registration</div>
          <Link href="/dashboard" className="home-link">
            Home
            <img src="/home-icon_1076610-21321.avif" />
          </Link>
        </div>
      </header>

      <form onSubmit={submit}>
        <label>Enter ID<span className="required">*</span></label>
        <input value={id} readOnly />

        <label>Enter Name<span className="required">*</span></label>
        <input name="Name" onChange={update} />

        <label>Enter Phone Number<span className="required">*</span></label>
        <input name="PhoneNumber" maxLength={10} onChange={update} />

        <label>Enter Aadhaar Number</label>
        <input name="AdharNumber" maxLength={12} onChange={update} />

        <label>Address<span className="required">*</span></label>
        <textarea name="Address" onChange={update} />

        <label>Blood Group<span className="required">*</span></label>
        <select name="Bloodgroup" onChange={update}>
          <option value="">Select</option>
          {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(bg => (
            <option key={bg}>{bg}</option>
          ))}
        </select>

        <label>Sevakendra<span className="required">*</span></label>
        <select name="Sevakendra" onChange={update}>
          <option value="">Select</option>
          <option>Bhandewadi</option>
          <option>Other</option>
        </select>

        <label>Date of Birth<span className="required">*</span></label>
        <input type="date" name="DateofBirth" onChange={update} />

        <label>Enter Email</label>
        <input type="email" name="Email" onChange={update} />

        <div className="buttons">
          <button type="submit" className="save-btn">Save</button>
          <button type="button" className="next-btn" onClick={fetchNextId}>
            Next
          </button>
        </div>
      </form>

      {success && (
        <div className="success-message">
          Data saved successfully! Thank you 🙂
        </div>
      )}
    </>
  );
}
