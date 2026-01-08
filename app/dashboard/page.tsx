"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import "./dashboard.css";

export default function Dashboard() {
  const [showPopup, setShowPopup] = useState(false);

  // Auto-hide popup (login success message if needed)
  useEffect(() => {
    if (showPopup) {
      const t = setTimeout(() => setShowPopup(false), 3000);
      return () => clearTimeout(t);
    }
  }, [showPopup]);

  // Slider logic
  useEffect(() => {
    const slides = document.querySelectorAll(".slider img");
    let index = 0;

    const interval = setInterval(() => {
      slides.forEach((s) => s.classList.remove("active"));
      slides[index]?.classList.add("active");
      index = (index + 1) % slides.length;
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showPopup && (
        <div id="popup-message" className="success">
          Login success! Welcome to Blood Donation Camp.
        </div>
      )}

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

        <nav>
          <div className="menu-item">
            <Link href="/enquiry-registration">Enquiry Registration</Link>
          </div>

          <div className="menu-item">
            <a>Donation Registration</a>
            <div className="submenu">
              <Link href="/registration">Registration</Link>
              <Link href="/update">Update Information</Link>
            </div>
          </div>

          <div className="menu-item">
            <a>Calling</a>
            <div className="submenu">
              <Link href="/seedetails">See Details</Link>
              <Link href="/messagesend">Message Send</Link>
            </div>
          </div>

          <div className="menu-item">
            <Link href="/blood-analysis">Blood Analysis</Link>
          </div>

          <div className="menu-item">
            <Link href="/contact">Contact</Link>
          </div>

          <div className="menu-item">
            <Link href="/olddata">Save Old Data</Link>
          </div>
        </nav>
      </header>

      <div className="background-container"></div>

      <div className="content">
        <div className="title">
          Jagadguru Ramanandacharya Narendracharya Maharaj Foundation
        </div>

        <div className="subtitle">
          The Jagadguru Ramanandacharya Narendracharya Maharaj Foundation at Nanijdham,
          Ratnagiri, Maharashtra, was founded to serve society through education,
          healthcare, blood donation, and spirituality.
        </div>

        <div className="slider">
          <img src="/nanij-math-01.jpg" className="active" />
          <img src="/maxresdefault-2.jpg" />
          <img src="/FAi7tziUYAIWM6W.jpg" />
          <img src="/maxresdefault.jpg" />
          <img src="/maxresdefault-1.jpg" />
        </div>

        {/* Content paragraphs unchanged */}
        <p className="long-text">
          🌿 Vasundhara Paayi Dindi … (content unchanged)
        </p>

        <p className="long-text">
          🩸 Blood Donation & Healthcare Service … (content unchanged)
        </p>
      </div>

      <footer>
        <div className="footer-left">
          📞 Helpline: +919373830912 &nbsp; 📞 Blood Issue: +919619171004
          &nbsp; 📍 Nanijdham, Ratnagiri, Maharashtra
        </div>
        <div className="footer-right">
          © 2025 Blood Donation Software By Team JRNMF. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
