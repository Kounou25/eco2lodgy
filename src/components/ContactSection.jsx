import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche la redirection par défaut

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://submit-form.com/ZxRct1DMK", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        setError(false);
        e.target.reset(); // Réinitialise les champs du formulaire
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Erreur de soumission :", err);
      setError(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" required></textarea>
        <button type="submit">Envoyer</button>
      </form>

      {submitted && (
        <p style={{ color: "green", marginTop: "10px" }}>
          ✅ Votre message a été envoyé avec succès !
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: "10px" }}>
          ❌ Une erreur s'est produite. Veuillez réessayer.
        </p>
      )}
    </div>
  );
};

export default ContactForm;
