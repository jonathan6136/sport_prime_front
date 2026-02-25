"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, LayoutDashboard, Home } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // On cache la navbar sur les pages de connexion/inscription pour plus de focus
  if (pathname === '/login' || pathname === '/register') return null;

  const navLinks = [
    { name: 'Accueil', href: '/', icon: <Home size={18} /> },
    { name: 'Dashboard', href: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Profil', href: '/profile', icon: <User size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-sky-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-sky-400">
          SPORT<span className="text-orange-500">LIFE</span>
        </Link>

        {/* Liens Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`flex items-center gap-2 font-bold transition-colors ${
                pathname === link.href ? 'text-sky-500' : 'text-gray-400 hover:text-yellow-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link 
          href="/dashboard" 
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-orange-100 transition-transform active:scale-95"
        >
          S'entraîner
        </Link>
      </div>
    </nav>
  );
}