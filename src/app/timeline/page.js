'use client';
import { useFriends } from '@/context/FriendContext';
import { Phone, Video, MessageSquare, Calendar } from 'lucide-react';

export default function TimelinePage() {
  const { timeline } = useFriends();

  const getIcon = (type) => {
    if (type === 'Call') return <Phone className="text-blue-500" />;
    if (type === 'Video') return <Video className="text-purple-500" />;
    return <MessageSquare className="text-green-500" />;
  };

  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Timeline</h1>
      
      {timeline.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
          <Calendar className="mx-auto mb-4 text-gray-300" size={48} />
          <p className="text-gray-500">No interactions logged yet. Start checking in with friends!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {timeline.map((entry) => (
            <div key={entry.id} className="bg-white p-6 rounded-2xl shadow-sm border flex items-center gap-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                {getIcon(entry.type)}
              </div>
              <div>
                <h3 className="font-bold text-lg">
                  {entry.type} with <span className="text-[#1D3D33]">{entry.friendName}</span>
                </h3>
                <p className="text-sm text-gray-400">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}