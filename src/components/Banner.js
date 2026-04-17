'use client';
import { Plus } from 'lucide-react';

export default function Banner() {
  return (
    <section className="py-16 bg-[#F9FBFA] text-center">
      <div className="max-w-3xl mx-auto px-4">
        {/* Title matching image_32178a.png */}
        <h1 className="text-4xl font-extrabold text-[#1D3D33] mb-6 tracking-tight">
          Friends to keep close in your life
        </h1>
        
        {/* Subtitle */}
        <p className="text-[#64748B] text-lg mb-10 leading-relaxed">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the 
          relationships that matter most.
        </p>

        {/* Add Friend Button matching image_32178a.png */}
        <button className="inline-flex items-center gap-2 bg-[#1D3D33] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all shadow-md">
          <Plus size={20} />
          Add a Friend
        </button>
      </div>
    </section>
  );
}