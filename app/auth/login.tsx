'use client';
import React from 'react';
// @ts-ignore: lucide-react types not found
import { Mail, Lock, ArrowRight, Chrome } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden font-sans">
      
      {/* --- Éléments de design en arrière-plan --- */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-sky-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] right-[-5%] w-80 h-80 bg-yellow-50/60 rounded-full blur-3xl" />

      {/* --- Carte de Connexion --- */}
      <div className="relative w-full max-w-md px-6">
        <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-2xl rounded-3xl p-8 md:p-10">
          
          {/* Logo / Header */}
          <div className="text-center mb-10">
            <div className="text-3xl font-bold text-sky-400 mb-2">
              SPORT<span className="text-orange-500">LIFE</span>
            </div>
            <h2 className="text-2xl font-extrabold text-gray-900">Bon retour parmi nous !</h2>
            <p className="text-gray-500 mt-2">Prêt pour votre séance du jour ?</p>
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
                <input 
                  type="email" 
                  placeholder="nom@exemple.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-300 focus:border-sky-400 outline-none transition-all"
                />
              </div>
            </div>

            {/* Mot de passe */}
            <div>
              <div className="flex justify-between mb-2 ml-1">
                <label className="text-sm font-bold text-gray-700">Mot de passe</label>
                <a href="#" className="text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition">Oublié ?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-sky-400" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-white/50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-300 focus:border-sky-400 outline-none transition-all"
                />
              </div>
            </div>

            {/* Bouton Connexion (Orange) */}
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
              Se connecter
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Séparateur */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-white/0 px-2 text-gray-400 font-medium">Ou continuer avec</span></div>
          </div>

          {/* Social Login */}
          <button className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition font-semibold text-gray-700">
            <Chrome size={20} className="text-sky-500" />
            Google
          </button>

          {/* Lien Inscription */}
          <p className="text-center mt-8 text-gray-600 font-medium">
            Pas encore de compte ? <br />
            <a href="#" className="text-sky-500 hover:text-sky-600 font-bold decoration-2 underline-offset-4">
              Inscrivez-vous gratuitement
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}