import React from 'react';
import { Camera, Settings, Award, MapPin, Calendar, Heart, Edit3 } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header avec bannière et photo (Transparence et Bleu) */}
      <div className="relative h-64 bg-gradient-to-r from-sky-400 to-sky-200">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] border-4 border-white overflow-hidden shadow-xl bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute bottom-2 right-2 p-2 bg-orange-500 text-white rounded-xl shadow-lg hover:scale-110 transition cursor-pointer">
              <Camera size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Infos Principales */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-gray-900">Alexandre Sportis</h1>
            <div className="flex flex-wrap gap-4 text-gray-500 font-medium">
              <span className="flex items-center gap-1"><MapPin size={18} className="text-sky-400"/> Paris, FR</span>
              <span className="flex items-center gap-1"><Calendar size={18} className="text-sky-400"/> Membre depuis Janv. 2024</span>
            </div>
          </div>
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-orange-100 flex items-center gap-2 transition-all active:scale-95">
            <Edit3 size={20} /> Modifier le profil
          </button>
        </div>

        {/* Grille de contenu */}
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          
          {/* Colonne Gauche : Badges et Niveau (Jaune) */}
          <div className="space-y-6">
            <div className="bg-yellow-50/50 border border-yellow-100 rounded-[2rem] p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <Award className="text-yellow-500" /> Niveau Athlète
                </h3>
                <span className="bg-yellow-500 text-white text-xs font-black px-2 py-1 rounded-lg">LVL 12</span>
              </div>
              <div className="w-full bg-white rounded-full h-3 mb-2">
                <div className="bg-yellow-500 h-3 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-yellow-700 font-bold text-right">750 / 1000 XP</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-[2rem] p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-4">Badges récents</h3>
              <div className="flex gap-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-sky-400 border border-sky-100">
                    <Heart size={24} fill={i === 1 ? "currentColor" : "none"} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne Centrale & Droite : Préférences et Objectifs */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/60 backdrop-blur-md border border-blue-50 rounded-[2rem] p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Paramètres d'entraînement</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-tighter">Objectif Principal</label>
                    <p className="font-bold text-lg text-gray-800">Perte de poids & Cardio</p>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-tighter">Fréquence</label>
                    <p className="font-bold text-lg text-gray-800">4 séances / semaine</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-tighter">Sport favori</label>
                    <span className="inline-block bg-sky-100 text-sky-600 px-4 py-1 rounded-full font-bold">Natation</span>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-tighter">Statut Santé</label>
                    <p className="font-bold text-lg text-green-500 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div> En forme
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutons de réglages rapides */}
            <div className="flex gap-4">
              <button className="flex-1 bg-gray-50 hover:bg-gray-100 p-4 rounded-2xl font-bold text-gray-600 transition flex items-center justify-center gap-2">
                <Settings size={20} /> Paramètres
              </button>
              <button className="flex-1 border-2 border-orange-500/20 text-orange-600 hover:bg-orange-50 p-4 rounded-2xl font-bold transition">
                Se déconnecter
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}