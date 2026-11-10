import type { Metadata } from "next";
import { AuthPlaceholder } from "@/sections/auth-placeholder";

export const metadata: Metadata = {
  title: "Log in",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login/" },
};

export default function LoginPage() {
  return <AuthPlaceholder kind="login" />;
}
