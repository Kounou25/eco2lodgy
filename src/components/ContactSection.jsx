// src/components/ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://submit-form.com/ZxRct1DMK", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur d’envoi :", error);
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        required
        className="w-full p-2 border rounded h-32"
      ></textarea>

      <button
        type="submit"
        disabled={status === "loading"}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {status === "loading" ? "Envoi..." : "Envoyer"}
      </button>

      {status === "success" && (
        <p className="text-green-600 mt-2">Message envoyé avec succès ✅</p>
      )}
      {status === "error" && (
        <p className="text-red-600 mt-2">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}
