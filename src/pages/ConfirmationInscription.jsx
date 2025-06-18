
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, Phone, Calendar, MapPin, Download } from 'lucide-react';

const ConfirmationInscription = () => {
  const { id } = useParams();

  // Simulation des données
  const formations = [
    {
      id: 1,
      title: "Techniques de Construction Écologique",
      price: "75,000 FCFA",
      duration: "5 jours",
      startDate: "2024-02-15",
      location: "Niamey"
    }
  ];

  const formation = formations.find(f => f.id === parseInt(id));

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Inscription confirmée !
              </h1>
              
              <p className="text-lg text-gray-600">
                Votre demande d'inscription à la formation "{formation?.title}" a été envoyée avec succès.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Prochaines étapes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#2E5A27] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Confirmation par email</h4>
                      <p className="text-gray-600 text-sm">
                        Vous recevrez un email de confirmation dans les 24h avec tous les détails de la formation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#2E5A27] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Validation de l'inscription</h4>
                      <p className="text-gray-600 text-sm">
                        Notre équipe examinera votre dossier et vous contactera sous 48h pour valider votre inscription.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#2E5A27] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Instructions de paiement</h4>
                      <p className="text-gray-600 text-sm">
                        Après validation, vous recevrez les instructions pour effectuer le paiement de {formation?.price}.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#2E5A27] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Préparation à la formation</h4>
                      <p className="text-gray-600 text-sm">
                        Une semaine avant le début, vous recevrez le programme détaillé et la liste du matériel à apporter.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-4">Informations importantes</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#2E5A27]" />
                      <span>Début : {new Date(formation?.startDate).toLocaleDateString('fr-FR')}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#2E5A27]" />
                      <span>{formation?.location}</span>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold mb-3">Besoin d'aide ?</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#2E5A27]" />
                      <span>formations@eco2lodgy.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#2E5A27]" />
                      <span>+227 XX XX XX XX</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Télécharger le récapitulatif
              </Button>
              
              <Link to="/formations">
                <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90">
                  Voir d'autres formations
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ConfirmationInscription;
