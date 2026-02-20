"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [id, setid] = useState("");  
  const [name, setName] = useState("");
  const [workouts, setWorkouts] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // C'est ici que l'on place ton code "result"
    const result = await signIn("credentials", {
      email,
      password,
        id,
        name,
        workouts,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    if (result?.error) {
      alert("Erreur de connexion : " + result.error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-xl flex flex-col gap-4 w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800">Connexion</h1>
        
        <input 
          type="email" 
          placeholder="Email" 
          className="border p-2 rounded text-black" 
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input 
          type="password" 
          placeholder="Mot de passe" 
          className="border p-2 rounded text-black" 
          onChange={(e) => setPassword(e.target.value)}
        />

         <input 
          type="id" 
          placeholder="Identifiant" 
          className="border p-2 rounded text-black" 
          onChange={(e) => setid(e.target.value)}
        />

         <input 
          type="name" 
          placeholder="Nom d'utilisateur" 
          className="border p-2 rounded text-black" 
          onChange={(e) => setName(e.target.value)}
        />

         <input 
          type="workouts" 
          placeholder="Séances d'entraînement" 
          className="border p-2 rounded text-black" 
          onChange={(e) => setWorkouts(e.target.value)}
        />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">
          Se connecter
        </button>
      </form>
    </div>
  );
}