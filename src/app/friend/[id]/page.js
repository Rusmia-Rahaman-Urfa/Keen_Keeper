'use client';
import { useFriends } from '../../../context/FriendContext'; // Use three sets of dots
import { useParams } from 'next/navigation';
import friendsData from '@/data/friends.json';
import Image from 'next/image';
import { Phone, Mail, Video, MessageSquare } from 'lucide-react';
import { toast } from 'react-toastify';

export default function FriendDetails() {
  const { id } = useParams();
  const { addTimelineEntry } = useFriends();
  const friend = friendsData.find(f => f.id === parseInt(id));

  if (!friend) return <p className="text-center py-20">Friend not found.</p>;

  const handleInteraction = (type) => {
    addTimelineEntry(friend.name, type);
    toast.success(`${type} logged for ${friend.name}!`);
  };

  return (
    <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column */}
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-fit">
        <Image src={friend.picture} width={120} height={120} className="rounded-full mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-center">{friend.name}</h1>
        <p className="text-center text-gray-500 mb-6">{friend.bio}</p>
        <div className="space-y-3">
          <button className="w-full py-3 bg-gray-100 rounded-xl font-medium">⏰ Snooze 2 Weeks</button>
          <button className="w-full py-3 bg-gray-100 rounded-xl font-medium">📦 Archive</button>
          <button className="w-full py-3 text-red-500 font-medium">🗑️ Delete</button>
        </div>
      </div>

      {/* Right Column */}
      <div className="lg:col-span-2 space-y-8">
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-2xl border text-center">
                <p className="text-gray-400 text-sm">Last Contact</p>
                <p className="text-2xl font-bold">{friend.days_since_contact}d</p>
            </div>
            {/* Repeat for Goal and Next Due Date */}
        </div>

        <div className="bg-[#1D3D33] p-8 rounded-3xl text-white flex justify-between items-center">
            <div>
                <p className="opacity-80">Quick Check-in</p>
                <h2 className="text-xl font-bold">Log an interaction now</h2>
            </div>
            <div className="flex gap-4">
                <button onClick={() => handleInteraction('Call')} className="p-4 bg-white/10 rounded-full hover:bg-white/20"><Phone/></button>
                <button onClick={() => handleInteraction('Text')} className="p-4 bg-white/10 rounded-full hover:bg-white/20"><MessageSquare/></button>
                <button onClick={() => handleInteraction('Video')} className="p-4 bg-white/10 rounded-full hover:bg-white/20"><Video/></button>
            </div>
        </div>
      </div>
    </div>
  );
}