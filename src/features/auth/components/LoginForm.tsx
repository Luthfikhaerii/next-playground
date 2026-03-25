"use client"
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");

  return (
    <form>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <p>{email}</p>
    </form>
  );
}