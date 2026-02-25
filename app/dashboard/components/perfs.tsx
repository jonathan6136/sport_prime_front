"use client";

import React from 'react';
// @ts-ignore: recharts types not found
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export interface ActivityDatum {
  day: string;
  calories: number;
  target: number;
}


export default function PerformanceChart({
  data,
}: {
  data: ActivityDatum[];
}) {
  return (
    <div className="w-full h-[400px] bg-white/50 backdrop-blur-sm rounded-3xl p-6 border border-blue-50">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Activité Hebdomadaire</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            {/* Gradient pour le Bleu Clair */}
            <linearGradient id="colorCal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f9ff" />
          
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
            dy={10}
          />
          
          <YAxis 
            hide={true} 
            domain={[0, 'dataMax + 500']} 
          />
          
          <Tooltip 
            contentStyle={{ 
              borderRadius: '16px', 
              border: 'none', 
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              backgroundColor: 'rgba(255, 255, 255, 0.9)' 
            }} 
            itemStyle={{ fontWeight: 'bold' }}
          />

          {/* Ligne d'objectif en Jaune */}
          <Area 
            type="monotone" 
            dataKey="target" 
            stroke="#eab308" 
            strokeWidth={2} 
            strokeDasharray="5 5" 
            fill="transparent" 
            name="Objectif"
          />

          {/* Courbe de performance en Bleu Clair */}
          <Area 
            type="monotone" 
            dataKey="calories" 
            stroke="#38bdf8" 
            strokeWidth={4} 
            fillOpacity={1} 
            fill="url(#colorCal)" 
            name="Calories"
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}