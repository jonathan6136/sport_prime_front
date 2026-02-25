"use client";

import React, { useState } from 'react';

interface ActivityFormProps {
  onActivitySubmit: (newCalories: number) => void;
}

export default function ActivityForm({ onActivitySubmit }: ActivityFormProps) {
  const [calories, setCalories] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (calories > 0) {
      onActivitySubmit(calories);
      setCalories(0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-gray-700">Calories brûlées</label>
      <input
        type="number"
        value={calories}
        onChange={(e) => setCalories(Number(e.target.value))}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
        min={0}
      />
      <button
        type="submit"
        className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 rounded-lg font-bold"
      >
        Ajouter
      </button>
    </form>
  );
}