import { createHash } from "node:crypto";

export function generateToken(): string {
  const email = process.env.ADMIN_EMAIL ?? "";
  const password = process.env.ADMIN_PASSWORD ?? "";
  const secret = process.env.AUTH_SECRET ?? "default-secret";
  return createHash("sha256")
    .update(`${email}:${password}:${secret}`)
    .digest("hex");
}

export function validateCredentials(email: string, password: string): boolean {
  return (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  );
}
