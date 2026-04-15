'use client';
import { useState } from 'react';
import { useFriends } from '@/context/FriendContext';
import { Phone, MessageSquare, Video, Search } from 'lucide-react';

export default function TimelinePage() {
  const { timeline } = useFriends();
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTimeline = timeline
    .filter(t => (filter === 'All' || t.type === filter))
    .filter(t => t.friendName.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-black text-[#1D3D33] mb-8">Timeline</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 text-gray-400" size={18} />
          <input 
            type="text" placeholder="Search by name..." 
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select className="px-4 py-2 rounded-lg border border-gray-200" onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      <div className="space-y-4">
        {filteredTimeline.map(item => (
          <div key={item.id} className="flex items-center justify-between bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-gray-50 rounded-full text-[#1D3D33]">
                {item.type === 'Call' && <Phone size={20} />}
                {item.type === 'Text' && <MessageSquare size={20} />}
                {item.type === 'Video' && <Video size={20} />}
              </div>
              <div>
                <p className="font-bold text-[#1D3D33]">{item.type} with {item.friendName}</p>
                <p className="text-xs text-gray-400 font-semibold uppercase">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}