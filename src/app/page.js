import Banner from '@/components/Banner';
import FriendCard from '@/components/FriendCard';
import friendsData from '../data/friends.json';

export default function Home() {
  return (
    <div className="pb-20">
      <div className="container mx-auto px-6">
        <Banner />
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            Your Friends 
            <span className="text-sm font-normal text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
              {friendsData.length} total
            </span>
          </h2>
          
          {/* Exact Grid matching the Design.jpg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {friendsData.map(friend => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}