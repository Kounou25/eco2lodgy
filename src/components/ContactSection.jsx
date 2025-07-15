
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    fetch("https://formsubmit.co/5833982a3df4b7985b4a4a2dc12b60e0", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log("Form response:", data);
      alert("Votre message a été envoyé avec succès !");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    })
    .catch(error => console.error("Erreur d'envoi :", error))
    .finally(() => setIsSubmitting(false));
  };
  

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
      details: "Quarier Zak, Niamey-Niger",
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              {/* <a href="#" className="w-10 h-10 rounded-full bg-gray-200/50 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-200/50 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a> */}
              <a href="https://www.linkedin.com/company/%C3%A9cotech/" className="w-10 h-10 rounded-full bg-gray-200/50 hover:bg-[#D4A017]/20 flex items-center justify-center transition-colors text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-semibold mb-6 font-display">Envoyez-nous un message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 outline-none transition-all resize-none"
                  placeholder="Votre message"
                ></textarea>
              </div>
              <Button 
                type="submit" 
                className="w-full bg-eco-green hover:bg-eco-light text-white py-6 rounded-lg transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
