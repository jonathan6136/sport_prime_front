"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddWorkout({ token }: { token: string }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [id, setid] = useState("");
  const [exercises, setExercises] = useState("");
  const [userId, setUserId] = useState("");


  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, date, id, exercises, userId }),
    });

    if (res.ok) {
      setTitle("");
      setDate("");
      setid("");
      setExercises("");
      setUserId("");
      router.refresh(); // Magique : rafraîchit les Server Components (la liste)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border mb-8">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Nouveau Projet</h3>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Titre de la séance d'entraînement"
          className="border p-2 rounded-lg text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Date de la séance"
          className="border p-2 rounded-lg text-black"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <textarea
          placeholder="numéro de la séance"
          className="border p-2 rounded-lg text-black"
          value={id}
          onChange={(e) => setid(e.target.value)}
        />
        <textarea
          placeholder="exercices de la séance"
          className="border p-2 rounded-lg text-black"
          value={exercises}
          onChange={(e) => setExercises(e.target.value)}
        />
        <textarea
          placeholder="Identifiant de l'utilisateur"
          className="border p-2 rounded-lg text-black"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Ajouter au Dashboard
        </button>
      </div>
    </form>
  );
}