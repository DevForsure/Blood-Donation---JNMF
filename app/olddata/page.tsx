"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./olddata.css";

export default function OldDataPage() {
  const [id, setId] = useState<number>(0);
  const [form, setForm] = useState<any>({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetchNextId();
  }, []);

  async function fetchNextId() {
    const res = await fetch("/api/olddata/next-id");
    const data = await res.json();
    if (data?.next_id) setId(data.next_id);
  }

  function update(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e: any) {
    e.preventDefault();
    setError("");

    const required = ["name", "phone", "bloodgroup", "sevakendra"];
    const missing = required.filter((r) => !form[r]);

    if (!form.gender) missing.push("gender");

    if (missing.length > 0) {
      setError("Please enter the following fields: " + missing.join(", "));
      return;
    }

    const res = await fetch("/api/olddata", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, id }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Error saving data");
      return;
    }

    setSuccess(true);
    setForm({});
    fetchNextId();

    setTimeout(() => setSuccess(false), 3000);
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
          <div className="header-title">Old Data Entry</div>
          <Link href="/dashboard" className="home-link">
            Home
            <img src="/home-icon_1076610-21321.avif" />
          </Link>
        </div>
      </header>

      <form onSubmit={submit}>
        <label>ID<span className="required">*</span></label>
        <input value={id} readOnly />

        <label>Name<span className="required">*</span></label>
        <input name="name" onChange={update} />

        <label>Phone<span className="required">*</span></label>
        <input
          name="phone"
          maxLength={10}
          onChange={(e) => {
            e.target.value = e.target.value.replace(/\D/g, "");
            update(e);
          }}
        />

        <label>Gender<span className="required">*</span></label>
        <div className="gender-options">
          {["Male", "Female", "Other"].map((g) => (
            <label key={g}>
              <input
                type="radio"
                name="gender"
                value={g}
                onChange={update}
              />{" "}
              {g}
            </label>
          ))}
        </div>

        <label>Blood Group<span className="required">*</span></label>
        <select name="bloodgroup" onChange={update}>
          <option value="">Select</option>
          {["A+","B+","AB+","AB-","O+","O-"].map(bg => (
            <option key={bg}>{bg}</option>
          ))}
        </select>

        <label>Date of Birth</label>
        <input type="date" name="dob" onChange={update} />

        <label>Address</label>
        <input name="address" onChange={update} />

        <label>Sevakendra<span className="required">*</span></label>
        <select name="sevakendra" onChange={update}>
          <option value="">Select</option>
          <option>Bhandewadi</option>
        </select>

        <div className="buttons">
          <button className="save-btn" type="submit">Save</button>
          <button type="button" className="next-btn" onClick={fetchNextId}>
            Next
          </button>
        </div>

        {error && <div id="message">{error}</div>}
      </form>

      {success && (
        <div className="success-message">
          Data saved successfully! Thank you 🙂
        </div>
      )}
    </>
  );
}
