import { getServerSession } from "next-auth";

export default async function Home() {
  // En Next.js (App Router), on peut fetch directement dans le composant
  const res = await fetch('http://localhost:3000/users', { cache: 'no-store' });
  const users = await res.json();

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