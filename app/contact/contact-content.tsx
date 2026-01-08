"use client";

import Link from "next/link";
import Image from "next/image";
import "./contact.css";

export default function ContactContent() {
    return (
        <>
            <header>
                <div className="logo-section">
                    <Image
                        src="/positive-blood-group-3d-icon-png-download-4897215.webp"
                        alt="JNMF Logo"
                        className="logo-img"
                        width={60}
                        height={60}
                    />
                    <div className="logo-text">
                        <div className="top">Blood</div>
                        <div className="bottom">Donation</div>
                    </div>
                </div>

                <div className="header-right">
                    <div className="header-title">Contact Us</div>
                    <Link href="/dashboard" className="home-link">
                        Home
                        <Image src="/home-icon_1076610-21321.avif" alt="Home" width={30} height={30} />
                    </Link>
                </div>
            </header>

            <main className="content">
                <div className="contact-info">
                    <h1>Contact Jagadguru Narendracharya Maharaj Foundation</h1>

                    {/* Address */}
                    <div className="contact-item">
                        <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2C8.7 2 6 4.7 6 8c0 5.3 6 12 6 12s6-6.7 6-12c0-3.3-2.7-6-6-6zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                        <div>
                            <strong>Address:</strong><br />
                            Ramanandacharya Dakshinpeeth,<br />
                            Nanij Dham, Ratnagiri – 415803,<br />
                            Maharashtra, India<br />
                            MG Road, Pune<br />
                            Maharashtra, India
                        </div>
                    </div>

                    {/* Website */}
                    <div className="contact-item">
                        <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm5.9 6H14.7a15.7 15.7 0 0 0-1.5-3.4A8 8 0 0 1 17.9 8zM12 4.1c.9 1.1 1.6 2.5 2 3.9h-4c.4-1.4 1.1-2.8 2-3.9z" />
                        </svg>
                        <div>
                            <strong>Website:</strong><br />
                            <a href="https://www.ramanandacharyananijdham.com" target="_blank" rel="noopener noreferrer">
                                www.ramanandacharyananijdham.com
                            </a>
                        </div>
                    </div>

                    {/* Call */}
                    <div className="contact-item">
                        <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2c1.1.4 2.3.6 3.5.6a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.9 21 3 12.1 3 2a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.2.2 2.4.6 3.5a1 1 0 0 1-.3 1l-2.2 2.3z" />
                        </svg>
                        <div>
                            <strong>Call:</strong><br />
                            <a href="tel:+917774032355">+91-7774032355</a><br />
                            <a href="tel:+918805410196">+91-8805410196</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
