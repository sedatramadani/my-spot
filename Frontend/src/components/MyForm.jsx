import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function MyForm() {
  const form = useRef();
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    const SERVICE_ID = "service_n3knwhr";
    const TEMPLATE_ID = "template_z9fg2po";
    const PUBLIC_KEY = "6kZX-hZ3XC3EBusA_";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          console.log("EmailJS Success:", result.text);
          // Handle success state
        },
        (error) => {
          console.error("EmailJS Error:", error);
          // Handle error state
        },
      )

      .then(
        () => {
          setStatus({ loading: false, success: true, error: "" });
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus({
            loading: false,
            success: false,
            error: "Failed to send message. Please check template settings.",
          });
        },
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex flex-col gap-3 max-w-md text-stone-800"
    >
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-stone-200">Name</label>
        <input
          type="text"
          name="user_name"
          required
          className="border border-stone-300 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-amber-800"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-stone-200">Email</label>
        <input
          type="email"
          name="user_email"
          required
          className="border border-stone-300 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-amber-800"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-sm font-semibold text-stone-200">Message</label>
        <textarea
          name="message"
          required
          rows="4"
          className="border border-stone-300 p-2 rounded bg-white text-black focus:outline-none focus:ring-2 focus:ring-amber-800"
        />
      </div>

      <button
        type="submit"
        disabled={status.loading}
        className="bg-amber-900 text-white py-2 px-4 rounded hover:bg-amber-950 transition disabled:opacity-50 font-semibold mt-2"
      >
        {status.loading ? "Sending..." : "Send Message"}
      </button>

      {status.success && (
        <p className="text-emerald-400 text-sm font-semibold mt-1">
          ✓ Message sent successfully! Check your inbox.
        </p>
      )}

      {status.error && (
        <p className="text-rose-400 text-sm font-semibold mt-1">
          {status.error}
        </p>
      )}
    </form>
  );
}

export default MyForm;
