import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton"; // Import du bouton
import AddWorkout from "@/components/AddWorkout"; // Import du composant pour ajouter une séance d'entraînement

async function getWorkouts(token: string) {
  const res = await fetch(
    "http://localhost:3000/workouts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store", // Pour toujours avoir les données fraîches
  });
  if (!res.ok) return [];
  return res.json();
}
export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session || !session.user) {
    redirect("/login");
  }
  // On récupère les projets en utilisant le token stocké dans la session
  // (Note: assure-toi que ton token est bien passé dans l'objet session via le callback JWT)
  const token = (session.user as any).token;
  const workouts = await getWorkouts(token);
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-10">
            <h1 className="text-3xl font-extrabold text-gray-900">Mes séances d'entraînement</h1>
          <LogoutButton />
        </header>
        {/* Formulaire d'ajout */}
        <AddWorkout token={token} />
        {workouts.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow-sm text-center border-2 border-dashed">
            <p className="text-gray-500">Vous n'avez pas encore de séance d'entraînement.</p>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
              + Créer une séance d'entraînement
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {workouts.map((workout: any) => (
              <div key={workout.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-blue-500 transition-colors">
                <h3 className="font-bold text-lg text-gray-800">{workout.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{workout.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}