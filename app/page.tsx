import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Welcome - Blood Donation Management | JNMF",
  description: "Join the Jagadguru Narendracharya Maharaj Foundation (JNMF) blood donation campaign. Donate blood, save lives, and manage your registrations with ease.",
};

export default function Home() {
  return (
    <main style={{ padding: "40px", textAlign: "center", fontFamily: "Arial, sans-serif", backgroundColor: "#fff5f5", minHeight: "100vh" }}>
      <header style={{ marginBottom: "50px" }}>
        <Image
          src="/mphoto.jpg"
          alt="JNMF Logo"
          width={150}
          height={150}
          style={{ borderRadius: "50%", border: "4px solid #c53e3e" }}
        />
        <h1 style={{ color: "#c53e3e", marginTop: "20px" }}>Jagadguru Narendracharya Maharaj Foundation</h1>
        <h2 style={{ color: "#333" }}>Blood Donation Camp Management</h2>
      </header>

      <section style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", lineHeight: "1.6", color: "#444" }}>
        <p>
          Welcome to the official portal for managing blood donation activities at Jagadguru Narendracharya Maharaj Foundation.
          Our mission is to bridge the gap between donors and those in need, ensuring a healthy and safe blood supply for the society.
        </p>
        <p style={{ fontStyle: "italic", marginTop: "20px", color: "#c53e3e" }}>
          "तुम्ही जगा दुसऱ्याला जगवा" (Live and let others live)
        </p>
      </section>

      <div style={{ marginTop: "50px", display: "flex", justifyContent: "center", gap: "20px" }}>
        <Link
          href="/login"
          style={{
            padding: "15px 40px",
            backgroundColor: "#c53e3e",
            color: "white",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "bold",
            transition: "transform 0.2s"
          }}
        >
          Access Portal (Login)
        </Link>
        <Link
          href="/contact"
          style={{
            padding: "15px 40px",
            backgroundColor: "#fff",
            color: "#c53e3e",
            border: "2px solid #c53e3e",
            textDecoration: "none",
            borderRadius: "50px",
            fontWeight: "bold"
          }}
        >
          Contact Us
        </Link>
      </div>

      <footer style={{ marginTop: "100px", color: "#666", fontSize: "0.9rem" }}>
        © 2025 Jagadguru Ramanandacharya Narendracharya Maharaj Foundation (JNMF). All Rights Reserved.
      </footer>
    </main>
  );
}
