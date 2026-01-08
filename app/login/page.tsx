import type { Metadata } from "next";
import LoginForm from "./login-form";

export const metadata: Metadata = {
  title: "Login - Blood Donation Management | JNMF",
  description: "Securely log in to the Jagadguru Narendracharya Maharaj Foundation Blood Donation Management portal. Manage donors, registrations, and blood analysis.",
  robots: {
    index: false, // Don't index login page normally
    follow: true,
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
