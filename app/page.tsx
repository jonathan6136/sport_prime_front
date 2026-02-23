import { getServerSession } from "next-auth";

export default async function Home() {
  // En Next.js (App Router), on peut fetch directement dans le composant
  
  let users: any[] = [];
  try {
    const res = await fetch('http://localhost:3001/users', { cache: 'no-store' });
   users = await res.json();
  } catch (error) {
    console.error('Erreur lors de la récupération des utilisateurs:', error);
  }
  

  return (
    <main className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-5">Liste des Utilisateurs</h1>
      <ul className="bg-white shadow-md rounded-lg p-5">
        {users.map((user: any) => (
          <li key={user.id} className="border-b last:border-0 py-2">
            {user.name} - <span className="text-gray-500">{user.email}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}