"use client";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Message sent!");
  };

  return (
    <form
      className="form-container flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <div>
        <label>
          <span>Name</span>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <span>Email Address</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          <span>Subject</span>
          <input
            name="subject"
            type="text"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="rounded-2xl"
          />
        </label>
      </div>
      <button type="submit" className="btn px-4 py-5 font-bold">
        Send Message
      </button>
    </form>
  );
}
