import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft, User, Mail, Phone, MapPin, CreditCard, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const InscriptionFormation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formation, setFormation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      profession: '',
      experience: '',
      motivation: '',
      dietaryRestrictions: '',
      accommodationNeeded: false,
      transportNeeded: false,
      emergencyContact: '',
      emergencyPhone: '',
      acceptTerms: false,
      acceptNewsletter: false,
    },
  });

  // Récupération des données depuis l'API
  useEffect(() => {
    const fetchFormation = async () => {
      try {
        setLoading(true);
        console.log(`Fetching formation with ID: ${id}`);
        const response = await fetch(`https://alphatek.fr:3008/api/formations/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            // Ajouter un en-tête d'authentification si nécessaire
            // 'Authorization': `Bearer ${yourToken}`,
          },
        });
        if (!response.ok) {
          throw new Error(response.status === 404 ? 'Formation non trouvée' : `Erreur HTTP ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Formation data:', data);

        // Transformation des données pour correspondre au format attendu
        const transformedFormation = {
          id: data.id || parseInt(id),
          title: data.title || 'Formation sans titre',
          price: data.price && data.currency ? `${parseFloat(data.price).toLocaleString('fr-FR')} ${data.currency}` : 'Prix non spécifié',
          duration: data.duration || 'Durée non spécifiée',
          startDate: data.start_date || new Date().toISOString(),
          location: data.location || 'Lieu non spécifié',
        };

        setFormation(transformedFormation);
        setLoading(false);
      } catch (err) {
        console.error('Erreur lors de la récupération de la formation:', err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchFormation();
  }, [id]);

  // Gestion de la soumission du formulaire
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      console.log('Données du formulaire:', data);

      // Mapper les données du formulaire au format attendu par l'API
      const apiData = {
        formation_id: parseInt(id),
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phone,
        address: data.address || null,
        city: data.city || null,
        profession: data.profession || null,
        experience: data.experience || null,
        motivation: data.motivation,
        dietary_restrictions: data.dietaryRestrictions || null,
        accommodation_needed: data.accommodationNeeded,
        transport_needed: data.transportNeeded,
        emergency_contact: data.emergencyContact || null,
        emergency_phone: data.emergencyPhone || null,
        accept_terms: data.acceptTerms,
        accept_newsletter: data.acceptNewsletter,
      };

      console.log('Envoi des données à l\'API:', apiData);
      const response = await fetch('https://alphatek.fr:3008/api/registrations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Ajouter un en-tête d'authentification si nécessaire
          // 'Authorization': `Bearer ${yourToken}`,
        },
        body: JSON.stringify(apiData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `Erreur HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Réponse de l\'API:', result);

      toast({
        title: 'Inscription réussie !',
        description: 'Votre demande d\'inscription a été envoyée avec succès. Nous vous recontacterons sous 48h.',
      });

      // Redirection vers la page de confirmation
      navigate(`/formations/`);
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      toast({
        title: 'Erreur',
        description: error.message || 'Une erreur est survenue. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50 pt-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-[#2E5A27] border-solid mx-auto mb-4"></div>
            <p className="text-lg font-semibold">Chargement de la formation...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Affichage en cas d'erreur ou formation non trouvée
  if (error || !formation) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gray-50 pt-20">
          <div className="text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">{error || 'Formation non trouvée'}</h1>
            <Link to="/formations">
              <Button className="bg-[#2E5A27] hover:bg-[#2E5A27]/90 rounded-full">
                Retour aux formations
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gray-50 pt-20">
        {/* Header */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <Link to={`/formations/${id}`} className="inline-flex items-center text-[#2E5A27] hover:underline mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour à la formation
            </Link>
            <h1 className="text-3xl font-bold mb-2">Inscription à la formation</h1>
            <h2 className="text-xl text-gray-600">{formation.title}</h2>
          </div>
        </section>

        {/* Form */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Formulaire */}
              <div className="lg:col-span-2">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {/* Informations personnelles */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5 text-[#2E5A27]" />
                          Informations personnelles
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="firstName"
                            rules={{ required: 'Le prénom est requis' }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Prénom *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Votre prénom" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            rules={{ required: 'Le nom est requis' }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Nom *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Votre nom" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            rules={{
                              required: "L'email est requis",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email invalide',
                              },
                            }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input type="email" placeholder="votre@email.com" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            rules={{ required: 'Le téléphone est requis' }}
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Téléphone *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+227 XX XX XX XX" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Adresse</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre adresse" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ville</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre ville" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    {/* Informations professionnelles */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Informations professionnelles</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="profession"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Profession</FormLabel>
                              <FormControl>
                                <Input placeholder="Votre profession actuelle" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="experience"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expérience dans le domaine</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Décrivez brièvement votre expérience dans le domaine de la formation..."
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="motivation"
                          rules={{ required: 'La motivation est requise' }}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Motivation *</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Pourquoi souhaitez-vous suivre cette formation ?"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    {/* Informations complémentaires */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Informations complémentaires</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="dietaryRestrictions"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Restrictions alimentaires</FormLabel>
                              <FormControl>
                                <Input placeholder="Allergies, régime spécial..." {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="space-y-3">
                          <FormField
                            control={form.control}
                            name="accommodationNeeded"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>J'ai besoin d'un hébergement</FormLabel>
                                </div>
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="transportNeeded"
                            render={({ field }) => (
                              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                  />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                  <FormLabel>J'ai besoin d'aide pour le transport</FormLabel>
                                </div>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="emergencyContact"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Contact d'urgence</FormLabel>
                                <FormControl>
                                  <Input placeholder="Nom du contact" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="emergencyPhone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Téléphone d'urgence</FormLabel>
                                <FormControl>
                                  <Input placeholder="+227 XX XX XX XX" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </CardContent>
                    </Card>

                    {/* Conditions */}
                    <Card>
                      <CardContent className="pt-6 space-y-4">
                        <FormField
                          control={form.control}
                          name="acceptTerms"
                          rules={{ required: 'Vous devez accepter les conditions' }}
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>
                                  J'accepte les conditions générales et la politique de confidentialité *
                                </FormLabel>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="acceptNewsletter"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel>Je souhaite recevoir les actualités d'Eco2lodgy</FormLabel>
                              </div>
                            </FormItem>
                          )}
                        />
                      </CardContent>
                    </Card>

                    <Button
                      type="submit"
                      className="w-full bg-[#2E5A27] hover:bg-[#2E5A27]/90 py-6 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Inscription en cours...' : 'Confirmer l\'inscription'}
                    </Button>
                  </form>
                </Form>
              </div>

              {/* Récapitulatif */}
              <div className="lg:col-span-1">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle>Récapitulatif</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">{formation.title}</h4>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{formation.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CreditCard className="w-4 h-4" />
                          <span>{formation.duration}</span>
                        </div>
                        <div>
                          <strong>Début :</strong> {new Date(formation.startDate).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total :</span>
                        <span className="text-[#2E5A27]">{formation.price}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">
                        Paiement à effectuer avant le début de la formation
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default InscriptionFormation;