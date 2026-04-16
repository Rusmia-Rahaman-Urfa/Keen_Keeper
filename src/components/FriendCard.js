import Image from 'next/image';
import Link from 'next/link';

export default function FriendCard({ friend }) {
  const statusColors = {
    'overdue': 'bg-red-100 text-red-600',
    'almost due': 'bg-yellow-100 text-yellow-600',
    'on-track': 'bg-green-100 text-green-600'
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      {/* Container with hover effects and styling */}
      <div className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center border border-gray-100 h-full flex flex-col items-center">
        
        {/* Fixed: Image Container with relative and explicit dimensions */}
        <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-gray-50 shadow-inner">
          <Image 
            src={friend.picture} 
            alt={friend.name} 
            fill 
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 112px"
            priority={friend.id <= 4} // Optimization for top-row cards
          />
        </div>

        <h3 className="font-bold text-xl text-[#1D3D33] mb-1">{friend.name}</h3>
        
        <p className="text-sm text-gray-400 mb-4 font-medium">
          {friend.days_since_contact} days since contact
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {friend.tags.map(tag => (
            <span 
              key={tag} 
              className="text-[10px] bg-gray-50 text-gray-500 px-3 py-1 rounded-lg uppercase font-bold tracking-widest border border-gray-100"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge - Pushed to bottom */}
        <div className="mt-auto">
          <span className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-tighter ${statusColors[friend.status] || 'bg-gray-100'}`}>
            {friend.status}
          </span>
        </div>
      </div>
    </Link>
  );
}