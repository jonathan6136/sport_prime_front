"use client";

import React from 'react';
// @ts-ignore: react-hook-form types not found
import { useForm } from 'react-hook-form';
// @ts-ignore: lucide-react types not found
import { Dumbbell, Clock, Flame, MessageSquare, ChevronDown } from 'lucide-react';

type ActivityFormValues = {
  type: string;
  duration: number;
  intensity: string;
  notes: string;
};

export default function ActivityForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<ActivityFormValues>();

  const onSubmit = async (data: ActivityFormValues) => {
    console.log("Activité enregistrée :", data);
    // Logique d'envoi ici
  };

  return (
    <div className="max-w-2xl mx-auto p-1">
      <div className="bg-white/60 backdrop-blur-xl border border-blue-50 rounded-3xl p-8 shadow-xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-3 bg-sky-400 rounded-2xl text-white shadow-lg shadow-sky-100">
            <Dumbbell size={28} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Enregistrer une séance</h2>
            <p className="text-gray-500 font-medium text-sm">Suivez vos progrès jour après jour</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          
          {/* Type de Sport (Utilisation du Bleu Clair) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Type de sport</label>
              <div className="relative">
                <select 
                  {...register("type")}
                  className="w-full pl-4 pr-10 py-3 bg-white border border-sky-100 rounded-xl focus:ring-2 focus:ring-sky-300 outline-none appearance-none transition-all cursor-pointer"
                >
                  <option value="fitness">Musculation / Fitness</option>
                  <option value="running">Course à pied</option>
                  <option value="yoga">Yoga / Pilate</option>
                  <option value="swimming">Natation</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-sky-400 pointer-events-none" size={18} />
              </div>
            </div>

            {/* Durée (Utilisation du Jaune pour l'info secondaire) */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Durée (minutes)</label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500" size={18} />
                <input 
                  type="number" 
                  {...register("duration")}
                  placeholder="45"
                  className="w-full pl-12 pr-4 py-3 bg-white border border-yellow-100 rounded-xl focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Intensité (Sélection visuelle) */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3 ml-1 flex items-center gap-2">
              <Flame size={18} className="text-orange-500" /> Intensité de l'effort
            </label>
            <div className="flex gap-3">
              {['Faible', 'Modérée', 'Intense'].map((level) => (
                <label key={level} className="flex-1">
                  <input type="radio" name="intensity" value={level} className="sr-only peer" />
                  <div className="text-center py-3 rounded-xl border border-gray-100 bg-white cursor-pointer peer-checked:bg-sky-50 peer-checked:border-sky-400 peer-checked:text-sky-600 font-bold transition-all hover:bg-gray-50">
                    {level}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Commentaires / Sensations</label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 text-sky-400" size={18} />
              <textarea 
                {...register("notes")}
                rows={3}
                placeholder="Comment s'est passée votre séance ?"
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-100 rounded-xl focus:ring-2 focus:ring-sky-300 outline-none transition-all resize-none"
              />
            </div>
          </div>

          {/* Bouton de validation (Orange) */}
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-orange-100 transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-3"
          >
            {isSubmitting ? "Enregistrement..." : "Valider ma séance"}
            <CheckCircleIcon />
          </button>

        </form>
      </div>
    </div>
  );
}

// Petit composant d'icône interne
const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);