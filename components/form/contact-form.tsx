"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Fake submit (frontend only)
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-surface
        border border-borderDark
        rounded-xl
        p-8
        space-y-6
      "
    >
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-textPrimary mb-1">
          Name
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="
            w-full
            bg-background
            border border-borderDark
            rounded-lg
            px-4 py-2
            text-textPrimary
            placeholder:text-textSecondary
            focus:outline-none
            focus:border-primary
          "
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-textPrimary mb-1">
          Email
        </label>
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          className="
            w-full
            bg-background
            border border-borderDark
            rounded-lg
            px-4 py-2
            text-textPrimary
            placeholder:text-textSecondary
            focus:outline-none
            focus:border-primary
          "
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-textPrimary mb-1">
          Message
        </label>
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          className="
            w-full
            bg-background
            border border-borderDark
            rounded-lg
            px-4 py-2
            text-textPrimary
            placeholder:text-textSecondary
            focus:outline-none
            focus:border-primary
          "
          placeholder="Your message"
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-error">
          {error}
        </p>
      )}

      {/* Success */}
      {success && (
        <p className="text-sm text-success">
          Thank you for your message! We’ll get back to you soon.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full
          bg-primary
          hover:bg-primaryHover
          text-white
          rounded-lg
          py-2
          font-medium
          transition
        "
      >
        Send Message
      </button>
    </form>
  );
}
