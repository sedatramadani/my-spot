// 1. Added useEffect to the import
import React, { useState, useEffect } from "react";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [data]);

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You are registered successfully!`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="relative left-400 bottom-100"
        />
      </label>

      <button
        type="submit"
        disabled={!isValidEmail}
        className="relative left-410 bottom-100"
      >
        Submit
      </button>
    </form>
  );
}
