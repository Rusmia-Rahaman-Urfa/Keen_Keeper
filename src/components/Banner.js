'use client';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="bg-[#1D3D33] rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
      
      <div className="relative z-10 text-center mb-12">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4">Friends to keep close in your life</h1>
        <button className="bg-[#10B981] hover:bg-[#059669] text-white px-6 py-2 rounded-full font-medium transition-all">
          Contact Now
        </button>
      </div>

      {/* Requirement 4: Metrics/Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
        {[
          { label: 'Total Friends', value: '10' },
          { label: 'On Track', value: '3' },
          { label: 'Almost Due', value: '6' },
          { label: 'Contact Overdue', value: '1' }
        ].map((stat, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center border border-white/10">
            <p className="text-4xl font-bold mb-1">{stat.value}</p>
            <p className="text-xs uppercase tracking-widest opacity-70">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}