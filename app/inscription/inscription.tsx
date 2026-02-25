"use client";

import React from 'react';
// @ts-ignore: react-hook-form types not found
import { useForm } from 'react-hook-form';
// @ts-ignore: hookform resolvers types not found
import { zodResolver } from '@hookform/resolvers/zod';
// @ts-ignore: zod types not found
import * as z from 'zod';
// @ts-ignore: lucide-react types not found
import { User, Mail, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

// Schéma de validation avec Zod
const registerSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Format d'email invalide"),
  password: z.string().min(8, "Le mot de passe doit faire au moins 8 caractères"),
  confirmPassword: z.string()
}).refine((data: any) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Données envoyées :", data);
    alert("Compte créé avec succès ! Préparez vos baskets.");
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden font-sans py-12">
      
      {/* --- Design Background --- */}
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-sky-100/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-5%] w-80 h-80 bg-yellow-50/60 rounded-full blur-3xl" />

      <div className="relative w-full max-w-lg px-6">
        <div className="bg-white/70 backdrop-blur-2xl border border-white shadow-2xl rounded-[2rem] p-8 md:p-12">
          
          <div className="mb-8 text-center">
            <div className="text-3xl font-bold text-sky-400 mb-2">SPORT<span className="text-orange-500">LIFE</span></div>
            <h1 className="text-2xl font-extrabold text-gray-900">Rejoignez l'aventure</h1>
            <p className="text-gray-500 mt-2">Créez votre profil et commencez l'entraînement.</p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            
            {/* Nom Complet */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Nom complet</label>
              <div className="relative">
                <User className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.name ? 'text-red-400' : 'text-sky-400'}`} size={20} />
                <input 
                  {...register("name")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/50 border ${errors.name ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-sky-300 outline-none transition-all`}
                  placeholder="Jean Dupont"
                />
              </div>
              {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Email professionnel</label>
              <div className="relative">
                <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.email ? 'text-red-400' : 'text-sky-400'}`} size={20} />
                <input 
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-3 bg-white/50 border ${errors.email ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-sky-300 outline-none transition-all`}
                  placeholder="jean@exemple.com"
                />
              </div>
              {errors.email && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.email.message}</p>}
            </div>

            {/* Mot de passe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Mot de passe</label>
                <div className="relative">
                  <Lock className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.password ? 'text-red-400' : 'text-sky-400'}`} size={20} />
                  <input 
                    type="password"
                    {...register("password")}
                    className={`w-full pl-12 pr-4 py-3 bg-white/50 border ${errors.password ? 'border-red-400' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-sky-300 outline-none transition-all`}
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 ml-1">Confirmation</label>
                <div className="relative">
                  <CheckCircle2 className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${errors.confirmPassword ? 'text-red-400' : 'text-sky-400'}`} size={20} />
                  <input 
                    type="password"
                    {...register("confirmPassword")}
                    className={`w-full pl-12 pr-4 py-3 bg-white/50 border ${errors.confirmPassword ? 'border-red-400 ring-1 ring-red-100' : 'border-gray-200'} rounded-xl focus:ring-2 focus:ring-sky-300 outline-none transition-all`}
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.password.message}</p>}
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.confirmPassword.message}</p>}

            {/* Bouton Inscription (Orange) */}
            <button 
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-100 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 group mt-4"
            >
              {isSubmitting ? "Création en cours..." : "Créer mon compte"}
              {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>

          {/* Footer Formulaire (Jaune pour l'info secondaire) */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 font-medium">
              Déjà membre ?{' '}
              <a href="#" className="text-yellow-600 hover:text-yellow-700 font-bold transition">
                Se connecter
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}