import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, GraduationCap,Zap,Globe,Rocket } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const SpecialTeamSection = ({ department }) => (
  <section className="py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="text-center">
        <div className="bg-gradient-to-r from-[#556331]/20 to-[#be9838]/20 backdrop-blur-xl border border-white/10 rounded-2xl p-16">
          <div className="text-6xl mb-6">👥</div>
          <h4 className="text-3xl font-bold text-white mb-4">Équipe {department}</h4>
          <p className="text-white/70 text-lg">Rencontrez les experts qui façonnent l'avenir de la formation Eco2lody</p>
        </div>
      </div>
    </div>
  </section>
);

const TrainingDepartmentSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const missions = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Vulgarisation Technique",
      description: "Simplification des concepts complexes pour sensibiliser les communautés locales à l'innovation Eco2lody.",
      color: "from-[#be9838] to-[#d4b152]"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Formation Pédagogique",
      description: "Programmes adaptés pour former artisans et techniciens à des techniques applicables sur le terrain.",
      color: "from-[#556331] to-[#6a7a4a]"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Transfert de Compétences",
      description: "Enracinement durable du savoir-faire nigérien via des formations collaboratives avec l'équipe R&D.",
      color: "from-[#8a9e5b] to-[#a3b775]"
    },
  ];

  const stats = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      value: "500+",
      label: "Personnes Formées",
      description: "Artisans et techniciens"
    },
    {
      icon: <Users className="w-10 h-10" />,
      value: "10",
      label: "Programmes Développés",
      description: "Ateliers pédagogiques"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      value: "5",
      label: "Partenariats Éducatifs",
      description: "Collaborations locales"
    },
  ];

  const trainingFeatures = [
    { icon: <BookOpen className="w-5 h-5" />, text: "Accessibilité" },
    { icon: <Users className="w-5 h-5" />, text: "Collaboration" },
    { icon: <GraduationCap className="w-5 h-5" />, text: "Expertise" },
    { icon: <Zap className="w-5 h-5" />, text: "Innovation" },
    { icon: <Globe className="w-5 h-5" />, text: "Impact Local" },
    { icon: <Rocket className="w-5 h-5" />, text: "Durabilité" }
  ];

  return (
    <><Navbar></Navbar><div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden relative">
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(190, 152, 56, 0.2); }
          50% { box-shadow: 0 0 30px rgba(190, 152, 56, 0.4); }
        }
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }
        @keyframes zoomOut {
          0% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        .animate-in { animation: fadeInUp 0.8s ease-out forwards; }
        .float { animation: float 3s ease-in-out infinite; }
        .glow { animation: glow 2s ease-in-out infinite; }
        .zoom-animation { animation: zoomIn 8s ease-in-out infinite alternate; }
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(190, 152, 56, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(190, 152, 56, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Background with grid pattern */}
      <div className="fixed inset-0 grid-pattern opacity-30"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-[#556331]/5 via-transparent to-[#be9838]/5"></div>

      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#be9838]/20 rounded-full float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }} />
        ))}
      </div>


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 zoom-animation"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: `translateY(${scrollY * 0.3}px)`
          }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#556331]/40 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="animate-in" style={{ animationDelay: '0.2s' }}>
            <span className="inline-block px-6 py-3 bg-[#be9838]/20 backdrop-blur-sm text-[#be9838] text-sm font-medium rounded-full mb-8 tracking-wider border border-[#be9838]/30">
              <BookOpen className="inline w-4 h-4 mr-2" />
              FORMATION & SAVOIR-FAIRE
            </span>
          </div>

          <div className="animate-in" style={{ animationDelay: '0.4s' }}>
            <h1 className="text-6xl md:text-8xl font-bold font-display mb-8 leading-tight">
              Former pour <br />
              <span className="text-[#be9838]">innover</span>
            </h1>
          </div>

          <div className="animate-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-4xl mx-auto">
              Vulgariser les innovations Eco2lody et former les artisans pour un développement durable local.
            </p>
          </div>

          <div className="animate-in" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {trainingFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-[#be9838]/50 transition-all duration-300"
                >
                  <span className="text-[#be9838] mr-2">{feature.icon}</span>
                  <span className="text-sm text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-in" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-[#be9838] to-[#d4b152] hover:from-[#d4b152] hover:to-[#be9838] text-black font-bold px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-xl group glow"
            >
              <span className="flex items-center">
                Rencontrer l'équipe
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 float">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-[#be9838] rounded-full mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Department Introduction */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-20">
              <div className="animate-in">
                <span className="inline-block px-6 py-3 bg-[#be9838]/20 backdrop-blur-sm text-[#be9838] text-sm font-medium rounded-full mb-8 tracking-wider border border-[#be9838]/30">
                  DÉPARTEMENT FORMATEURS
                </span>
              </div>

              <div className="animate-in" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-5xl md:text-6xl font-bold font-display mb-8 leading-tight">
                  Former pour <span className="text-[#be9838]">transformer</span>
                </h2>
              </div>

              <div className="animate-in" style={{ animationDelay: '0.4s' }}>
                <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                  Notre équipe de formateurs vulgarise les concepts techniques et transmet des compétences durables aux artisans locaux.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missions Section */}
        <section id="mission" className="py-24 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <div className="animate-in">
                <span className="inline-block text-[#be9838] font-medium mb-4 tracking-wider text-lg">
                  NOS PILIERS
                </span>
              </div>

              <div className="animate-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Approche <span className="text-[#be9838]">pédagogique</span>
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {missions.map((mission, index) => (
                <div
                  key={index}
                  className="animate-in card-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 h-full relative overflow-hidden">
                    <div className={`bg-gradient-to-br ${mission.color} p-4 rounded-xl inline-flex mb-6 text-white`}>
                      {mission.icon}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {mission.title}
                    </h4>
                    <p className="text-white/70 leading-relaxed">
                      {mission.description}
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#be9838] to-transparent opacity-50" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-br from-[#556331]/20 to-[#be9838]/10 backdrop-blur-xl border border-white/20 rounded-3xl p-16 relative overflow-hidden">
              <div className="text-center mb-16">
                <div className="animate-in">
                  <span className="inline-block text-[#be9838] font-medium mb-4 tracking-wider text-lg">
                    NOTRE IMPACT EN CHIFFRES
                  </span>
                </div>

                <div className="animate-in" style={{ animationDelay: '0.2s' }}>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Résultats <span className="text-[#be9838]">tangibles</span>
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="animate-in bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex justify-center mb-6">
                      <div className="bg-[#be9838]/20 p-4 rounded-xl text-[#be9838]">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-5xl font-bold text-white">{stat.value}</span>
                      <span className="block text-xl font-semibold text-white mt-3">{stat.label}</span>
                    </div>
                    <p className="text-white/70">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div id="team">
          <SpecialTeamSection department="Formation" />
        </div>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-gradient-to-r from-[#556331]/80 to ([#3a472c]/80 backdrop-blur-xl border border-white/20 rounded-3xl p-16 text-center relative overflow-hidden">
              <div className="animate-in">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Prêt à <span className="text-[#be9838]">apprendre</span> et innover ?
                </h3>
              </div>

              <div className="animate-in" style={{ animationDelay: '0.2s' }}>
                <p className="text-white/80 mb-12 max-w-3xl mx-auto text-xl">
                  Rejoignez nos programmes de formation pour maîtriser les techniques durables d'Eco2lody.
                </p>
              </div>

              <div className="animate-in flex flex-col sm:flex-row gap-6 justify-center" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => window.location.href = '/index/#contact'}
                  className="bg-gradient-to-r from-[#be9838] to-[#d4b152] hover:from-[#d4b152] hover:to-[#be9838] text-black font-bold px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-xl group glow"
                >
                  <span className="flex items-center">
                    Contacter le département
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>

                {/* <button
                  onClick={() => window.location.href = '/posts'}
                  className="bg-transparent border-2 border-white/30 text-white hover:border-[#be9838] hover:bg-[#be9838]/10 font-bold px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 text-lg shadow-xl group backdrop-blur-sm"
                >
                  <span className="flex items-center">
                    Voir nos publications
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div></>
  );
};

export default TrainingDepartmentSection;