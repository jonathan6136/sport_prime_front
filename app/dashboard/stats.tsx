import React from 'react';
import { TrendingUp, Calendar, Zap, Award } from 'lucide-react';

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-sky-50 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900">Vos <span className="text-sky-400">Performances</span></h1>
            <p className="text-gray-500 font-medium mt-2">Analyse de vos activités sur les 7 derniers jours.</p>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-bold shadow-lg shadow-orange-100 flex items-center gap-2 self-start transition-transform hover:scale-105">
            <Calendar size={20} /> Exporter le rapport
          </button>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Calories" value="12,450" unit="kcal" icon={<Zap className="text-orange-500" />} color="orange" />
          <StatCard title="Temps Total" value="8.5" unit="heures" icon={<TrendingUp className="text-sky-400" />} color="blue" />
          <StatCard title="Objectif" value="85" unit="%" icon={<Award className="text-yellow-500" />} color="yellow" />
        </div>

        {/* Graph Preview Area */}
        <div className="bg-white/70 backdrop-blur-xl border border-blue-50 rounded-[2.5rem] p-8 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-800">Évolution de l'effort</h3>
            <div className="flex gap-2">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-400">
                <span className="w-3 h-3 rounded-full bg-sky-400"></span> Réalisé
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-400">
                <span className="w-3 h-3 rounded-full bg-yellow-300"></span> Objectif
              </span>
            </div>
          </div>

          {/* Espace pour le Graphique */}
          <div className="h-64 w-full bg-gradient-to-b from-sky-50/50 to-transparent rounded-2xl border-b-2 border-sky-100 flex items-end justify-between px-4 pb-2">
             {/* Simulation de barres de graphique minimalistes */}
             {[40, 70, 45, 90, 65, 80, 55].map((height, i) => (
               <div key={i} className="flex flex-col items-center gap-2 w-full group">
                 <div 
                  className="w-8 md:w-12 bg-sky-400 rounded-t-lg transition-all duration-500 group-hover:bg-orange-400" 
                  style={{ height: `${height}%` }}
                 />
                 <span className="text-xs font-bold text-gray-400">Jour {i+1}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Sous-composant pour les cartes de statistiques
function StatCard({ title, value, unit, icon, color }: any) {
  const colorClasses: any = {
    orange: "border-orange-100 bg-orange-50/30",
    blue: "border-blue-100 bg-blue-50/30",
    yellow: "border-yellow-100 bg-yellow-50/30",
  };

  return (
    <div className={`p-6 rounded-3xl border-2 ${colorClasses[color]} transition-transform hover:scale-105 cursor-default`}>
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-white rounded-2xl shadow-sm">{icon}</div>
        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{title}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-black text-gray-900">{value}</span>
        <span className="text-sm font-bold text-gray-500">{unit}</span>
      </div>
    </div>
  );
}