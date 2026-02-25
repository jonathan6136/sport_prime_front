// @ts-ignore: next types not found in editor environment
import type { Metadata } from "next";
// @ts-ignore: next font import
import { Inter } from "next/font/google";
// @ts-ignore: allow side-effect CSS import
import "../app/colors/globals.css";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SportLife | Votre coach digital",
  description: "Atteignez vos objectifs avec la meilleure communauté sportive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-white antialiased text-gray-900`}>
        {/* Navbar commune à toutes les pages */}
        <Navbar />
        
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer simple et élégant */}
        <footer className="bg-gray-50 border-t border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold text-sky-400 mb-4">SPORT<span className="text-orange-500">LIFE</span></div>
              <p className="text-gray-500 max-w-sm">
                La plateforme qui vous accompagne dans votre transformation physique et mentale, une séance après l'autre.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Navigation</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="/dashboard" className="hover:text-sky-400">Dashboard</a></li>
                <li><a href="/profile" className="hover:text-sky-400">Profil</a></li>
                <li><a href="/register" className="hover:text-yellow-500">Rejoindre</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Légal</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><a href="#" className="hover:text-sky-400">Confidentialité</a></li>
                <li><a href="#" className="hover:text-sky-400">CGU</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-200 text-center text-xs text-gray-400 font-medium">
            © 2026 SPORTLIFE. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}