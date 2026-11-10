import type { Metadata } from "next";
import { AuthPlaceholder } from "@/sections/auth-placeholder";

export const metadata: Metadata = {
  title: "Register",
  robots: { index: false, follow: false },
  alternates: { canonical: "/register/" },
};

export default function RegisterPage() {
  return <AuthPlaceholder kind="register" />;
}
