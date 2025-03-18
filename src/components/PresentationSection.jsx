
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Building, Users, Trophy, Layers, Lightbulb, HandshakeIcon, MapPin, House } from 'lucide-react';

const PresentationSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Éco2lodgy, Partenaire Stratégique pour le Développement Urbain et Immobilier au Niger",
      subtitle: "Des solutions intégrées en ingénierie, maîtrise d'œuvre, promotion immobilière et R&D",
      content: (
        <div className="flex flex-col items-center">
          <img src="/images/presentation-cover.jpg" alt="Éco2lodgy" className="rounded-xl mb-6 object-cover h-64 w-full" />
          <div className="text-center">
            <p className="text-foreground/80 mb-4">Siège : Niamey, Niger</p>
            <p className="text-foreground/80">Partenaire principal : Ecotech (La Réunion)</p>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Qui Sommes-Nous ?",
      subtitle: "Présentation succincte",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>Calcul de structure</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>Maîtrise d'œuvre / maîtrise d'ouvrage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>Promotion immobilière / agence immobilière</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>R&D sur les matériaux innovants (low cost, low tech)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>Production et vente de matériaux de construction</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>Architecture bioclimatique</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-sm">✓</span>
                </div>
                <span>Réalisation de cadastres par Lidar et photogrammétrie</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <img src="/images/who-we-are.jpg" alt="Notre équipe" className="rounded-xl w-full h-48 object-cover" />
            <div className="bg-eco-green/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Notre Vision</h4>
              <p className="text-sm">Faire du Niger un pôle de référence en construction durable et résiliente</p>
            </div>
            <div className="bg-eco-green/10 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Notre Mission</h4>
              <p className="text-sm">Offrir des solutions de construction adaptées au climat, accessibles financièrement et profitables à l'économie locale</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Nos Domaines de Compétence",
      subtitle: "Expertise complète et intégrée",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Building className="h-5 w-5 text-eco-green" />
                Calcul de structure et ingénierie
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Expertise en béton, acier, terre stabilisée. Optimisation de la résistance et de la durabilité.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Users className="h-5 w-5 text-eco-green" />
                Maîtrise d'œuvre / Maîtrise d'ouvrage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Gestion et coordination de A à Z. Contrôle qualité des chantiers et respect des normes.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <House className="h-5 w-5 text-eco-green" />
                Promotion immobilière et agence
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Recherche foncière, montage financier, commercialisation. Assistance à la gestion locative.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-eco-green" />
                Laboratoire de R&D
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Études sur bétons biosourcés. Solutions low cost pour lutter contre inondations et chaleurs extrêmes.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Layers className="h-5 w-5 text-eco-green" />
                Production et vente de matériaux
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Blocs de terre stabilisée, béton léger. Outils adaptés au marché local.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <House className="h-5 w-5 text-eco-green" />
                Architecture et design
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Conception bioclimatique (orientation, ventilation naturelle). Adaptation aux besoins culturels et climatiques.</p>
            </CardContent>
          </Card>
          
          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <MapPin className="h-5 w-5 text-eco-green" />
                Cartographie et cadastre
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Drones avec Lidar et photogrammétrie. Constitution d'une base de données cadastrale.</p>
            </CardContent>
          </Card>
        </div>
      )
    },
    {
      id: 4,
      title: "Projets Réalisés",
      subtitle: "Sélection de nos réalisations",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-xl overflow-hidden h-64">
            <img src="/images/project-rive-sure.jpg" alt="Projet Rive Sûre" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-eco-green/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h4 className="text-white font-semibold">Projet "Rive Sûre" à Niamey</h4>
              <p className="text-white/90 text-sm">Digues de protection contre les crues</p>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-64">
            <img src="/images/project-oasis.jpg" alt="Nouvelle Oasis" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-eco-green/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h4 className="text-white font-semibold">Complexe "Nouvelle Oasis" à Zinder</h4>
              <p className="text-white/90 text-sm">50 logements sociaux climato-résilients</p>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-64">
            <img src="/images/project-residences.jpg" alt="Résidences Sahéliennes" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-eco-green/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h4 className="text-white font-semibold">Programme "Résidences Sahéliennes"</h4>
              <p className="text-white/90 text-sm">Logements moyen standing, intégration bioclimatique</p>
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-64">
            <img src="/images/project-rd.jpg" alt="Terre & Confort" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-eco-green/80 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h4 className="text-white font-semibold">Projet "Terre & Confort"</h4>
              <p className="text-white/90 text-sm">Amélioration de la performance thermique des blocs de terre stabilisée</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Nos Équipes et Ressources",
      subtitle: "Une équipe pluridisciplinaire et hautement qualifiée",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-eco-green" />
              Direction
            </h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">Ingénieur en génie civil (15 ans d'expérience)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">Responsable R&D (Docteur en matériaux de construction)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">Chef de projet architecture (Architecte DPLG, expert bioclimatique)</span>
              </li>
            </ul>
            
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-eco-green" />
              Équipes pluridisciplinaires
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">4 Ingénieurs structures</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">5 Chercheurs et techniciens de laboratoire</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">3 Architectes, 2 Urbanistes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">20 Maçons et techniciens qualifiés</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">2 Géomètres-experts, 3 opérateurs drones</span>
              </li>
            </ul>
          </div>
          
          <div>
            <img src="/images/team-work.jpg" alt="Nos équipes" className="w-full h-48 object-cover rounded-xl mb-6" />
            
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Layers className="h-5 w-5 text-eco-green" />
              Matériel et logistique
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">2 drones UAV équipés Lidar</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">Laboratoire d'essais (presse hydraulique, capteurs thermiques)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">Flotte de camions légers et minibus pour chantiers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-eco-green font-bold text-xs">✓</span>
                </div>
                <span className="text-sm">Coffrages modulaires et échafaudages pour grands projets</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Distinctions et Partenariats",
      subtitle: "Reconnaissance et collaborations stratégiques",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-eco-green" />
              Distinctions
            </h4>
            <div className="space-y-4">
              <div className="bg-eco-green/10 p-4 rounded-lg">
                <h5 className="font-medium">Prix de l'Innovation Responsable (2021)</h5>
                <p className="text-sm text-foreground/70 mt-1">Récompense pour notre approche durable en construction</p>
              </div>
              <div className="bg-eco-green/10 p-4 rounded-lg">
                <h5 className="font-medium">Certification de Qualité de Service (2022)</h5>
                <p className="text-sm text-foreground/70 mt-1">Excellence opérationnelle et satisfaction client</p>
              </div>
              <div className="bg-eco-green/10 p-4 rounded-lg">
                <h5 className="font-medium">Mention Spéciale au Forum Afrique-Innov' (2023)</h5>
                <p className="text-sm text-foreground/70 mt-1">Reconnaissance de nos solutions adaptées au Sahel</p>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-eco-green" />
              Partenariats clés
            </h4>
            <div className="bg-white p-5 rounded-lg shadow-md mb-4">
              <div className="flex items-start gap-3">
                <img src="/images/partner-ecotech.jpg" alt="Ecotech" className="w-16 h-16 object-contain" />
                <div>
                  <h5 className="font-medium">Ecotech (La Réunion)</h5>
                  <p className="text-sm text-foreground/70 mt-1">Transfert de technologies, solutions durables</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md mb-4">
              <div className="flex items-start gap-3">
                <img src="/images/partner-ministry.jpg" alt="Ministère" className="w-16 h-16 object-contain" />
                <div>
                  <h5 className="font-medium">Ministère de l'Urbanisme et de l'Habitat</h5>
                  <p className="text-sm text-foreground/70 mt-1">Collaboration sur normes de construction</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-md">
              <div className="flex items-start gap-3">
                <img src="/images/partner-ngo.jpg" alt="ONG" className="w-16 h-16 object-contain" />
                <div>
                  <h5 className="font-medium">ONG et organismes internationaux</h5>
                  <p className="text-sm text-foreground/70 mt-1">Programmes d'urgence, habitat social</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Axes d'Innovation et Développement",
      subtitle: "Notre vision pour l'avenir",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <House className="h-5 w-5 text-eco-green" />
                Habitat résilient
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Diffusion de méthodes de construction sûres contre les inondations et la surchauffe</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Layers className="h-5 w-5 text-eco-green" />
                Matériaux écologiques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Blocs de terre stabilisée, bétons biosourcés, faible impact carbone</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-eco-green" />
                Approche Low Tech
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Solutions simplifiées pour être adoptées par tous (fiches techniques, formations courtes)</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <MapPin className="h-5 w-5 text-eco-green" />
                Cartographie rurale avancée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Drones + SIG pour améliorer la planification foncière</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base flex items-center gap-2">
                <Users className="h-5 w-5 text-eco-green" />
                Formation et transfert
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground/70">Stages pratiques, partenariats académiques, échanges internationaux</p>
            </CardContent>
          </Card>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <img src="/images/innovation.jpg" alt="Innovation" className="w-full h-48 object-cover rounded-xl" />
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Pourquoi Choisir Eco2lodgy ?",
      subtitle: "Nos atouts distinctifs",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                <Trophy className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Expertise technique et opérationnelle</h4>
                <p className="text-sm text-foreground/70">Maîtrise des normes internationales, prise en compte des réalités locales</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Vision intégrée</h4>
                <p className="text-sm text-foreground/70">Services complets de la conception à la commercialisation</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                <Lightbulb className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Innovation et durabilité</h4>
                <p className="text-sm text-foreground/70">R&D continue, matériaux économes et respectueux de l'environnement</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Création de valeur locale</h4>
                <p className="text-sm text-foreground/70">Implication de la main-d'œuvre nigérienne, soutien à l'économie régionale</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                <House className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Sécurité et confiance</h4>
                <p className="text-sm text-foreground/70">Suivi strict des normes, contrôle qualité, réduction des risques pour les partenaires</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center h-full">
              <img src="/images/team-trust.jpg" alt="Notre équipe" className="w-full h-40 object-cover rounded-xl" />
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Appel à Collaboration",
      subtitle: "Construisons ensemble l'avenir du Niger",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:col-span-2 text-center mb-6">
            <p className="text-lg font-medium mb-4">Objectif : Nouer des partenariats solides avec le Ministère, les collectivités et les bailleurs de fonds</p>
            <img src="/images/collaboration.jpg" alt="Collaboration" className="w-full h-48 object-cover rounded-xl" />
          </div>
          
          <div className="bg-eco-green/10 p-6 rounded-xl">
            <h4 className="font-semibold flex items-center gap-2 mb-4">
              <Building className="h-5 w-5 text-eco-green" />
              Nos engagements
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                  <span className="font-medium">1</span>
                </div>
                <p className="text-sm">Soutenir les projets publics et privés en apportant des solutions concrètes face aux inondations et au climat extrême</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                  <span className="font-medium">2</span>
                </div>
                <p className="text-sm">Favoriser l'essor économique en créant des emplois qualifiés et en valorisant les ressources locales</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-eco-green flex items-center justify-center text-white flex-shrink-0">
                  <span className="font-medium">3</span>
                </div>
                <p className="text-sm">Accompagner la modernisation du cadre législatif et réglementaire en matière de construction et d'aménagement</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-eco-green p-6 rounded-xl text-white flex flex-col justify-center">
            <h4 className="font-semibold mb-4">Intéressé(e) par une collaboration ?</h4>
            <p className="mb-4 text-sm">Contactez-nous dès aujourd'hui pour discuter de vos projets et découvrir comment notre expertise peut vous accompagner.</p>
            <Button className="bg-white text-eco-green hover:bg-eco-beige hover:text-eco-green transition-colors">
              Prendre contact
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Conclusion et Contact",
      subtitle: "Merci de votre attention",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3 space-y-6">
            <div className="bg-eco-green/10 p-6 rounded-xl">
              <h4 className="font-semibold mb-4">Conclusion</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-eco-green font-bold text-sm">✓</span>
                  </div>
                  <p className="text-sm">Éco2lodgy se positionne comme un acteur majeur de la construction durable au Niger.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-eco-green font-bold text-sm">✓</span>
                  </div>
                  <p className="text-sm">Nous offrons une réponse complète aux enjeux d'urbanisation, de cadastre et d'infrastructures.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-eco-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-eco-green font-bold text-sm">✓</span>
                  </div>
                  <p className="text-sm">Nos partenariats internationaux renforcent notre capacité à innover et à partager des techniques éprouvées.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-eco-green" />
                Coordonnées
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-eco-green/10 flex items-center justify-center text-eco-green flex-shrink-0">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <p className="text-sm">Adresse : Quartier Yantala, Niamey, Niger</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-eco-green/10 flex items-center justify-center text-eco-green flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <p className="text-sm">Téléphone : +227 00 00 00 00</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-eco-green/10 flex items-center justify-center text-eco-green flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <p className="text-sm">Email : contact@eco2lodgy.ne</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-eco-green/10 flex items-center justify-center text-eco-green flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </div>
                  <p className="text-sm">Site web : www.eco2lodgy.ne</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <img src="/images/contact-image.jpg" alt="Contactez-nous" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      )
    },
  ];
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <section className="py-20 bg-muted overflow-hidden" id="presentation">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-display">Notre Entreprise</h2>
          <div className="h-1 w-20 bg-eco-green mx-auto mb-6"></div>
          <p className="text-lg text-foreground/80">
            Découvrez en détail notre vision, nos compétences et nos réalisations
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 md:p-6 border-b border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-bold">{slides[activeSlide].title}</h3>
                <p className="text-foreground/70">{slides[activeSlide].subtitle}</p>
              </div>
              <div className="flex space-x-3 items-center">
                <span className="text-sm font-medium">{activeSlide + 1} / {slides.length}</span>
                <div className="flex space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={prevSlide}
                    disabled={activeSlide === 0}
                    className="hover:bg-eco-green hover:text-white border-eco-green text-eco-green rounded-full transition-colors disabled:opacity-50"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={nextSlide} 
                    disabled={activeSlide === slides.length - 1}
                    className="hover:bg-eco-green hover:text-white border-eco-green text-eco-green rounded-full transition-colors disabled:opacity-50"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 md:p-8 min-h-[500px]">
            {slides[activeSlide].content}
          </div>
          
          <div className="p-4 md:p-6 border-t border-border flex justify-between items-center">
            <Button 
              variant="outline" 
              onClick={prevSlide}
              disabled={activeSlide === 0}
              className="hover:bg-eco-green hover:text-white border-eco-green text-eco-green transition-colors disabled:opacity-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>
            <div className="flex space-x-1">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === activeSlide ? 'bg-eco-green' : 'bg-gray-300'
                  }`}
                  aria-label={`Aller à la diapositive ${index + 1}`}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              onClick={nextSlide}
              disabled={activeSlide === slides.length - 1}
              className="hover:bg-eco-green hover:text-white border-eco-green text-eco-green transition-colors disabled:opacity-50"
            >
              Suivant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
