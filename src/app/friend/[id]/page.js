'use client';
import { useParams } from 'next/navigation';
import { useFriends } from '@/context/FriendContext';
import Image from 'next/image';
import { Phone, MessageSquare, Video, Clock, Archive, Trash2, Edit2 } from 'lucide-react';

export default function FriendDetails() {
  const { id } = useParams();
  const { friends, loading, addInteraction } = useFriends();
  
  // 1. Loading check to prevent 'Friend not found' while fetching
  if (loading) return (
    <div className="flex h-screen items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-[#1D3D33]"></div>
    </div>
  );

  // 2. Data type match: parseInt ensures the URL string '1' matches the JSON number 1
  const friend = friends.find(f => f.id === parseInt(id));

  if (!friend) return <div className="p-20 text-center font-bold text-gray-500">Friend not found</div>;

  const statusColors = {
    'overdue': 'bg-red-100 text-red-600',
    'almost due': 'bg-yellow-100 text-yellow-600',
    'on-track': 'bg-green-100 text-green-600'
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-7xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Side: Profile Information */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-50 shadow-sm">
              <Image src={friend.picture} alt={friend.name} fill className="object-cover" />
            </div>
            <h2 className="text-2xl font-black text-[#1D3D33]">{friend.name}</h2>
            <div className={`inline-block px-4 py-1 rounded-full text-[10px] font-bold uppercase mt-2 tracking-widest ${statusColors[friend.status]}`}>
              {friend.status}
            </div>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {friend.tags.map(tag => (
                <span key={tag} className="bg-green-50 text-green-700 px-3 py-1 rounded-lg text-[10px] font-bold uppercase border border-green-100">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-500 italic text-sm">"{friend.bio}"</p>
            <p className="mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Preferred: {friend.email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
              <Clock size={16} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-100 rounded-2xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all shadow-sm">
              <Archive size={16} /> Archive
            </button>
            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-red-50 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition-all shadow-sm">
              <Trash2 size={16} /> Delete
            </button>
          </div>
        </div>

        {/* Right Side: Stats & Interaction Buttons */}
        <div className="lg:col-span-8 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
              <p className="text-3xl font-black text-[#1D3D33]">{friend.days_since_contact}</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">Days Since Contact</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
              <p className="text-3xl font-black text-[#1D3D33]">{friend.goal}</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
              <p className="text-xl font-black text-[#1D3D33] uppercase">{friend.next_due_date}</p>
              <p className="text-[10px] uppercase font-bold text-gray-400 mt-1 tracking-tighter">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <h4 className="font-bold text-[#1D3D33] text-lg">Relationship Goal</h4>
              <p className="text-sm text-gray-500">Connect every <span className="font-bold text-[#1D3D33]">{friend.goal} days</span></p>
            </div>
            <button className="p-3 bg-gray-50 rounded-xl text-gray-400 hover:text-[#1D3D33] border border-gray-100 hover:bg-gray-100 transition-all">
              <Edit2 size={18} />
            </button>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <h4 className="font-bold text-[#1D3D33] text-lg mb-6">Quick Check-in</h4>
            <div className="grid grid-cols-3 gap-4">
              <button onClick={() => addInteraction(friend.name, 'Call')} className="flex flex-col items-center gap-2 p-8 rounded-3xl bg-gray-50 hover:bg-green-50 text-gray-500 hover:text-green-600 transition-all border border-transparent hover:border-green-100 group">
                <Phone size={28} className="group-hover:scale-110 transition-transform" /> 
                <span className="text-xs font-bold uppercase tracking-widest">Call</span>
              </button>
              <button onClick={() => addInteraction(friend.name, 'Text')} className="flex flex-col items-center gap-2 p-8 rounded-3xl bg-gray-50 hover:bg-blue-50 text-gray-500 hover:text-blue-600 transition-all border border-transparent hover:border-blue-100 group">
                <MessageSquare size={28} className="group-hover:scale-110 transition-transform" /> 
                <span className="text-xs font-bold uppercase tracking-widest">Text</span>
              </button>
              <button onClick={() => addInteraction(friend.name, 'Video')} className="flex flex-col items-center gap-2 p-8 rounded-3xl bg-gray-50 hover:bg-purple-50 text-gray-500 hover:text-purple-600 transition-all border border-transparent hover:border-purple-100 group">
                <Video size={28} className="group-hover:scale-110 transition-transform" /> 
                <span className="text-xs font-bold uppercase tracking-widest">Video</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}