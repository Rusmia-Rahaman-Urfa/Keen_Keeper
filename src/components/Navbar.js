'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/Frame 2087325652.png" alt="Logo" width={140} height={40} priority />
        </Link>
        <div className="flex gap-8 items-center text-sm font-semibold tracking-tight">
          <Link href="/timeline" className="hover:text-accent-emerald transition-colors">Timeline</Link>
          <Link href="/stats" className="hover:text-accent-emerald transition-colors">Stats</Link>
          <button className="bg-primary-green text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all">
            Add Friend
          </button>
        </div>
      </div>
    </nav>
  );
}