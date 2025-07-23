import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [status, setStatus] = useState("idle");

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-eco-green" />,
      title: "Téléphone",
      details: "+227 89 64 61 22",
      action: "tel:+22789646122",
      label: "Appeler"
    },
    {
      icon: <Mail className="w-5 h-5 text-eco-green" />,
      title: "Email",
      details: "contact@eco2lodgy.com",
      action: "mailto:contact@eco2lodgy.com",
      label: "Envoyer un email"
    },
    {
      icon: <MapPin className="w-5 h-5 text-eco-green" />,
      title: "Adresse",
      details: "Quartier Zak, Niamey-Niger",
      action: "https://maps.google.com",
      label: "Voir sur la carte"
    },
    {
      icon: <Clock className="w-5 h-5 text-eco-green" />,
      title: "Horaires",
      details: "Lun - Ven : 8h00 - 17h00",
      action: null,
      label: null
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

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
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Contactez-Nous</h2>
          <div className="h-1 w-20 bg-eco-green mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Vous avez un projet en tête ? Discutons-en ensemble et voyons comment Eco2lodgy peut vous aider à le concrétiser.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 font-display">Information de Contact</h3>
            <p className="text-foreground/80 mb-8 max-w-md">
              N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire sur nos services.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-eco-green/10 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    <p className="text-foreground/80 mt-1">{info.details}</p>
                    {info.action && (
                      <a
                        href={info.action}
                        className="text-eco-green text-sm mt-1 inline-block hover:underline"
                        target={info.action.startsWith('http') ? "_blank" : "_self"}
                        rel="noreferrer"
                      >
                        {info.label}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?=61560000705955&sk=reviews" className="w-10 h-10 rounded-full bg-gray-200/50 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors text-gray-600">
                  {/* Facebook Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/company/%C3%A9cotech/" className="w-10 h-10 rounded-full bg-gray-200/50 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors text-gray-600">
                  {/* LinkedIn Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6 font-display">Envoyez-nous un message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <input
                    name="subject"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all resize-none"
                  placeholder="Votre message"
                />
              </div>

              {status === "success" && (
                <p className="text-green-600 text-sm">✅ Message envoyé avec succès !</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">❌ Une erreur est survenue. Veuillez réessayer.</p>
              )}

              <Button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-eco-green hover:bg-eco-light text-white py-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 h-5 w-5" />
                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
