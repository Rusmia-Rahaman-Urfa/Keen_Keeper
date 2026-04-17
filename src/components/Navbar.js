'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, History, Activity } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Timeline', href: '/timeline', icon: <History size={18} /> },
    { name: 'Stats', href: '/stats', icon: <Activity size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-[100] bg-white border-b border-gray-100 px-6 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Stays on the Left */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/Frame 2087325652.png" 
            alt="KeenKeeper Logo" 
            width={140} 
            height={40} 
            className="h-auto w-auto"
            priority 
          />
        </Link>

        {/* Navigation Section - Pushed to the Right */}
        <div className="flex items-center bg-[#F8FAFB] rounded-lg p-1 border border-gray-100 shadow-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center gap-2 px-5 py-2 rounded-md text-sm font-bold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#1D3D33] text-white shadow-md' 
                    : 'text-[#64748B] hover:bg-white hover:text-[#1D3D33] hover:shadow-sm'
                }`}
              >
                <span className={isActive ? 'text-white' : 'text-[#94A3B8]'}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}