'use client';
import React from 'react';
// @ts-ignore: lucide-react types not found
import { Play, Activity, Target, Users } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-sky-400">SPORT<span className="text-orange-500">LIFE</span></div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-sky-400 transition">Accueil</a>
            <a href="#" className="hover:text-yellow-500 transition">Programmes</a>
            <a href="#" className="hover:text-yellow-500 transition">Communauté</a>
            <a href="#" className="hover:text-yellow-500 transition">À propos</a>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg hover:shadow-orange-200">
            Rejoindre
          </button>
        </div>
      </nav>

      {/* --- Section Hero --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Cercles décoratifs transparents */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 bg-yellow-50/50 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-4 rounded-full bg-sky-50 text-sky-600 font-bold text-sm mb-6 uppercase tracking-wider">
              Dépassez vos limites
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
              Le sport, votre <br />
              <span className="text-sky-400">nouvel équilibre.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-10 max-w-lg">
              Des programmes d'entraînement personnalisés, une communauté soudée et des conseils d'experts pour transformer votre quotidien.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-transform hover:-translate-y-1">
                Commencer maintenant
              </button>
              <button className="flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition">
                <Play className="fill-orange-500 text-orange-500" size={20} /> Voir la vidéo
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800" 
                alt="Entraînement sportif"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Badge flottant */}
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-sky-100 max-w-[200px]">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-sky-400 rounded-lg text-white"><Activity size={24}/></div>
                <span className="font-bold text-xl">450+</span>
              </div>
              <p className="text-sm text-gray-500 font-medium">Calories brûlées en moyenne par séance</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section Services (Jaune pour pages/sections secondaires) --- */}
      <section className="bg-yellow-50/30 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Pourquoi nous choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="text-yellow-600" />, title: "Objectifs Clairs", desc: "Suivez votre progression avec des indicateurs précis." },
              { icon: <Users className="text-yellow-600" />, title: "Coachs Experts", desc: "Accompagnement personnalisé par des professionnels certifiés." },
              { icon: <Activity className="text-yellow-600" />, title: "Multi-Sports", desc: "Du Yoga au CrossFit, trouvez la discipline qui vous booste." }
            ].map((feature, index) => (
              <div key={index} className="p-8 bg-white/80 border border-yellow-100 rounded-2xl hover:shadow-lg transition">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}