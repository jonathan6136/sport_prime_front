"use client";

import React, { useState } from 'react';
import PerformanceChart, { ActivityDatum } from './perfs';
import ActivityForm from '../activity/ActivityForm';
// @ts-ignore: lucide-react types not available
import { LayoutDashboard, History } from 'lucide-react';

export default function DashboardContainer() {
  // État partagé des données (Simule une base de données)
  const [activityData, setActivityData] = useState<ActivityDatum[]>([
    { day: 'Lun', calories: 2100, target: 2000 },
    { day: 'Mar', calories: 1850, target: 2000 },
    { day: 'Mer', calories: 2400, target: 2000 },
    { day: 'Jeu', calories: 2200, target: 2000 },
    { day: 'Ven', calories: 2800, target: 2000 },
    { day: 'Sam', calories: 1500, target: 2000 },
    { day: 'Dim', calories: 0, target: 2000 }, // Aujourd'hui
  ]);

  // Fonction pour mettre à jour les calories du dernier jour
  const handleUpdateActivity = (newCalories: number) => {
    setActivityData(prev => {
      const newData = [...prev];
      // On met à jour le dernier élément (Dimanche par exemple)
      newData[newData.length - 1].calories += newCalories;
      return newData;
    });
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Navigation Interne */}
      <div className="flex gap-4 border-b border-gray-100 pb-4">
        <button className="flex items-center gap-2 text-sky-500 font-bold border-b-2 border-sky-500 pb-4">
          <LayoutDashboard size={20} /> Vue d'ensemble
        </button>
        <button className="flex items-center gap-2 text-gray-400 font-bold hover:text-yellow-500 transition pb-4">
          <History size={20} /> Historique
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Colonne Gauche : Le Formulaire (1/3) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
               Saisir un effort <span className="text-orange-500 text-xs bg-orange-50 px-2 py-1 rounded-md">LIVE</span>
            </h2>
            {/* On passe la fonction de mise à jour au formulaire */}
            <ActivityForm onActivitySubmit={handleUpdateActivity} />
          </div>
        </div>

        {/* Colonne Droite : Le Graphique (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] p-2 shadow-sm border border-blue-50">
            <PerformanceChart data={activityData} />
          </div>
          
          {/* Carte récapitulative rapide (Jaune) */}
          <div className="bg-yellow-50/50 rounded-3xl p-6 border border-yellow-100 flex justify-between items-center">
            <div>
              <p className="text-yellow-700 font-bold uppercase text-xs tracking-widest">Conseil du jour</p>
              <p className="text-gray-700 font-medium">Vous êtes à 80% de votre objectif hebdomadaire. Continuez !</p>
            </div>
            <div className="h-12 w-12 bg-white rounded-2xl flex items-center justify-center text-yellow-500 shadow-sm font-black">
              80%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}