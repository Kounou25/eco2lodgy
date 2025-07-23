import { useState } from "react";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://submit-form.com/ZxRct1DMK", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Erreur d'envoi :", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container" style={{ maxWidth: 500, margin: "auto" }}>
      <h2>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email :
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Message :
          <textarea name="message" required />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>
      </form>

      {success && <p style={{ color: "green" }}>✅ Message envoyé avec succès !</p>}
      {error && <p style={{ color: "red" }}>❌ Une erreur est survenue. Veuillez réessayer.</p>}
    </div>
  );
}
